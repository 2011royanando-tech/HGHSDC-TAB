// Microsoft Excel-Style Adjudication Spreadsheet Engine (Fully Bilingual & Minimalist)

class AdjudicationSpreadsheet {
  constructor(containerId) {
    this.containerId = containerId;
    this.scorecardId = null;
    this.match = null;
    this.team1Speakers = [];
    this.team2Speakers = [];
    this.criteria = [];
    this.scores = {};
    this.extraRows = [];
    this.status = "DRAFT";
  }

  loadData(scorecardData, matchData, t1Speakers, t2Speakers, options = {}) {
    this.mode = options.mode || "official";
    this.scorecardId = scorecardData.scorecard ? scorecardData.scorecard.id : (scorecardData.id || 1);
    this.status = (scorecardData.scorecard && scorecardData.scorecard.status) || scorecardData.status || "DRAFT";
    this.match = matchData;
    this.team1Speakers = t1Speakers || [];
    this.team2Speakers = t2Speakers || [];
    this.criteria = scorecardData.criteria.map((c, idx) => ({
      id: c.id || idx,
      name: c.name,
      name_bn: c.name_bn || "",
      max_marks: parseFloat(c.max_marks) || 30.0
    }));

    this.scores = {};
    if (scorecardData.scores) {
      scorecardData.scores.forEach(s => {
        this.scores[`${s.team_id}_${s.speaker_position}_${s.criterion_id}`] = parseFloat(s.score) || 0;
      });
    }

    this.render();
  }

  addColumn() {
    if (this.status === "SUBMITTED") return;
    const isBn = window.i18n.lang === 'bn';
    const colPrompt = isBn ? "নতুন মানদণ্ডের নাম লিখুন:" : "Enter new criterion name:";
    const colName = prompt(colPrompt, `Criterion ${this.criteria.length + 1}`);
    if (!colName || !colName.trim()) return;

    const maxPrompt = isBn ? "সর্বোচ্চ নম্বর নির্ধারণ করুন:" : "Enter maximum marks for this criterion:";
    const maxM = prompt(maxPrompt, "25");
    const maxVal = Math.max(1, parseFloat(maxM) || 25);

    this.criteria.push({
      id: `custom_${Date.now()}`,
      name: colName.trim(),
      name_bn: colName.trim(),
      max_marks: maxVal
    });
    this.render();
  }

  removeCriterion(critId) {
    if (this.status === "SUBMITTED") return;
    if (this.criteria.length <= 1) {
      showToast(window.i18n.lang === 'bn' ? "কমপক্ষে একটি মানদণ্ড কলাম থাকা আবশ্যক।" : "At least one criterion column is required.", "error");
      return;
    }
    this.criteria = this.criteria.filter(c => c.id !== critId);
    this.render();
  }

  updateCriterion(critId, field, value) {
    if (this.status === "SUBMITTED") return;
    const crit = this.criteria.find(c => c.id === critId);
    if (crit) {
      if (field === "max_marks") {
        crit.max_marks = Math.max(1, parseFloat(value) || 1);
      } else {
        crit[field] = value;
      }
      this.recalculate();
    }
  }

  setScore(teamId, speakerPos, critId, value) {
    if (this.status === "SUBMITTED") return;
    const val = parseFloat(value);
    const key = `${teamId}_${speakerPos}_${critId}`;
    this.scores[key] = isNaN(val) ? 0 : val;
    this.recalculate();
  }

  getScore(teamId, speakerPos, critId) {
    const val = this.scores[`${teamId}_${speakerPos}_${critId}`];
    return val !== undefined ? val : 0;
  }

  getSpeakerTotal(teamId, speakerPos) {
    let total = 0;
    this.criteria.forEach(c => {
      total += this.getScore(teamId, speakerPos, c.id);
    });
    return Math.round(total * 100) / 100;
  }

  getTeamTotal(teamId) {
    let total = 0;
    for (let sp = 1; sp <= 3; sp++) {
      total += this.getSpeakerTotal(teamId, sp);
    }
    return Math.round(total * 100) / 100;
  }

