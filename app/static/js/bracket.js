// FIFA-Style 16-Team Knockout Bracket Renderer (Fully Bilingual & Minimalist)

function renderBracket(containerId, bracketData, isAdmin = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const matches = bracketData.matches || [];
  const getMatch = (mNum) => matches.find(m => m.match_number === mNum) || { match_number: mNum };

  const isBn = window.i18n.lang === 'bn';
  const getSlotName = (seed, name, sourceId) => {
    if (seed) return isBn ? `টিম ${seed}` : `Team ${seed}`;
    if (name && name.startsWith("Team ")) return isBn ? name.replace("Team", "টিম") : name;
    if (name) return name;
    if (sourceId) return isBn ? `বিজয়ী M${sourceId}` : `Winner M${sourceId}`;
    return isBn ? 'অনির্ধারিত' : 'TBD';
  };
  const getCustomName = (cName, name) => {
    if (cName && cName.trim()) return cName.trim();
    if (name && !name.startsWith("Team ") && !name.startsWith("টিম ")) return name.trim();
    return "";
  };

  function renderCard(m) {
    const isTBD = !m.team1_id || !m.team2_id;
    const t1Slot = getSlotName(m.team1_seed, m.team1_name, m.source_match1_id);
    const t1Custom = (m.team1_status === 'APPROVED' || !m.team1_status) ? getCustomName(m.team1_custom_name, m.team1_name) : "";

    const t2Slot = getSlotName(m.team2_seed, m.team2_name, m.source_match2_id);
    const t2Custom = (m.team2_status === 'APPROVED' || !m.team2_status) ? getCustomName(m.team2_custom_name, m.team2_name) : "";

    const t1Winner = m.winner_id && m.winner_id === m.team1_id;
    const t2Winner = m.winner_id && m.winner_id === m.team2_id;

    const showScores = (m.is_published || isAdmin) && m.team1_aggregate !== null;
    const t1Score = showScores ? m.team1_aggregate.toFixed(1) : '-';
    const t2Score = showScores ? m.team2_aggregate.toFixed(1) : '-';

    const isLive = m.status === 'LIVE' || m.status === 'SCORING';
    let statusBadge = '';
    if (m.is_published) {
      statusBadge = `<span class="badge badge-green">${window.i18n.t("published_badge")}</span>`;
    } else if (isLive) {
      statusBadge = `<span class="badge badge-amber" style="display:inline-flex; align-items:center; gap:4px;"><span class="live-pulse-dot-sm"></span>LIVE</span>`;
    } else if (m.status === 'SILENT') {
      statusBadge = `<span class="badge badge-purple">${isAdmin ? window.i18n.t("silent_result_badge") : 'Review'}</span>`;
    } else if (m.status === 'READY') {
      statusBadge = `<span class="badge badge-blue">Ready</span>`;
    }

    return `
      <div class="bracket-match-card ${isLive ? 'is-live-match' : ''}" onclick="window.app.onMatchCardClick(${m.id || 0}, ${m.match_number})">
        <div class="match-header-info">
          <span>${window.i18n.t("th_match")} ${m.match_number}</span>
          <span>${m.room_name || ''}</span>
          ${statusBadge}
        </div>
        <div class="match-team-row ${t1Winner ? 'winner' : ''}">
          <div class="match-team-info-stacked" style="display:flex; flex-direction:column; overflow:hidden; min-width:0; flex:1; text-align:left;">
            <span class="match-team-name" title="${t1Slot}" style="font-weight:800; font-size:0.85rem; color:#0f172a; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${t1Slot}</span>
            ${t1Custom ? `<span class="match-team-custom-name" title="${t1Custom}" style="font-size:0.75rem; font-weight:700; color:#047857; line-height:1.2; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${t1Custom}</span>` : ''}
          </div>
          <span class="match-team-score">${t1Score}</span>
        </div>
        <div class="match-team-row ${t2Winner ? 'winner' : ''}">
          <div class="match-team-info-stacked" style="display:flex; flex-direction:column; overflow:hidden; min-width:0; flex:1; text-align:left;">
            <span class="match-team-name" title="${t2Slot}" style="font-weight:800; font-size:0.85rem; color:#0f172a; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${t2Slot}</span>
            ${t2Custom ? `<span class="match-team-custom-name" title="${t2Custom}" style="font-size:0.75rem; font-weight:700; color:#047857; line-height:1.2; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${t2Custom}</span>` : ''}
          </div>
          <span class="match-team-score">${t2Score}</span>
        </div>
      </div>
    `;
  }

  const finalMatch = getMatch(15);
  const championSlot = (finalMatch.is_published || isAdmin) && finalMatch.winner_name 
    ? getSlotName(finalMatch.winner_seed, finalMatch.winner_name, null)
    : (window.i18n.lang === 'bn' ? 'অনির্ধারিত' : 'To Be Decided');
  const championCustom = (finalMatch.is_published || isAdmin) && (finalMatch.winner_status === 'APPROVED' || !finalMatch.winner_status)
    ? getCustomName(finalMatch.winner_custom_name, finalMatch.winner_name)
    : "";

  const trophySvg = `
    <svg class="trophy-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
  `;

  const html = `
    <div class="bracket-container">
      <!-- LEFT HALF -->
      <div class="bracket-half">
        <div class="bracket-round-col">
          <div class="bracket-round-title">${window.i18n.t("round_of_16_left")}</div>
          ${renderCard(getMatch(1))}
          ${renderCard(getMatch(2))}
          ${renderCard(getMatch(3))}
          ${renderCard(getMatch(4))}
        </div>

        <div class="bracket-round-col">
          <div class="bracket-round-title">${window.i18n.t("quarter_finals")}</div>
          ${renderCard(getMatch(9))}
          ${renderCard(getMatch(10))}
        </div>

        <div class="bracket-round-col">
          <div class="bracket-round-title">${window.i18n.t("semi_final_1")}</div>
          ${renderCard(getMatch(13))}
        </div>
      </div>

      <!-- CENTER / FINALS -->
      <div class="bracket-center">
        <div class="trophy-container">
          ${trophySvg}
        </div>
        <div class="champion-card">
          <div class="champion-label">${window.i18n.t("champion")}</div>
          <div class="champion-name">${championSlot}</div>
          ${championCustom ? `<div class="champion-custom-name" style="font-size:0.88rem; font-weight:700; color:#047857; margin-top:0.25rem;">${championCustom}</div>` : ''}
        </div>
        <div style="width: 100%;">
          <div class="bracket-round-title">${window.i18n.t("grand_final")}</div>
          ${renderCard(finalMatch)}
        </div>
      </div>

      <!-- RIGHT HALF -->
      <div class="bracket-half right">
        <div class="bracket-round-col">
          <div class="bracket-round-title">${window.i18n.t("round_of_16_right")}</div>
          ${renderCard(getMatch(5))}
          ${renderCard(getMatch(6))}
          ${renderCard(getMatch(7))}
          ${renderCard(getMatch(8))}
        </div>

        <div class="bracket-round-col">
          <div class="bracket-round-title">${window.i18n.t("quarter_finals")}</div>
          ${renderCard(getMatch(11))}
          ${renderCard(getMatch(12))}
        </div>

        <div class="bracket-round-col">
          <div class="bracket-round-title">${window.i18n.t("semi_final_2")}</div>
          ${renderCard(getMatch(14))}
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

window.renderBracket = renderBracket;