  validateScores() {
    let errors = [];
    this.criteria.forEach(c => {
      [this.match.team1_id, this.match.team2_id].forEach(tId => {
        for (let sp = 1; sp <= 3; sp++) {
          const score = this.getScore(tId, sp, c.id);
          if (score < 0) {
            errors.push(`${c.name}: score cannot be negative.`);
          }
          if (score > c.max_marks) {
            errors.push(`${c.name}: score ${score} exceeds max marks ${c.max_marks}.`);
          }
        }
      });
    });
    return errors;
  }

  recalculate() {
    [this.match.team1_id, this.match.team2_id].forEach(tId => {
      for (let sp = 1; sp <= 3; sp++) {
        const sumEl = document.getElementById(`sp-total-${tId}-${sp}`);
        if (sumEl) sumEl.textContent = this.getSpeakerTotal(tId, sp).toFixed(2);
      }
      const teamSumEl = document.getElementById(`team-total-${tId}`);
      if (teamSumEl) teamSumEl.textContent = this.getTeamTotal(tId).toFixed(2);
    });

    const t1Sum = this.getTeamTotal(this.match.team1_id);
    const t2Sum = this.getTeamTotal(this.match.team2_id);
    const compT1 = document.getElementById("comp-score-t1");
    const compT2 = document.getElementById("comp-score-t2");
    if (compT1) compT1.textContent = t1Sum.toFixed(2);
    if (compT2) compT2.textContent = t2Sum.toFixed(2);
  }

  renderAvatar(name, photoUrl) {
    if (photoUrl && photoUrl.trim()) {
      return `<img src="${photoUrl.trim()}" class="debater-avatar" alt="${name}" onerror="this.outerHTML='<span class=\\'debater-avatar-placeholder\\'>${(name||'D')[0]}</span>'" />`;
    }
    const initial = (name || "D").trim()[0] || "D";
    return `<span class="debater-avatar-placeholder">${initial}</span>`;
  }

  render() {
    window.sheet = this;
    const container = document.getElementById(this.containerId);
    if (!container || !this.match) return;

    const isSubmitted = this.status === "SUBMITTED";
    const isBn = window.i18n.lang === 'bn';

    const getSlotName = (seed, name, def) => {
      if (seed) return isBn ? `টিম ${seed}` : `Team ${seed}`;
      if (name && name.startsWith("Team ")) return isBn ? name.replace("Team", "টিম") : name;
      return name || def;
    };
    const getCustomName = (cName, name) => {
      if (cName && cName.trim()) return cName.trim();
      if (name && !name.startsWith("Team ") && !name.startsWith("টিম ")) return name.trim();
      return "";
    };

    const t1Slot = getSlotName(this.match.team1_seed, this.match.team1_name, "Team 1");
    const t1Custom = (this.match.team1_status === 'APPROVED' || !this.match.team1_status) ? getCustomName(this.match.team1_custom_name, this.match.team1_name) : "";
    const t1 = {
      id: this.match.team1_id,
      name: this.match.team1_name || "Team 1",
      slot_name: t1Slot,
      custom_name: t1Custom,
      status: this.match.team1_status || "APPROVED",
      speakers: this.team1Speakers,
      cls: "team-1-row"
    };

    const t2Slot = getSlotName(this.match.team2_seed, this.match.team2_name, "Team 2");
    const t2Custom = (this.match.team2_status === 'APPROVED' || !this.match.team2_status) ? getCustomName(this.match.team2_custom_name, this.match.team2_name) : "";
    const t2 = {
      id: this.match.team2_id,
      name: this.match.team2_name || "Team 2",
      slot_name: t2Slot,
      custom_name: t2Custom,
      status: this.match.team2_status || "APPROVED",
      speakers: this.team2Speakers,
      cls: "team-2-row"
    };

    let badgeText = isSubmitted ? window.i18n.t('ballot_submitted') : (window.i18n.lang === 'bn' ? 'অফিসিয়াল মূল্যায়ন পত্র' : 'Official Scorecard');
    let noticeText = window.i18n.t("independent_notice");
    let reviewBtnText = window.i18n.t("review_ballot");

    if (this.mode === "practice") {
      badgeText = isSubmitted ? (isBn ? 'অনুশীলনী সম্পন্ন ও বিজয়ী ঘোষিত' : 'Practice Winner Declared') : (isBn ? 'সরাসরি প্র্যাকটিস মূল্যায়ন পত্র' : 'Live Practice Scorecard');
      noticeText = isBn ? 'ব্যক্তিগত স্যান্ডবক্স মহড়া • টুর্নামেন্ট ডাটাবেস অক্ষত' : 'Personal Sandbox • Zero Database Mutation';
      reviewBtnText = isBn ? 'অনুশীলনী বিজয়ী ঘোষণা' : 'Declare Practice Winner';
    } else if (this.mode === "senior") {
      badgeText = isSubmitted ? (isBn ? 'সিনিয়র মাস্টার্স ফলাফল চূড়ান্ত' : 'Senior Masters Finalized') : (isBn ? '10ম শ্রেণি সিনিয়র মূল্যায়ন পত্র' : 'Class 10 Senior Scorecard');
      noticeText = isBn ? '10ম শ্রেণির চ্যাম্পিয়নশিপ ম্যাচ • অফিসিয়াল স্কোরশিট' : 'Class 10 Championship Match • Official Scorecard';
    }

    let html = `
      <div class="spreadsheet-wrapper">
        <div class="spreadsheet-toolbar">
          <div class="toolbar-left">
            <span class="badge ${isSubmitted ? 'badge-green' : (this.mode === 'practice' ? 'badge-amber' : (this.mode === 'senior' ? 'badge-gold' : 'badge-blue'))}">
              ${badgeText}
            </span>
            <span style="font-size: 0.82rem; color: #475569;">
              ${noticeText}
            </span>
          </div>
          <div class="toolbar-right">
            ${!isSubmitted ? `
              <button class="btn btn-secondary btn-sm" onclick="window.sheet.addColumn()">
                + ${window.i18n.t("add_criterion")}
              </button>
              <button class="btn btn-secondary btn-sm" onclick="window.sheet.saveDraft()">
                ${window.i18n.t("save_draft")}
              </button>
              <button class="btn btn-primary btn-sm" onclick="window.sheet.openReviewModal()">
                ${reviewBtnText}
              </button>
            ` : `
              ${this.mode === 'practice' ? `
                <button class="btn btn-secondary btn-sm" onclick="window.sheet.status='DRAFT'; window.sheet.render();">
                  ${isBn ? 'পুনরায় মূল্যায়ন করুন' : 'Unlock & Re-score'}
                </button>
              ` : `
                <span class="badge badge-purple">${window.i18n.lang === 'bn' ? 'ব্যালট লক করা হয়েছে' : 'Official Ballot Locked'}</span>
              `}
            `}
          </div>
        </div>

        <div class="spreadsheet-scroll">
          <table class="sheet-table">
            <thead>
              <tr>
                <th class="sheet-col-sticky-1">#</th>
                <th class="sheet-col-sticky-2">${window.i18n.t("debater_column")}</th>
                ${this.criteria.map((c, i) => `
                  <th>
                    <div class="crit-header-container">
                      ${!isSubmitted ? `
                        <input type="text" class="crit-name-input" value="${(window.i18n.lang === 'bn' && c.name_bn) ? c.name_bn : c.name}"
                               onchange="window.sheet.updateCriterion('${c.id}', 'name', this.value)"
                               title="Edit Criterion Name" />
                      ` : `<span>${(window.i18n.lang === 'bn' && c.name_bn) ? c.name_bn : c.name}</span>`}
                      <div class="crit-max-container">
                        <span>Max:</span>
                        ${!isSubmitted ? `
                          <input type="number" class="crit-max-input" value="${c.max_marks}" step="1" min="1"
                                 onchange="window.sheet.updateCriterion('${c.id}', 'max_marks', this.value)" />
                        ` : `<strong>${c.max_marks}</strong>`}
                        ${!isSubmitted && this.criteria.length > 1 ? `
                          <button style="background:none;border:none;color:#dc2626;cursor:pointer;font-size:0.95rem;font-weight:700;"
                                  onclick="window.sheet.removeCriterion('${c.id}')" title="Delete Column">x</button>
                        ` : ''}
                      </div>
                    </div>
                  </th>
                `).join('')}
                <th style="min-width: 110px; text-align: right; background: #e2e8f0;">${window.i18n.t("total_column")}</th>
              </tr>
            </thead>
            <tbody>
    `;

    [t1, t2].forEach((t, tIdx) => {
      html += `
        <tr class="team-header-row">
          <td class="sheet-col-sticky-1">${tIdx + 1}</td>
          <td class="sheet-col-sticky-2" colspan="${this.criteria.length + 2}" style="padding: 0.65rem 1rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
              <div>
                <div style="font-size: 0.95rem; font-weight: 800; color: #1e3a8a; display:flex; align-items:center; gap:0.5rem;">
                  <span>${t.slot_name}</span>
                  <span class="badge ${tIdx === 0 ? 'badge-blue' : 'badge-amber'}" style="font-size:0.72rem; padding:2px 8px;">
                    ${tIdx === 0 ? (isBn ? 'সরকারি দল (Proposition)' : 'Proposition') : (isBn ? 'বিরোধী দল (Opposition)' : 'Opposition')}
                  </span>
                </div>
                ${t.custom_name ? `
                  <div class="team-roster-name-row" style="font-size: 0.88rem; font-weight: 700; color: #047857; margin-top: 0.28rem; display: flex; align-items: center; gap: 0.45rem;">
                    <span style="background:#d1fae5; color:#065f46; border:1px solid #a7f3d0; padding: 1px 7px; border-radius: 4px; font-size: 0.72rem; font-weight: 800;">
                      ${isBn ? 'অনুমোদিত দল' : 'Approved Roster'}
                    </span>
                    <span>${isBn ? 'দলের নাম' : 'Team'}: <strong style="color:#065f46; font-size:0.92rem;">${t.custom_name}</strong></span>
                  </div>
                ` : ''}
              </div>
              ${!isSubmitted ? `
                <button class="btn btn-secondary btn-sm" style="font-size:0.75rem; padding:0.15rem 0.5rem;" onclick="window.sheet.addRow(${t.id})">
                  + ${window.i18n.t("add_row")}
                </button>
              ` : ''}
            </div>
          </td>
        </tr>
      `;

      for (let sp = 1; sp <= 3; sp++) {
        const spObj = t.speakers.find(s => s.position === sp) || t.speakers[sp - 1] || { name: `Speaker ${sp}`, role_code: `${sp}`, photo_url: "" };
        const roleCode = spObj.role_code || `${sp}`;

        html += `
          <tr class="${t.cls}">
            <td class="sheet-col-sticky-1">${tIdx + 1}.${sp}</td>
            <td class="sheet-col-sticky-2">
              <div class="debater-cell-content">
                <span class="role-code-badge role-code-${roleCode}">${roleCode}</span>
                ${this.renderAvatar(spObj.name, spObj.photo_url)}
                <div class="debater-text-info">
                  <div style="display:flex; align-items:center; gap:0.35rem;"><span class="debater-name">${spObj.name}</span>${window.getWhatsAppButton ? window.getWhatsAppButton(spObj.phone, spObj.name) : ""}</div>
                  <span class="debater-sub">Speaker ${sp} ${roleCode === 'L' ? '(Leader)' : ''}</span>
                </div>
              </div>
            </td>
            ${this.criteria.map(c => {
              const score = this.getScore(t.id, sp, c.id);
              const isInvalid = score < 0 || score > c.max_marks;
              return `
                <td>
                  <input type="number" step="0.5" min="0" max="${c.max_marks}"
                         class="sheet-input ${isInvalid ? 'invalid' : ''}"
                         value="${score}"
                         ${isSubmitted ? 'disabled' : ''}
                         oninput="window.sheet.setScore(${t.id}, ${sp}, '${c.id}', this.value)" />
                </td>
              `;
            }).join('')}
            <td class="speaker-sum-cell" id="sp-total-${t.id}-${sp}">
              ${this.getSpeakerTotal(t.id, sp).toFixed(2)}
            </td>
          </tr>
        `;
      }

      html += `
        <tr class="team-total-row">
          <td class="sheet-col-sticky-1">&Sigma;</td>
          <td class="sheet-col-sticky-2" style="font-weight: 800; font-size: 0.95rem;">
            <div>${t.slot_name} ${window.i18n.t("team_total")}</div>
            ${t.custom_name ? `<div style="font-size:0.8rem; font-weight:700; color:#047857; margin-top:0.15rem;">${t.custom_name}</div>` : ''}
          </td>
          ${this.criteria.map(() => `<td></td>`).join('')}
          <td class="team-sum-cell" id="team-total-${t.id}">
            ${this.getTeamTotal(t.id).toFixed(2)}
          </td>
        </tr>
      `;
    });

    html += `
            </tbody>
          </table>
        </div>

        <div class="match-comparison-bar">
          <div class="comp-team">
            <span class="comp-team-name" style="color: #0369a1;">
              <span style="font-weight:800; font-size:1rem;">${t1.slot_name}</span>
              ${t1.custom_name ? `<span style="display:block; font-size:0.82rem; font-weight:700; color:#047857; line-height:1.2;">${t1.custom_name}</span>` : ''}
            </span>
            <span class="comp-team-score" id="comp-score-t1">
              ${this.getTeamTotal(t1.id).toFixed(2)}
            </span>
          </div>
          <div class="comp-vs">VS</div>
          <div class="comp-team right">
            <span class="comp-team-name" style="color: #15803d;">
              <span style="font-weight:800; font-size:1rem;">${t2.slot_name}</span>
              ${t2.custom_name ? `<span style="display:block; font-size:0.82rem; font-weight:700; color:#047857; line-height:1.2;">${t2.custom_name}</span>` : ''}
            </span>
            <span class="comp-team-score" id="comp-score-t2">
              ${this.getTeamTotal(t2.id).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  async saveDraft() {
    const errs = this.validateScores();
    if (errs.length > 0) {
      showToast(errs[0], "error");
      return false;
    }

    const payload = {
      criteria: this.criteria.map((c, i) => ({
        id: typeof c.id === "number" ? c.id : null,
        name: c.name,
        name_bn: c.name_bn,
        max_marks: c.max_marks
      })),
      scores: []
    };

    [this.match.team1_id, this.match.team2_id].forEach(tId => {
      for (let sp = 1; sp <= 3; sp++) {
        this.criteria.forEach((c, idx) => {
          payload.scores.push({
            criterion_id: typeof c.id === "number" ? c.id : idx,
            team_id: tId,
            speaker_position: sp,
            score: this.getScore(tId, sp, c.id)
          });
        });
      }
    });

    if (this.mode === "practice") {
      try {
        localStorage.setItem("hghsdc_practice_scores", JSON.stringify(this.scores));
      } catch (e) {}
      showToast(window.i18n.lang === 'bn' ? "মহড়ার ড্রাফট স্কোর সংরক্ষিত হয়েছে।" : "Practice scores saved in local sandbox.", "success");
      return true;
    }

    if (this.mode === "senior") {
      try {
        const t1Tot = this.getTeamTotal(this.match.team1_id);
        const t2Tot = this.getTeamTotal(this.match.team2_id);
        let winTeam = "";
        if (t1Tot > t2Tot) winTeam = this.match.team1_name;
        else if (t2Tot > t1Tot) winTeam = this.match.team2_name;
        await window.api.post('/api/senior/score', {
          team1_score: t1Tot,
          team2_score: t2Tot,
          winner_team: winTeam
        });
        showToast(window.i18n.lang === 'bn' ? "সিনিয়র সেগমেন্টের স্কোর ড্রাফট সংরক্ষিত হয়েছে।" : "Senior segment score draft saved.", "success");
        return true;
      } catch (e) {
        showToast(e.message, "error");
        return false;
      }
    }

    try {
      await window.api.post(`/api/scoring/scorecard/${this.scorecardId}/save`, payload);
      showToast(window.i18n.lang === 'bn' ? "খসড়া সফলভাবে সংরক্ষিত হয়েছে।" : "Draft saved successfully.", "success");
      return true;
    } catch (e) {
      showToast(e.message, "error");
      return false;
    }
  }

  openReviewModal() {
    const errs = this.validateScores();
    if (errs.length > 0) {
      showToast(errs[0], "error");
      return;
    }

    const isBn = window.i18n.lang === 'bn';
    const getSlotName = (seed, name, def) => {
      if (seed) return isBn ? `টিম ${seed}` : `Team ${seed}`;
      if (name && name.startsWith("Team ")) return isBn ? name.replace("Team", "টিম") : name;
      return name || def;
    };
    const getCustomName = (cName, name) => {
      if (cName && cName.trim()) return cName.trim();
      if (name && !name.startsWith("Team ") && !name.startsWith("টিম ")) return name.trim();
      return "";
    };

    const t1Slot = getSlotName(this.match.team1_seed, this.match.team1_name, "Team 1");
    const t1Custom = (this.match.team1_status === 'APPROVED' || !this.match.team1_status) ? getCustomName(this.match.team1_custom_name, this.match.team1_name) : "";
    const t1Label = t1Slot + (t1Custom ? ` (${t1Custom})` : '');

    const t2Slot = getSlotName(this.match.team2_seed, this.match.team2_name, "Team 2");
    const t2Custom = (this.match.team2_status === 'APPROVED' || !this.match.team2_status) ? getCustomName(this.match.team2_custom_name, this.match.team2_name) : "";
    const t2Label = t2Slot + (t2Custom ? ` (${t2Custom})` : '');

    const t1 = { id: this.match.team1_id, slot: t1Slot, custom: t1Custom, label: t1Label, total: this.getTeamTotal(this.match.team1_id) };
    const t2 = { id: this.match.team2_id, slot: t2Slot, custom: t2Custom, label: t2Label, total: this.getTeamTotal(this.match.team2_id) };

    const isTie = t1.total === t2.total;

    let modalHtml = `
      <div class="modal-backdrop" id="review-modal">
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 class="modal-title">
              <img src="/static/img/hghsdc.png?v=2026" alt="Official Seal" style="width:26px; height:26px; object-fit:contain; border-radius:50%;" />
              ${window.i18n.t("review_ballot")}
            </h3>
            <button style="background:none;border:none;color:#000;font-size:1.5rem;cursor:pointer;" onclick="document.getElementById('review-modal').remove()">x</button>
          </div>
          <div class="modal-body">
            <div style="background: #f8fafc; padding: 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--border-card); margin-bottom: 1.25rem;">
              <div style="display:flex; justify-content: space-between; align-items:center; margin-bottom: 0.65rem;">
                <div>
                  <strong>${t1.slot}</strong>
                  ${t1.custom ? `<div style="font-size:0.82rem; font-weight:700; color:#047857;">${t1.custom}</div>` : ''}
                </div>
                <span style="font-size: 1.35rem; font-weight: 900; color: #0369a1;">${t1.total.toFixed(2)}</span>
              </div>
              <div style="display:flex; justify-content: space-between; align-items:center;">
                <div>
                  <strong>${t2.slot}</strong>
                  ${t2.custom ? `<div style="font-size:0.82rem; font-weight:700; color:#047857;">${t2.custom}</div>` : ''}
                </div>
                <span style="font-size: 1.35rem; font-weight: 900; color: #15803d;">${t2.total.toFixed(2)}</span>
              </div>
            </div>

            ${isTie ? `
              <div style="background: #fef3c7; border: 1px solid #fde68a; padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.25rem;">
                <h4 style="color: #b45309; margin-bottom: 0.35rem;">${window.i18n.lang === 'bn' ? 'টাইব্রেকার সিদ্ধান্ত প্রয়োজন' : 'Tie Detected: Decisive Vote Required'}</h4>
                <p style="font-size: 0.85rem; color: #78350f; margin-bottom: 0.75rem;">
                  ${window.i18n.lang === 'bn' ? `উভয় দলের মোট নম্বর সমান (${t1.total.toFixed(2)})। নিয়ম অনুযায়ী বিজয়ী দল নির্বাচন করুন:` : `Both teams scored equally (${t1.total.toFixed(2)}). Please cast your decisive winner ballot:`}
                </p>
                <div class="form-group">
                  <label class="form-label">${window.i18n.t("tie_vote_label")}</label>
                  <select id="tiebreak-select" class="form-select">
                    <option value="${t1.id}">${t1.label}</option>
                    <option value="${t2.id}">${t2.label}</option>
                  </select>
                </div>
              </div>
            ` : ''}

            <p style="font-size: 0.82rem; color: #64748b;">
              ${window.i18n.lang === 'bn' ? 'সতর্কতা: একবার চূড়ান্তভাবে জমা দিলে অ্যাডমিন অনুমতি ছাড়া আর পরিবর্তন করা যাবে না।' : 'Notice: Once submitted, your ballot is final and cannot be altered without Admin authorization.'}
            </p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="document.getElementById('review-modal').remove()">
              ${window.i18n.t("cancel")}
            </button>
            <button class="btn btn-primary" onclick="window.sheet.confirmSubmit()">
              ${window.i18n.t("submit_final_ballot")}
            </button>
          </div>
        </div>
      </div>
    `;

    const div = document.createElement("div");
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);
  }

  async confirmSubmit() {
    const tieSelect = document.getElementById("tiebreak-select");
    const tieChoice = tieSelect ? parseInt(tieSelect.value) : null;

    const payload = {
      criteria: this.criteria.map((c, i) => ({
        id: typeof c.id === "number" ? c.id : null,
        name: c.name,
        name_bn: c.name_bn,
        max_marks: c.max_marks
      })),
      scores: [],
      tie_choice_team_id: tieChoice
    };

    [this.match.team1_id, this.match.team2_id].forEach(tId => {
      for (let sp = 1; sp <= 3; sp++) {
        this.criteria.forEach((c, idx) => {
          payload.scores.push({
            criterion_id: typeof c.id === "number" ? c.id : idx,
            team_id: tId,
            speaker_position: sp,
            score: this.getScore(tId, sp, c.id)
          });
        });
      }
    });

    const t1Tot = this.getTeamTotal(this.match.team1_id);
    const t2Tot = this.getTeamTotal(this.match.team2_id);
    let winName = "";
    if (t1Tot > t2Tot) {
      winName = this.match.team1_custom_name ? `${this.match.team1_name} (${this.match.team1_custom_name})` : this.match.team1_name;
    } else if (t2Tot > t1Tot) {
      winName = this.match.team2_custom_name ? `${this.match.team2_name} (${this.match.team2_custom_name})` : this.match.team2_name;
    } else {
      winName = tieChoice === this.match.team1_id ? this.match.team1_name : this.match.team2_name;
    }

    if (this.mode === "practice") {
      document.getElementById("review-modal")?.remove();
      this.status = "SUBMITTED";
      this.render();
      if (window.app && window.app.triggerCelebration) {
        window.app.triggerCelebration(winName, Math.max(t1Tot, t2Tot), Math.min(t1Tot, t2Tot), window.i18n.lang === 'bn' ? 'অনুশীলনী বিতর্কে চমৎকার বিজয়ের জন্য অভিনন্দন!' : 'Congratulations on winning the practice debate simulation!');
      }
      showToast(window.i18n.lang === 'bn' ? "অনুশীলনী বিতর্ক সম্পন্ন ও বিজয়ী ঘোষিত!" : "Practice debate completed and champion declared!", "success");
      return;
    }

    if (this.mode === "senior") {
      try {
        await window.api.post('/api/senior/score', {
          team1_score: t1Tot,
          team2_score: t2Tot,
          winner_team: winName
        });
        if (window.app && window.app.currentUser && window.app.currentUser.role === "ADMIN") {
          await window.api.post('/api/senior/publish', {});
        }
        document.getElementById("review-modal")?.remove();
        this.status = "SUBMITTED";
        this.render();
        if (window.app && window.app.triggerCelebration) {
          window.app.triggerCelebration(winName, Math.max(t1Tot, t2Tot), Math.min(t1Tot, t2Tot), window.i18n.lang === 'bn' ? '10ম শ্রেণি সিনিয়র মাস্টার্স চ্যাম্পিয়ন দলকে প্রাণঢালা অভিনন্দন!' : 'Congratulations to the Class 10 Senior Master Champions!');
        }
        showToast(window.i18n.lang === 'bn' ? "সিনিয়র মাস্টার্স ব্যালট সফলভাবে জমা ও ফলাফল চূড়ান্ত হয়েছে!" : "Senior master ballot submitted and finalized!", "success");
        if (window.app) window.app.render();
      } catch (e) {
        showToast(e.message, "error");
      }
      return;
    }

    try {
      await window.api.post(`/api/scoring/scorecard/${this.scorecardId}/submit`, payload);
      document.getElementById("review-modal")?.remove();
      showToast(window.i18n.lang === 'bn' ? "চূড়ান্ত ব্যালট সফলভাবে জমা হয়েছে।" : "Official ballot submitted successfully.", "success");
      this.status = "SUBMITTED";
      this.render();
      if (window.app) window.app.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }
}

window.AdjudicationSpreadsheet = AdjudicationSpreadsheet;
