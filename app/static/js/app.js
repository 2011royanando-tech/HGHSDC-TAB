
const OFFICIAL_HGHSDC_WHATSAPP = "8801700000000";

function formatWhatsAppLink(phone, name = "") {
  if (!phone) {
    return `https://wa.me/${OFFICIAL_HGHSDC_WHATSAPP}?text=Assalamu%20Alaikum%2C%20HGHSDC%20Debate%20Tab%20Query`;
  }
  let clean = String(phone).replace(/[^0-9]/g, "");
  if (!clean || clean.length < 5) {
    const lower = String(phone).toLowerCase();
    if (lower.includes("admin") || lower.includes("hghsdc") || lower.includes("director")) {
      return `https://wa.me/${OFFICIAL_HGHSDC_WHATSAPP}?text=Assalamu%20Alaikum%20Tab%20Director%2C%20HGHSDC%20Tournament`;
    }
    return `https://wa.me/${OFFICIAL_HGHSDC_WHATSAPP}?text=Assalamu%20Alaikum%2C%20Query%20regarding%20${encodeURIComponent(name || phone)}`;
  }
  if (clean.startsWith("01")) {
    clean = "88" + clean;
  } else if (clean.length === 10 && clean.startsWith("1")) {
    clean = "880" + clean;
  }
  const textParam = name ? `?text=Assalamu%20Alaikum%20${encodeURIComponent(name)}%2C%20HGHSDC%20Traditional%20Debate` : "";
  return `https://wa.me/${clean}${textParam}`;
}

const WHATSAPP_SVG_PATH = "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z";

function getWhatsAppButton(phone, name = "") {
  const link = formatWhatsAppLink(phone, name);
  return `
    <a href="${link}" target="_blank" rel="noopener noreferrer" class="whatsapp-icon-btn" title="WhatsApp: ${name || phone || 'Help'}">
      <svg viewBox="0 0 24 24" width="15" height="15" fill="#ffffff">
        <path d="${WHATSAPP_SVG_PATH}"/>
      </svg>
    </a>
  `;
}

function getWhatsAppPill(phone, name = "", label = "WhatsApp") {
  const link = formatWhatsAppLink(phone, name);
  return `
    <a href="${link}" target="_blank" rel="noopener noreferrer" class="whatsapp-pill-btn" title="Chat on WhatsApp: ${name || phone}">
      <svg viewBox="0 0 24 24" width="13" height="13">
        <path d="${WHATSAPP_SVG_PATH}"/>
      </svg>
      <span>${label}</span>
    </a>
  `;
}

window.getWhatsAppButton = getWhatsAppButton;
window.getWhatsAppPill = getWhatsAppPill;
window.formatWhatsAppLink = formatWhatsAppLink;


// Official Brand Crest and Logo Asset Renderers
function getHghsdcLogo(size = 38) {
  return `<img src="/static/img/hghsdc.png" width="${size}" height="${size}" alt="HGHSDC" style="display:inline-block; object-fit:contain; flex-shrink:0; vertical-align:middle; border-radius:50%;" />`;
}

function getHghsLogo(size = 38) {
  return `<img src="/static/img/hghs.png" width="${size}" height="${size}" alt="HGHS" style="display:inline-block; object-fit:contain; flex-shrink:0; vertical-align:middle; border-radius:50%;" />`;
}

function getIntraLogo(size = 38) {
  return `<img src="/static/img/intra.png" width="${size}" height="${size}" alt="INTRA" style="display:inline-block; object-fit:contain; flex-shrink:0; vertical-align:middle;" />`;
}

window.getHghsdcLogo = getHghsdcLogo;
window.getHghsLogo = getHghsLogo;
window.getIntraLogo = getIntraLogo;

// Main Traditional Debate Tournament OS Controller — 100% Fully Bilingual & Minimalist

function getSvg(name, size = 16) {
  const icons = {
    grid: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    bracket: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9 6-6"></path></svg>`,
    users: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    user: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    scale: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>`,
    clock: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    document: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    shield: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    bell: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>`,
    edit: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
    trash: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
    plus: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    check: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    lock: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    download: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    print: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`,
    alert: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    trophy: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34"></path><path d="M6 4h12a2 2 0 0 1 2 2v6a8 8 0 0 1-16 0V6a2 2 0 0 1 2-2z"></path></svg>`,
    mic: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>`,
    message: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    clipboard: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
    shuffle: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>`,
    sparkles: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,
    whatsapp: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#25D366"><path d="${WHATSAPP_SVG_PATH}"/></svg>`
  };
  return icons[name] || '';
}

class DebateApp {
  constructor() {
    this.currentUser = null;
    this.currentView = "public_bracket";
    this.tournamentData = null;
    this.bracketData = null;
    this.stats = null;
    this.timerSettings = null;
    this.cachedTeams = [];
    this.cachedUsers = [];
    this.sidebarCollapsed = localStorage.getItem("debate_tab_sidebar_collapsed") === "true";
    this.theme = localStorage.getItem("debate_tab_theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }

  applyTheme(theme) {
    this.theme = theme;
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("debate_tab_theme", theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", theme === "dark" ? "#080e1a" : "#091224");
    }
  }

  toggleTheme() {
    const nextTheme = this.theme === "dark" ? "light" : "dark";
    this.applyTheme(nextTheme);
    this.renderNavbar();
    const modeLabel = nextTheme === "dark" 
      ? (window.i18n.lang === 'bn' ? "ডার্ক থিম সক্রিয় করা হয়েছে" : "Dark theme enabled")
      : (window.i18n.lang === 'bn' ? "লাইট থিম সক্রিয় করা হয়েছে" : "Light theme enabled");
    showToast(modeLabel, "info");
  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    localStorage.setItem("debate_tab_sidebar_collapsed", this.sidebarCollapsed ? "true" : "false");
    const sidebar = document.getElementById("app-sidebar");
    const container = document.querySelector(".app-container");
    if (sidebar) {
      if (this.sidebarCollapsed) {
        sidebar.classList.add("collapsed");
      } else {
        sidebar.classList.remove("collapsed");
      }
    }
    if (container) {
      if (this.sidebarCollapsed) {
        container.classList.add("sidebar-hidden");
      } else {
        container.classList.remove("sidebar-hidden");
      }
    }
  }

  handlePhotoUpload(fileInput, targetHiddenId, previewId) {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      showToast(window.i18n.lang === 'bn' ? "ছবির আকার 5 মেগাবাইটের কম হতে হবে।" : "Photo size must be less than 5MB.", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        const canvas = document.createElement("canvas");
        const MAX_SIZE = 120;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > MAX_SIZE) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.85);

        const hiddenInput = document.getElementById(targetHiddenId);
        if (hiddenInput) hiddenInput.value = dataUrl;

        const previewContainer = document.getElementById(previewId);
        if (previewContainer) {
          previewContainer.innerHTML = `<img src="${dataUrl}" style="width:44px; height:44px; border-radius:50%; object-fit:cover; border:2px solid #000; display:inline-block;" />`;
        }
        showToast(window.i18n.lang === 'bn' ? "ছবি সফলভাবে সিলেক্ট হয়েছে!" : "Photo selected successfully!", "success");
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  async handleDashboardPhotoChange(fileInput) {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function(e) {
      const img = new Image();
      img.onload = async function() {
        const canvas = document.createElement("canvas");
        const MAX_SIZE = 120;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > MAX_SIZE) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.85);

        try {
          await window.api.post("/api/auth/update-profile", { photo_url: dataUrl });
          if (window.app && window.app.currentUser) {
            window.app.currentUser.photo_url = dataUrl;
          }
          showToast(window.i18n.lang === 'bn' ? "প্রোফাইল ছবি সফলভাবে আপডেট হয়েছে!" : "Profile photo updated successfully!", "success");
          window.app.render();
        } catch(err) {
          showToast(err.message, "error");
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  async init() {
    this.applyTheme(this.theme);
    window.i18n.applyTranslations();

    try {
      if (window.api.getToken()) {
        const meRes = await window.api.get("/api/auth/me");
        this.currentUser = meRes.user;
        this.currentView = this.currentUser.role === "ADMIN" ? "control_center" : (this.currentUser.role === "JUDGE" ? "judging" : "dashboard");
      }
    } catch (e) {
      this.currentUser = null;
    }

    try {
      this.timerSettings = await window.api.get("/api/timer/settings");
      window.debateTimer.init(this.timerSettings);
    } catch (e) {
      console.warn("Could not load timer settings:", e);
    }

    this.render();
  }

  navigate(view) {
    this.currentView = view;
    this.render();
  }

  async loadTournamentStatus() {
    try {
      const res = await window.api.get("/api/tournament/status");
      this.tournamentData = res.tournament;
      this.stats = res.stats;
    } catch (e) {
      console.warn("Could not load tournament status:", e);
    }
  }



  async swapTeamSpeakers(teamId, posA, posB) {
    try {
      const teamsRes = await window.api.get("/api/teams");
      const team = teamsRes.teams.find(t => t.id === teamId);
      if (!team) return;

      let s1 = team.speaker1_id;
      let s2 = team.speaker2_id;
      let s3 = team.speaker3_id;

      if ((posA === 1 && posB === 2) || (posA === 2 && posB === 1)) {
        [s1, s2] = [s2, s1];
      } else if ((posA === 2 && posB === 3) || (posA === 3 && posB === 2)) {
        [s2, s3] = [s3, s2];
      } else if ((posA === 1 && posB === 3) || (posA === 3 && posB === 1)) {
        [s1, s3] = [s3, s1];
      }

      await window.api.post("/api/teams/reorder-speakers", {
        team_id: teamId,
        speaker1_id: s1,
        speaker2_id: s2,
        speaker3_id: s3
      });

      showToast(window.i18n.lang === 'bn' ? "স্পিকার পজিশন সফলভাবে অদলবদল করা হয়েছে।" : "Speaker positions interchanged successfully.", "success");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }


  async undoStartMatch(matchId) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    if (!confirm(isBn ? "আপনি কি নিশ্চিত যে এই ম্যাচের শুরু বাতিল (Undo Start) করতে চান?" : "Are you sure you want to undo start for this match?")) return;
    try {
      const res = await window.api.post(`/api/judging/matches/${matchId}/undo-start`, {});
      showToast(res.message, "success");
      await this.loadBracket();
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async undoEndMatch(matchId) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    if (!confirm(isBn ? "আপনি কি নিশ্চিত যে এই ম্যাচের ফলাফল এবং অগ্রগতি বাতিল (Undo End) করতে চান?" : "Are you sure you want to undo the result of this match? This will unpublish the result and remove the advanced team from the next round.")) return;
    try {
      const res = await window.api.post(`/api/results/match/${matchId}/undo-end`, {});
      document.getElementById("match-review-modal")?.remove();
      showToast(res.message, "success");
      await this.loadBracket();
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async undoStartRound(roundNum) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    if (!confirm(isBn ? `আপনি কি রাউন্ড ${roundNum}-এর শুরু বাতিল (Undo Start) করতে চান?` : `Are you sure you want to undo start for Round ${roundNum}?`)) return;
    try {
      const res = await window.api.post(`/api/judging/rounds/${roundNum}/undo-start`, {});
      showToast(res.message, "success");
      await this.loadBracket();
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async unlockBracket() {
    const isBn = window.i18n.lang === 'bn';
    const confirmMsg = isBn ? 
      "আপনি কি নিশ্চিত যে টুর্নামেন্ট ব্র্যাকেট আনলক করতে চান? এর ফলে দল পরিবর্তন বা পেয়ারিং পুনরায় তৈরি করা যাবে।" :
      "Are you sure you want to unlock the tournament bracket? This will allow adjusting pairings and teams.";
    if (!confirm(confirmMsg)) return;

    try {
      const res = await window.api.post("/api/tournament/bracket/unlock", {});
      showToast(res.message || (isBn ? "ব্র্যাকেট আনলক করা হয়েছে।" : "Bracket unlocked successfully."), "success");
      await this.loadBracket();
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async openJudgeBallotAsAdmin(scorecardId, judgeName) {
    try {
      const scData = await window.api.get(`/api/scoring/scorecard/${scorecardId}`);
      const m = {
        id: scData.scorecard.match_id,
        team1_id: scData.scorecard.team1_id,
        team2_id: scData.scorecard.team2_id,
        team1_name: scData.scorecard.team1_name,
        team1_custom_name: scData.scorecard.team1_custom_name,
        team1_seed: scData.scorecard.team1_seed,
        team1_status: scData.scorecard.team1_status,
        team2_name: scData.scorecard.team2_name,
        team2_custom_name: scData.scorecard.team2_custom_name,
        team2_seed: scData.scorecard.team2_seed,
        team2_status: scData.scorecard.team2_status
      };

      // Fetch team speakers
      const t1Res = await window.api.get(`/api/teams/${m.team1_id}`);
      const t2Res = await window.api.get(`/api/teams/${m.team2_id}`);

      let modalHtml = `
        <div class="modal-backdrop" id="admin-ballot-modal">
          <div class="modal-dialog" style="max-width: 900px;">
            <div class="modal-header">
              <h3 class="modal-title">
                ${getHghsdcLogo(24)} Tab Director Override: Judge ${judgeName} (Match ${scData.scorecard.match_number})
              </h3>
              <button style="background:none;border:none;color:#000;font-size:1.5rem;cursor:pointer;" onclick="document.getElementById('admin-ballot-modal').remove()">x</button>
            </div>
            <div class="modal-body">
              <div id="admin-sheet-mount"></div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" onclick="document.getElementById('admin-ballot-modal').remove()">Close</button>
            </div>
          </div>
        </div>
      `;

      let div = document.createElement("div");
      div.innerHTML = modalHtml;
      document.body.appendChild(div.firstElementChild);

      const adminSheet = new window.AdjudicationSpreadsheet("admin-sheet-mount");
      adminSheet.loadData(scData, m, t1Res.team ? [t1Res.team.speaker1, t1Res.team.speaker2, t1Res.team.speaker3] : [], t2Res.team ? [t2Res.team.speaker1, t2Res.team.speaker2, t2Res.team.speaker3] : []);
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async deleteBallot(scorecardId, matchId, judgeName) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const confirmMsg = isBn
      ? `আপনি কি নিশ্চিত যে বিচারক "${judgeName}"-এর এই ব্যালটটি মুছে ফেলতে চান? স্কোর খালি হয়ে ড্রাফটে ফেরত যাবে।`
      : `Are you sure you want to delete the ballot submitted by Judge "${judgeName}"? All scores will be cleared and reset to Draft.`;
    if (!confirm(confirmMsg)) return;

    try {
      const res = await window.api.delete(`/api/scoring/ballot/${scorecardId}`);
      showToast(res.message, "success");
      await this.openMatchReviewModal(matchId);
      await this.loadBracket();
      await this.loadTournamentStatus();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async requestRejudgeBallot(scorecardId, matchId, judgeName) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const promptMsg = isBn
      ? `বিচারক "${judgeName}"-এর কাছে ব্যালট পুনর্বিবেচনা (Re-Judge)-র কারণ বা মন্তব্য লিখুন:`
      : `Enter the reason or instruction for Judge "${judgeName}" to re-evaluate the ballot:`;
    const defaultReason = isBn
      ? "পুনর্মূল্যায়নের জন্য ট্যাব ডিরেক্টর দ্বারা ব্যালট আনলক করা হয়েছে।"
      : "Re-evaluation requested by Tab Director.";
    const reason = prompt(promptMsg, defaultReason);
    if (reason === null) return;

    try {
      const res = await window.api.post(`/api/scoring/ballot/${scorecardId}/request-rejudge`, { reason: reason.trim() || defaultReason });
      showToast(res.message, "success");
      await this.openMatchReviewModal(matchId);
      await this.loadBracket();
      await this.loadTournamentStatus();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async openGranularResetModal() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    let optionsData = { users: [], rounds: [], judges: [] };
    try {
      optionsData = await window.api.get('/api/tournament/granular-reset-options');
    } catch (e) {
      console.warn("Could not load reset options:", e);
    }

    const modalHtml = `
      <div class="modal-backdrop" id="granular-reset-modal" style="z-index:99999;">
        <div class="modal-dialog" style="max-width: 680px; max-height: 88vh; overflow-y: auto;">
          <div class="modal-header" style="border-bottom: 2px solid #ef4444;">
            <h3 class="modal-title" style="color: #b91c1c; display:flex; align-items:center; gap:0.5rem;">
              ${getSvg("trash", 20)} ${isBn ? 'সিস্টেম ও ডাটাবেস গ্র্যানুলার রিসেট' : 'Granular System & Database Reset'}
            </h3>
            <button style="background:none; border:none; color:#000; font-size:1.5rem; cursor:pointer;" onclick="document.getElementById('granular-reset-modal').remove()">x</button>
          </div>
          <div class="modal-body" style="display:flex; flex-direction:column; gap:1.25rem;">
            <div style="background:#fee2e2; border:1px solid #fca5a5; border-radius:var(--radius-md); padding:0.85rem 1rem; color:#991b1b; font-size:0.85rem;">
              <strong>⚠️ ${isBn ? 'সতর্কবার্তা:' : 'Warning:'}</strong>
              ${isBn ? 'যেসব আইটেম রিসেট করতে চান সেগুলো টিকমার্ক দিন। ট্যাব ডিরেক্টর (Admin) অ্যাকাউন্ট সর্বদা সম্পূর্ণ নিরাপদ ও অপরিবর্তিত থাকবে।' : 'Selectively choose items to wipe or reset. The Tab Director (ADMIN) account is permanently protected.'}
              <div style="margin-top:0.35rem;">
                <span class="badge badge-green" style="font-size:0.75rem;">🛡️ Tab Director (ADMIN): PROTECTED</span>
              </div>
            </div>

            <!-- 1. USERS RESET -->
            <div class="win-glass" style="padding:1rem; border-left:4px solid #3b82f6;">
              <label style="display:flex; align-items:center; gap:0.65rem; font-weight:800; cursor:pointer;">
                <input type="checkbox" id="rst-users" onchange="document.getElementById('rst-users-options').style.display = this.checked ? 'block' : 'none';" />
                <span>${isBn ? 'ব্যবহারকারী ও অ্যাকাউন্ট রিসেট (Users Reset)' : 'Reset Users & Accounts'}</span>
              </label>
              <div id="rst-users-options" style="display:none; margin-top:0.65rem; padding-left:1.65rem; font-size:0.84rem;">
                <p style="color:#64748b; margin-bottom:0.45rem;">${isBn ? 'পদবী অনুযায়ী ফিল্টার করুন (সব আনচেক থাকলে সকল নন-অ্যাডমিন ইউজার ডিলিট হবে):' : 'Filter by role (if none selected, all non-admin users will be reset):'}</p>
                <div style="display:flex; gap:1rem; flex-wrap:wrap;">
                  <label><input type="checkbox" class="rst-user-role" value="MEMBER" /> ${isBn ? 'সাধারণ সদস্য (Members)' : 'Members'}</label>
                  <label><input type="checkbox" class="rst-user-role" value="LEADER" /> ${isBn ? 'দলনেতা (Leaders)' : 'Leaders'}</label>
                  <label><input type="checkbox" class="rst-user-role" value="JUDGE" /> ${isBn ? 'বিচারক (Judges)' : 'Judges'}</label>
                </div>
              </div>
            </div>

            <!-- 2. ROUNDS & MATCHES RESET -->
            <div class="win-glass" style="padding:1rem; border-left:4px solid #8b5cf6;">
              <label style="display:flex; align-items:center; gap:0.65rem; font-weight:800; cursor:pointer;">
                <input type="checkbox" id="rst-rounds" onchange="document.getElementById('rst-rounds-options').style.display = this.checked ? 'block' : 'none';" />
                <span>${isBn ? 'রাউন্ড ও ম্যাচ রিসেট (Rounds & Matches Reset)' : 'Reset Rounds & Matches'}</span>
              </label>
              <div id="rst-rounds-options" style="display:none; margin-top:0.65rem; padding-left:1.65rem; font-size:0.84rem;">
                <p style="color:#64748b; margin-bottom:0.45rem;">${isBn ? 'নির্দিষ্ট রাউন্ড টিকমার্ক দিন (সব আনচেক থাকলে সকল রাউন্ড ও ব্র্যাকেট ড্রাফটে ফেরত যাবে):' : 'Select specific rounds (if none checked, all rounds will be reset to Draft):'}</p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
                  ${optionsData.rounds.map(r => `
                    <label><input type="checkbox" class="rst-round-item" value="${r.id}" /> ${r.name} (${r.status})</label>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- 3. JUDGING & SCORECARDS RESET -->
            <div class="win-glass" style="padding:1rem; border-left:4px solid #f59e0b;">
              <label style="display:flex; align-items:center; gap:0.65rem; font-weight:800; cursor:pointer;">
                <input type="checkbox" id="rst-judging" onchange="document.getElementById('rst-judging-options').style.display = this.checked ? 'block' : 'none';" />
                <span>${isBn ? 'বিচারকদের স্কোরকার্ড ও ব্যালট রিসেট (Judging & Scorecards Reset)' : 'Reset Judging Ballots & Scores'}</span>
              </label>
              <div id="rst-judging-options" style="display:none; margin-top:0.65rem; padding-left:1.65rem; font-size:0.84rem;">
                <p style="color:#64748b; margin-bottom:0.45rem;">${isBn ? 'নির্দিষ্ট বিচারক টিক দিন (আনচেক থাকলে সকল বিচারকের ব্যালট রিসেট হবে):' : 'Select specific judges (if none checked, all ballots will be reset):'}</p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; max-height:160px; overflow-y:auto;">
                  ${optionsData.judges.map(j => `
                    <label><input type="checkbox" class="rst-judge-item" value="${j.id}" /> <strong>${j.full_name}</strong> (${j.submitted_ballots_count || 0} ব্যালট)</label>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- 4. TEAMS RESET -->
            <div class="win-glass" style="padding:1rem; border-left:4px solid #10b981;">
              <label style="display:flex; align-items:center; gap:0.65rem; font-weight:800; cursor:pointer;">
                <input type="checkbox" id="rst-teams" />
                <span>${isBn ? 'দল তালিকা ও কাস্টম নাম রিসেট (Reset Team Rosters)' : 'Reset Team Rosters & Custom Names'}</span>
              </label>
              <p style="color:#64748b; font-size:0.8rem; margin:0.35rem 0 0 1.65rem;">
                ${isBn ? 'অনুমোদিত দলের কাস্টম নাম ও স্পিকার নির্ধারণ মুছে ফেলে ডিফল্ট 16 দলের স্তরে ফিরিয়ে নেয়।' : 'Clears customized team names and bound debater rosters back to default 16 team seed slots.'}
              </p>
            </div>

            <!-- 5. SENIOR MATCH RESET -->
            <div class="win-glass" style="padding:1rem; border-left:4px solid #eab308;">
              <label style="display:flex; align-items:center; gap:0.65rem; font-weight:800; cursor:pointer;">
                <input type="checkbox" id="rst-senior" />
                <span>${isBn ? '10ম শ্রেণি সিনিয়র ম্যাচ রিসেট (Reset Senior Debate)' : 'Reset Senior Class 10 Match'}</span>
              </label>
              <p style="color:#64748b; font-size:0.8rem; margin:0.35rem 0 0 1.65rem;">
                ${isBn ? 'সিনিয়র বিতর্ক ম্যাচের স্কোর, ফলাফল ও প্রকাশনা রিসেট করে শিডিউল্ড অবস্থায় ফিরিয়ে আনে।' : 'Resets senior match score, winner, and publication status back to Scheduled.'}
              </p>
            </div>

            <!-- 6. MESSAGES & AUDIT RESET -->
            <div class="win-glass" style="padding:1rem; border-left:4px solid #64748b;">
              <div style="display:flex; gap:1.5rem; flex-wrap:wrap;">
                <label style="display:flex; align-items:center; gap:0.5rem; font-weight:700; cursor:pointer;">
                  <input type="checkbox" id="rst-messages" />
                  <span>${isBn ? 'বার্তা ও নোটিফিকেশন মুছুন' : 'Clear All Messages'}</span>
                </label>
                <label style="display:flex; align-items:center; gap:0.5rem; font-weight:700; cursor:pointer;">
                  <input type="checkbox" id="rst-audit" />
                  <span>${isBn ? 'অডিট লগ মুছুন' : 'Clear Audit Log'}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer" style="background:#f8fafc; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between;">
            <button class="btn btn-secondary" onclick="document.getElementById('granular-reset-modal').remove()">${window.i18n.t("cancel")}</button>
            <button class="btn btn-danger" onclick="window.app.submitGranularReset()">
              ${getSvg("trash", 14)} ${isBn ? 'নির্বাচিত আইটেম রিসেট করুন' : 'Execute Selected Reset'}
            </button>
          </div>
        </div>
      </div>
    `;

    const div = document.createElement("div");
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);
  }

  async submitGranularReset() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const rstUsers = document.getElementById("rst-users")?.checked;
    const rstRounds = document.getElementById("rst-rounds")?.checked;
    const rstJudging = document.getElementById("rst-judging")?.checked;
    const rstTeams = document.getElementById("rst-teams")?.checked;
    const rstSenior = document.getElementById("rst-senior")?.checked;
    const rstMessages = document.getElementById("rst-messages")?.checked;
    const rstAudit = document.getElementById("rst-audit")?.checked;

    if (!rstUsers && !rstRounds && !rstJudging && !rstTeams && !rstSenior && !rstMessages && !rstAudit) {
      showToast(isBn ? 'অনুগ্রহ করে কমপক্ষে একটি রিসেট আইটেম নির্বাচন করুন।' : 'Please select at least one item to reset.', 'error');
      return;
    }

    const confirmMsg = isBn
      ? '⚠️ চূড়ান্ত নিশ্চিতকরণ: আপনি কি নিশ্চিত যে নির্বাচিত আইটেমগুলো স্থায়ীভাবে রিসেট করতে চান? এই প্রক্রিয়া আর ফিরিয়ে নেওয়া যাবে না।'
      : '⚠️ FINAL CONFIRMATION: Are you sure you want to permanently reset the selected components? This cannot be undone.';
    if (!confirm(confirmMsg)) return;

    const payload = {
      reset_users: Boolean(rstUsers),
      reset_rounds: Boolean(rstRounds),
      reset_judging: Boolean(rstJudging),
      reset_teams: Boolean(rstTeams),
      reset_senior: Boolean(rstSenior),
      reset_messages: Boolean(rstMessages),
      reset_audit: Boolean(rstAudit)
    };

    if (rstUsers) {
      const roles = Array.from(document.querySelectorAll(".rst-user-role:checked")).map(el => el.value);
      if (roles.length > 0) payload.user_roles = roles;
    }

    if (rstRounds) {
      const rounds = Array.from(document.querySelectorAll(".rst-round-item:checked")).map(el => parseInt(el.value, 10));
      if (rounds.length > 0) payload.selected_round_ids = rounds;
    }

    if (rstJudging) {
      const judges = Array.from(document.querySelectorAll(".rst-judge-item:checked")).map(el => parseInt(el.value, 10));
      if (judges.length > 0) payload.selected_judge_ids = judges;
    }

    try {
      const res = await window.api.post('/api/tournament/granular-reset', payload);
      document.getElementById('granular-reset-modal')?.remove();
      showToast(res.message, "success");
      await this.loadTournamentStatus();
      await this.loadBracket();
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async renderAdminDirectory(container) {
    if (!this.directoryActiveTab) this.directoryActiveTab = "users";
    const isBn = window.i18n && window.i18n.lang === 'bn';

    let html = `
      <div class="section-header">
        <div>
          <h2 class="section-title">${isBn ? 'ডিরেক্টরি ও অনুমোদন কেন্দ্র' : 'Tournament Directory & Approvals'}</h2>
          <p class="section-desc">${isBn ? 'ব্যবহারকারী তালিকা, দলনেতা/বিচারক অনুমোদন ও বিচারক প্যানেল পরিচালনা' : 'Central management for user accounts, role approvals, and judge clashes'}</p>
        </div>
        <div style="display:flex; gap:0.5rem;">
          ${this.directoryActiveTab === 'users' ? `
            <button class="btn btn-primary btn-sm" onclick="window.app.openCreateUserModal()">
              ${getSvg("plus", 14)} ${window.i18n.t("add_new_user")}
            </button>
          ` : ''}
          ${this.directoryActiveTab === 'judges' ? `
            <button class="btn btn-primary btn-sm" onclick="window.app.openAssignJudgeClashModal()">
              ${getSvg("scale", 14)} ${isBn ? 'বিচারক নির্ধারণ' : 'Assign Judge'}
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Segmented Tab Navigation -->
      <div class="segmented-control" style="display:inline-flex; background:rgba(226,232,240,0.6); padding:4px; border-radius:var(--radius-md); margin-bottom:1.25rem; border:1px solid var(--border-card);">
        <button class="segmented-btn ${this.directoryActiveTab === 'users' ? 'active' : ''}" 
                onclick="window.app.directoryActiveTab='users'; window.app.renderAdminDirectory(document.getElementById('main-view'))"
                style="padding:0.45rem 1.15rem; border-radius:var(--radius-sm); font-weight:700; font-size:0.85rem; border:none; cursor:pointer; background:${this.directoryActiveTab === 'users' ? '#ffffff' : 'transparent'}; color:${this.directoryActiveTab === 'users' ? 'var(--brand-navy)' : 'var(--text-secondary)'}; box-shadow:${this.directoryActiveTab === 'users' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none'};">
          ${getSvg("user", 14)} ${window.i18n.t("users_directory")}
        </button>
        <button class="segmented-btn ${this.directoryActiveTab === 'approvals' ? 'active' : ''}" 
                onclick="window.app.directoryActiveTab='approvals'; window.app.renderAdminDirectory(document.getElementById('main-view'))"
                style="padding:0.45rem 1.15rem; border-radius:var(--radius-sm); font-weight:700; font-size:0.85rem; border:none; cursor:pointer; background:${this.directoryActiveTab === 'approvals' ? '#ffffff' : 'transparent'}; color:${this.directoryActiveTab === 'approvals' ? 'var(--brand-navy)' : 'var(--text-secondary)'}; box-shadow:${this.directoryActiveTab === 'approvals' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none'};">
          ${getSvg("clipboard", 14)} ${window.i18n.t("requests_approvals")}
        </button>
        <button class="segmented-btn ${this.directoryActiveTab === 'judges' ? 'active' : ''}" 
                onclick="window.app.directoryActiveTab='judges'; window.app.renderAdminDirectory(document.getElementById('main-view'))"
                style="padding:0.45rem 1.15rem; border-radius:var(--radius-sm); font-weight:700; font-size:0.85rem; border:none; cursor:pointer; background:${this.directoryActiveTab === 'judges' ? '#ffffff' : 'transparent'}; color:${this.directoryActiveTab === 'judges' ? 'var(--brand-navy)' : 'var(--text-secondary)'}; box-shadow:${this.directoryActiveTab === 'judges' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none'};">
          ${getSvg("scale", 14)} ${window.i18n.t("judges")}
        </button>
      </div>

      <div id="directory-tab-content"></div>
    `;

    container.innerHTML = html;
    const tabContent = document.getElementById("directory-tab-content");
    if (!tabContent) return;

    if (this.directoryActiveTab === "users") {
      await this.renderAdminUsersDirectory(tabContent, true);
    } else if (this.directoryActiveTab === "approvals") {
      await this.renderAdminApprovals(tabContent, true);
    } else if (this.directoryActiveTab === "judges") {
      await this.renderAdminJudges(tabContent, true);
    }
  }

  async loadBracket() {
    try {
      this.bracketData = await window.api.get("/api/tournament/bracket");
    } catch (e) {
      console.warn("Could not load bracket:", e);
    }
  }

  async render() {
    await this.loadTournamentStatus();
    this.renderNavbar();
    this.renderSidebar();
    this.renderFloatingWhatsApp();

    const mainContainer = document.getElementById("main-view");
    if (!mainContainer) return;

    mainContainer.classList.remove("view-enter");
    void mainContainer.offsetWidth;
    mainContainer.classList.add("view-enter");

    const publicViews = ["public_bracket", "login", "register", "senior", "practice", "timer"];
    if (!this.currentUser && !publicViews.includes(this.currentView)) {
      this.currentView = "login";
    }

    switch (this.currentView) {
      case "public_bracket":
        await this.renderPublicBracket(mainContainer);
        break;
      case "login":
        this.renderLogin(mainContainer);
        break;
      case "register":
        this.renderRegister(mainContainer);
        break;
      case "dashboard":
        await this.renderDashboard(mainContainer);
        break;
      case "control_center":
        await this.renderAdminControlCenter(mainContainer);
        break;
      case "teams":
        await this.renderTeamsView(mainContainer);
        break;
      case "bracket":
        await this.renderBracketAdminView(mainContainer);
        break;
      case "judging":
        await this.renderJudgeWorkspace(mainContainer);
        break;
      case "senior":
        await this.renderSeniorSegment(mainContainer);
        break;
      case "practice":
        this.renderPracticeDebate(mainContainer);
        break;
      case "handnote":
        await this.renderHandnote(mainContainer);
        break;
      case "judge_messages":
        await this.renderJudgeMessages(mainContainer);
        break;
      case "admin_messages":
        await this.renderAdminMessages(mainContainer);
        break;
      case "admin_directory":
        await this.renderAdminDirectory(mainContainer);
        break;
      case "admin_users":
        this.directoryActiveTab = "users";
        await this.renderAdminDirectory(mainContainer);
        break;
      case "admin_approvals":
        this.directoryActiveTab = "approvals";
        await this.renderAdminDirectory(mainContainer);
        break;
      case "admin_judges":
        this.directoryActiveTab = "judges";
        await this.renderAdminDirectory(mainContainer);
        break;
      case "admin_motions":
        await this.renderAdminMotions(mainContainer);
        break;
      case "timer":
        this.renderStandaloneTimer(mainContainer);
        break;
      case "audit":
        await this.renderAuditLogs(mainContainer);
        break;
      default:
        this.renderPublicBracket(mainContainer);
    }

    window.i18n.applyTranslations();
  }

  renderFloatingWhatsApp() {
    let el = document.getElementById("floating-whatsapp-widget");
    if (!el) {
      el = document.createElement("div");
      el.id = "floating-whatsapp-widget";
      el.className = "floating-whatsapp-widget";
      document.body.appendChild(el);
    }
    el.innerHTML = `
      <a href="https://wa.me/8801700000000?text=Assalamu%20Alaikum%2C%20HGHSDC%20Debate%20Tab%20Helpline" 
         target="_blank" rel="noopener noreferrer" class="floating-wa-btn" 
         title="${window.i18n.lang === 'bn' ? 'সরাসরি হোয়াটসঅ্যাপ সহায়তা (HGHSDC)' : 'Direct WhatsApp Helpline (HGHSDC)'}">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffffff">
          <path d="${WHATSAPP_SVG_PATH}"/>
        </svg>
        <span class="floating-wa-text">${window.i18n.lang === 'bn' ? 'হোয়াটসঅ্যাপ সহায়তা' : 'WhatsApp Support'}</span>
      </a>
    `;
  }

  renderNavbar() {
    const navRight = document.getElementById("nav-right");
    if (!navRight) return;

    const isDark = this.theme === "dark";
    const isBn = window.i18n && window.i18n.lang === "bn";
    const themeIcon = isDark ? `☀️` : `🌙`;
    const themeTooltip = isDark ? window.i18n.t("light_mode") : window.i18n.t("dark_mode");

    let html = `
      <div class="live-pill" style="margin-right: 0.15rem;">
        <span class="pulse-dot"></span>
        <span>${isBn ? 'লাইভ বিতর্ক' : 'LIVE TAB'}</span>
      </div>
      <a href="https://wa.me/8801700000000?text=Assalamu%20Alaikum%2C%20HGHSDC%20Debate%20Tab%20Help" target="_blank" rel="noopener noreferrer" class="whatsapp-nav-btn" title="HGHSDC Official WhatsApp Helpline">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="#ffffff">
          <path d="${WHATSAPP_SVG_PATH}"/>
        </svg>
        <span>WhatsApp</span>
      </a>
      <button class="theme-toggle-btn" id="theme-toggle-btn" onclick="window.app.toggleTheme()" title="${themeTooltip}">
        ${themeIcon}
      </button>
      <button class="btn btn-secondary btn-sm" id="lang-toggle-btn" onclick="window.i18n.toggleLanguage(); window.app.render();">
        ${window.i18n.t("lang_toggle")}
      </button>
    `;

    if (this.currentUser) {
      html += `
        <div style="display: flex; align-items: center; gap: 0.65rem;">
          <span class="badge badge-blue">${this.currentUser.role}</span>
          <span style="font-size: 0.88rem; font-weight: 700; color:var(--text-primary);">${this.currentUser.full_name}</span>
          <button class="btn btn-secondary btn-sm" onclick="window.app.logout()">
            ${window.i18n.t("logout")}
          </button>
        </div>
      `;
    } else {
      html += `
        <button class="btn btn-primary btn-sm" onclick="window.app.navigate('login')">
          ${window.i18n.t("login")}
        </button>
        <button class="btn btn-secondary btn-sm" onclick="window.app.navigate('register')">
          ${window.i18n.t("register")}
        </button>
      `;
    }

    navRight.innerHTML = html;
  }

  renderSidebar() {
    const sidebar = document.getElementById("app-sidebar");
    const container = document.querySelector(".app-container");
    if (!sidebar) return;

    if (this.sidebarCollapsed) {
      sidebar.className = "win-sidebar collapsed";
      if (container) container.classList.add("sidebar-hidden");
    } else {
      sidebar.className = "win-sidebar";
      if (container) container.classList.remove("sidebar-hidden");
    }

    let items = [];

    if (!this.currentUser) {
      items = [
        { view: "public_bracket", label: window.i18n.t("nav_bracket"), icon: "bracket" },
        { view: "senior", label: window.i18n.t("nav_senior"), icon: "trophy" },
        { view: "practice", label: window.i18n.t("nav_practice"), icon: "mic" },
        { view: "timer", label: window.i18n.t("nav_timer"), icon: "clock" },
        { view: "login", label: window.i18n.t("login"), icon: "user" },
        { view: "register", label: window.i18n.t("register"), icon: "plus" }
      ];
    } else {
      const role = this.currentUser.role;
      if (role === "ADMIN") {
        items = [
          { view: "control_center", label: window.i18n.t("nav_overview"), icon: "grid" },
          { view: "bracket", label: window.i18n.t("nav_bracket"), icon: "bracket" },
          { view: "senior", label: window.i18n.t("nav_senior"), icon: "trophy" },
          { view: "practice", label: window.i18n.t("nav_practice"), icon: "mic" },
          { view: "handnote", label: window.i18n.t("nav_notes"), icon: "edit" },
          { view: "admin_messages", label: window.i18n.t("nav_messages"), icon: "message" },
          { view: "teams", label: window.i18n.t("nav_teams"), icon: "users" },
          { view: "admin_directory", label: window.i18n.t("nav_directory"), icon: "user" },
          { view: "admin_motions", label: window.i18n.t("nav_motions"), icon: "document" },
          { view: "timer", label: window.i18n.t("nav_timer"), icon: "clock" },
          { view: "audit", label: window.i18n.t("nav_audit"), icon: "shield" }
        ];
      } else if (role === "JUDGE") {
        items = [
          { view: "judging", label: window.i18n.t("nav_judging"), icon: "scale" },
          { view: "bracket", label: window.i18n.t("nav_bracket"), icon: "bracket" },
          { view: "senior", label: window.i18n.t("nav_senior"), icon: "trophy" },
          { view: "practice", label: window.i18n.t("nav_practice"), icon: "mic" },
          { view: "handnote", label: window.i18n.t("nav_notes"), icon: "edit" },
          { view: "judge_messages", label: window.i18n.t("nav_messages"), icon: "message" },
          { view: "timer", label: window.i18n.t("nav_timer"), icon: "clock" },
          { view: "dashboard", label: window.i18n.t("nav_profile"), icon: "user" }
        ];
      } else if (role === "LEADER") {
        items = [
          { view: "dashboard", label: window.i18n.t("nav_profile"), icon: "users" },
          { view: "bracket", label: window.i18n.t("nav_bracket"), icon: "bracket" },
          { view: "senior", label: window.i18n.t("nav_senior"), icon: "trophy" },
          { view: "practice", label: window.i18n.t("nav_practice"), icon: "mic" },
          { view: "handnote", label: window.i18n.t("nav_notes"), icon: "edit" },
          { view: "teams", label: window.i18n.t("nav_roster"), icon: "document" },
          { view: "timer", label: window.i18n.t("nav_timer"), icon: "clock" }
        ];
      } else {
        items = [
          { view: "dashboard", label: window.i18n.t("nav_profile"), icon: "user" },
          { view: "bracket", label: window.i18n.t("nav_bracket"), icon: "bracket" },
          { view: "senior", label: window.i18n.t("nav_senior"), icon: "trophy" },
          { view: "practice", label: window.i18n.t("nav_practice"), icon: "mic" },
          { view: "handnote", label: window.i18n.t("nav_notes"), icon: "edit" },
          { view: "timer", label: window.i18n.t("nav_timer"), icon: "clock" }
        ];
      }
    }

    let html = "";
    items.forEach(it => {
      const isDirMatch = it.view === 'admin_directory' && ['admin_directory', 'admin_users', 'admin_approvals', 'admin_judges'].includes(this.currentView);
      const active = (this.currentView === it.view || isDirMatch) ? "active" : "";
      html += `
        <div class="nav-item ${active}" onclick="window.app.navigate('${it.view}')">
          ${getSvg(it.icon, 16)}
          <span>${it.label}</span>
        </div>
      `;
    });

    html += `
      <div class="sidebar-seal-card">
        <div style="display:flex; justify-content:center; gap:0.6rem; align-items:center; margin-bottom:0.25rem;">
          <img src="/static/img/hghsdc.png" style="width:42px; height:42px; object-fit:contain; border-radius:50%; border:1.5px solid #eab308; background:#fff;" alt="HGHSDC" />
          <img src="/static/img/hghs.png" style="width:42px; height:42px; object-fit:contain; border-radius:50%; border:1.5px solid #dc2626; background:#fff;" alt="HGHS" />
        </div>
        <div class="sidebar-seal-title">HGHSDC DEBATING CLUB</div>
        <div class="sidebar-seal-tag">HGHS • INTRA 1.0</div>
      </div>
    `;

    sidebar.innerHTML = html;
  }

  async renderPublicBracket(container) {
    await this.loadBracket();

    let html = `
      <div class="hero-championship-card">
        <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
          <div style="display: flex; gap: 0.75rem; align-items: center; flex-shrink: 0;">
            <img src="/static/img/hghsdc.png" alt="HGHSDC" style="width:72px; height:72px; object-fit:contain; border-radius:50%; border:2px solid #eab308; box-shadow:0 4px 14px rgba(234,179,8,0.35); background:#fff;" />
            <img src="/static/img/hghs.png" alt="HGHS" style="width:72px; height:72px; object-fit:contain; border-radius:50%; border:2px solid #dc2626; box-shadow:0 4px 14px rgba(220,38,38,0.35); background:#fff;" />
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem; flex-wrap: wrap;">
              <span class="badge badge-gold">HGHSDC</span>
              <span class="badge badge-blue">HGHS INTRA 1.0</span>
              <span class="badge badge-green">LIVE TABULATION</span>
            </div>
            <div>
              <img src="/static/img/intra.png" alt="INTRA 1.0 DEBATE" style="height:64px; object-fit:contain; display:block;" />
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.4rem;">
              ${window.i18n.lang === 'bn' ? 'হবিগঞ্জ সরকারি উচ্চ বিদ্যালয় ডিবেটিং ক্লাব (HGHSDC) • 16 দলীয় বিতর্ক প্রতিযোগিতা' : 'Habiganj Government High School Debating Club • 16-Team Knockout Tab'}
            </p>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.45rem;">
          ${this.tournamentData && this.tournamentData.bracket_balance_score ? `
            <span class="badge badge-green" style="font-size: 0.84rem; padding: 0.35rem 0.85rem;">
              ${getSvg("check", 14)} ${window.i18n.t("balance_score")}: ${this.tournamentData.bracket_balance_score}%
            </span>
          ` : ''}
          <span style="font-size: 0.76rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">
            ${this.tournamentData?.tournament_date || '2026'} • 16 TEAMS
          </span>
        </div>
      </div>

      <div style="display:flex; gap:0.65rem; margin:1.25rem 0; flex-wrap:wrap; align-items:center;">
        <button class="btn btn-primary btn-sm" onclick="window.app.navigate('public_bracket')" style="display:inline-flex; align-items:center; gap:0.4rem;">
          ${getSvg("bracket", 14)} <span>${window.i18n.t("bracket_title")}</span>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="window.app.navigate('senior')" style="display:inline-flex; align-items:center; gap:0.4rem;">
          <span>🎓</span> <span>${window.i18n.t("nav_senior")}</span>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="window.app.navigate('practice')" style="display:inline-flex; align-items:center; gap:0.4rem;">
          ${getSvg("mic", 14)} <span>${window.i18n.t("nav_practice")}</span>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="window.app.navigate('timer')" style="display:inline-flex; align-items:center; gap:0.4rem;">
          ${getSvg("clock", 14)} <span>${window.i18n.t("nav_timer")}</span>
        </button>
      </div>

      <div class="section-header" style="margin-top:0.75rem;">
        <div>
          <h2 class="section-title">${window.i18n.t("bracket_title")}</h2>
          <p class="section-desc">${window.i18n.t("bracket_desc")}</p>
        </div>
      </div>

      <div class="win-glass" style="padding: 1.25rem; margin-bottom: 2rem;">
        <div id="public-bracket-mount"></div>
      </div>
    `;

    container.innerHTML = html;
    window.renderBracket("public-bracket-mount", this.bracketData, this.currentUser && this.currentUser.role === "ADMIN");
  }

  renderLogin(container) {
    container.innerHTML = `
      <div style="max-width: 440px; margin: 2.5rem auto;">
        <div class="win-glass" style="padding: 2.25rem;">
          <div class="login-emblem-wrap">
            <div style="display:flex; justify-content:center; gap:0.85rem; margin-bottom:0.85rem;">
              <img src="/static/img/hghsdc.png" style="width:68px; height:68px; object-fit:contain; border-radius:50%; border:2px solid #eab308; box-shadow:0 4px 12px rgba(234,179,8,0.3); background:#fff;" alt="HGHSDC" />
              <img src="/static/img/hghs.png" style="width:68px; height:68px; object-fit:contain; border-radius:50%; border:2px solid #dc2626; box-shadow:0 4px 12px rgba(220,38,38,0.3); background:#fff;" alt="HGHS" />
            </div>
            <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--brand-navy);">${window.i18n.t("login")}</h2>
            <div class="login-tagline-badge">
              HGHSDC • HGHS INTRA 1.0
            </div>
            <p style="font-size: 0.84rem; color: #64748b; margin-top: 0.4rem;">
              ${window.i18n.lang === 'bn' ? 'ইউজারনেম দিয়ে সরাসরি প্রবেশ করুন' : 'Enter your registered username to sign in'}
            </p>
          </div>

          <form id="login-form" action="/api/auth/login" method="POST" autocomplete="on" onsubmit="window.app.handleLogin(event)">
            <div class="form-group">
              <label class="form-label">${window.i18n.lang === 'bn' ? 'ইউজারনেম' : 'Username'}</label>
              <input type="text" name="username" id="login-phone" autocomplete="username" class="form-input" placeholder="${window.i18n.lang === 'bn' ? 'নিবন্ধিত ইউজারনেম লিখুন' : 'Enter registered username'}" required autofocus />
            </div>
            <div class="form-group" id="login-pin-group">
              <label class="form-label">${window.i18n.lang === 'bn' ? 'পাসওয়ার্ড (শুধুমাত্র অ্যাডমিনের জন্য)' : 'Password (Admin Only)'}</label>
              <input type="password" name="password" id="login-pin" autocomplete="current-password" class="form-input" placeholder="••••" maxlength="32" />
              <span style="font-size: 0.72rem; color: #64748b; margin-top: 0.2rem; display: block;">
                ${window.i18n.lang === 'bn' ? '* সাধারণ প্রতিযোগী ও বিচারকদের কোনো পাসওয়ার্ড লাগবে না' : '* Participants & Judges login with Username only'}
              </span>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 0.85rem;">
              ${window.i18n.t("submit_login")}
            </button>
          </form>

          <div style="margin-top: 1.5rem; text-align: center; font-size: 0.84rem;">
            <a href="javascript:void(0)" onclick="window.app.navigate('register')" style="color: var(--brand-navy); font-weight: 700; text-decoration: underline;">
              ${window.i18n.t("no_account")}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  async handleLogin(e) {
    e.preventDefault();
    const phone = document.getElementById("login-phone").value.trim();
    const pinEl = document.getElementById("login-pin");
    const pin = pinEl ? pinEl.value.trim() : "";

    try {
      const res = await window.api.post("/api/auth/login", { whatsapp_number: phone, pin });
      window.api.setToken(res.token);
      this.currentUser = res.user;

      // Trigger Google Password Manager prompt via Credential Management API
      if (window.PasswordCredential && navigator.credentials && navigator.credentials.store) {
        try {
          const cred = new PasswordCredential({
            id: phone,
            password: pin || "1234",
            name: res.user.full_name || phone
          });
          navigator.credentials.store(cred).catch(() => {});
        } catch (errCred) {}
      }

      showToast(`${res.user.full_name}`, "success");
      this.currentView = res.user.role === "ADMIN" ? "control_center" : (res.user.role === "JUDGE" ? "judging" : "dashboard");
      this.render();
    } catch (err) {
      showToast(err.message, "error");
    }
  }

  renderRegister(container) {
    container.innerHTML = `
      <div style="max-width: 480px; margin: 2rem auto;">
        <div class="win-glass" style="padding: 2.25rem;">
          <div class="login-emblem-wrap">
            <div style="display:flex; justify-content:center; gap:0.85rem; margin-bottom:0.85rem;">
              <img src="/static/img/hghsdc.png" style="width:68px; height:68px; object-fit:contain; border-radius:50%; border:2px solid #eab308; box-shadow:0 4px 12px rgba(234,179,8,0.3); background:#fff;" alt="HGHSDC" />
              <img src="/static/img/hghs.png" style="width:68px; height:68px; object-fit:contain; border-radius:50%; border:2px solid #dc2626; box-shadow:0 4px 12px rgba(220,38,38,0.3); background:#fff;" alt="HGHS" />
            </div>
            <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--brand-navy);">${window.i18n.t("register")}</h2>
            <div class="login-tagline-badge">
              HGHSDC INTRA 1.0 REGISTRATION
            </div>
            <p style="font-size: 0.82rem; color: #64748b; margin-top: 0.35rem;">
              Habiganj Govt. High School (HGHS)
            </p>
          </div>

          <form id="register-form" action="/api/auth/register" method="POST" autocomplete="on" onsubmit="window.app.handleRegister(event)">
            <div class="form-group">
              <label class="form-label">${window.i18n.t("full_name")}</label>
              <input type="text" name="name" id="reg-name" autocomplete="name" class="form-input" placeholder="e.g. Tanvir Ahmed" required />
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.lang === 'bn' ? 'ইউজারনেম (লগইন করার জন্য)' : 'Username (Used to login)'}</label>
              <input type="text" name="username" id="reg-username" autocomplete="username" class="form-input" placeholder="e.g. tanvir10" required />
              <span style="font-size:0.72rem; color:#64748b;">${window.i18n.lang === 'bn' ? '* পরবর্তীতে এই ইউজারনেম দিয়ে লগইন করবেন' : '* You will login directly using this username'}</span>
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.lang === 'bn' ? 'হোয়াটসঅ্যাপ নম্বর' : 'WhatsApp Number'}</label>
              <input type="tel" name="tel" id="reg-phone" autocomplete="tel" class="form-input" placeholder="017xxxxxxxx" required />
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.lang === 'bn' ? 'পাসওয়ার্ড / পিন (ঐচ্ছিক)' : 'Password / PIN (Optional)'}</label>
              <input type="password" name="password" id="reg-pin" autocomplete="new-password" class="form-input" placeholder="Default: 1234" maxlength="32" />
              <span style="font-size:0.72rem; color:#64748b;">${window.i18n.lang === 'bn' ? '* ফাঁকা রাখলে ডিফল্ট 1234 সেট হবে' : '* Leave blank for default 1234'}</span>
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("applying_for")}</label>
              <select id="reg-role" class="form-select">
                <option value="MEMBER">${window.i18n.t("role_member")}</option>
                <option value="LEADER">${window.i18n.t("role_leader")}</option>
                <option value="JUDGE">${window.i18n.t("role_judge")}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.lang === 'bn' ? 'ক্লাস / শাখা' : 'Class / Section'}</label>
              <input type="text" id="reg-institution" class="form-input" placeholder="e.g. Class 10, Morning" />
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("photo_upload_label")}</label>
              <input type="file" accept="image/*" class="form-input" onchange="window.app.handlePhotoUpload(this, 'reg-photo', 'reg-photo-preview')" />
              <input type="hidden" id="reg-photo" />
              <div id="reg-photo-preview" style="margin-top:0.35rem;"></div>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 0.75rem;">
              ${window.i18n.t("submit_registration")}
            </button>
          </form>

          <div style="margin-top: 1.5rem; text-align: center; font-size: 0.82rem;">
            <a href="javascript:void(0)" onclick="window.app.navigate('login')" style="color: var(--brand-navy); font-weight: 700; text-decoration: underline;">
              ${window.i18n.t("have_account")}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  async handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById("reg-name").value.trim();
    const username = document.getElementById("reg-username").value.trim().toLowerCase();
    const phone = document.getElementById("reg-phone").value.trim();
    const pinEl = document.getElementById("reg-pin");
    const pin = pinEl && pinEl.value.trim() ? pinEl.value.trim() : "1234";
    const role = document.getElementById("reg-role").value;
    const inst = document.getElementById("reg-institution").value.trim();
    const photo = document.getElementById("reg-photo").value.trim();

    try {
      const res = await window.api.post("/api/auth/register", {
        full_name: name,
        whatsapp_number: phone || username,
        username: username,
        pin,
        applied_role: role,
        school_organization: inst,
        photo_url: photo
      });
      window.api.setToken(res.token);
      this.currentUser = res.user;

      // Trigger Google Password Manager prompt via Credential Management API
      if (window.PasswordCredential && navigator.credentials && navigator.credentials.store) {
        try {
          const cred = new PasswordCredential({
            id: username || phone,
            password: pin || "1234",
            name: name
          });
          navigator.credentials.store(cred).catch(() => {});
        } catch (errCred) {}
      }

      showToast(window.i18n.lang === 'bn' ? "অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!" : "Account created successfully!", "success");
      this.currentView = "dashboard";
      this.render();
    } catch (err) {
      showToast(err.message, "error");
    }
  }

  logout() {
    window.api.post("/api/auth/logout", {}).catch(() => {});
    window.api.setToken(null);
    this.currentUser = null;
    this.currentView = "public_bracket";
    showToast(window.i18n.lang === 'bn' ? "সফলভাবে প্রস্থান হয়েছে।" : "Signed out successfully.", "info");
    this.render();
  }

  async renderDashboard(container) {
    const role = this.currentUser.role;
    const isPending = this.currentUser.role_status === "PENDING_APPROVAL";

    const teamsRes = await window.api.get("/api/teams");
    const myTeam = teamsRes.teams.find(t => 
      t.leader_id === this.currentUser.id ||
      t.speaker1_id === this.currentUser.id ||
      t.speaker2_id === this.currentUser.id ||
      t.speaker3_id === this.currentUser.id
    );

    let html = `
      <div class="section-header">
        <div>
          <h2 class="section-title">${window.i18n.t("participant_dashboard")}</h2>
          <p class="section-desc">${window.i18n.t("participant_desc")}</p>
        </div>
      </div>

      <div class="win-glass" style="padding: 1.75rem; margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; gap: 1rem; align-items: center;">
            <div style="text-align: center;">
              ${this.currentUser.photo_url ? `
                <img src="${this.currentUser.photo_url}" style="width: 54px; height: 54px; border-radius: 50%; object-fit: cover; border: 2px solid #000; display: block;" />
              ` : `
                <div style="width: 54px; height: 54px; border-radius: 50%; background: #e2e8f0; color: #000; font-weight: 800; font-size: 1.3rem; display: flex; align-items: center; justify-content: center; border: 2px solid #000;">
                  ${(this.currentUser.full_name || 'U')[0]}
                </div>
              `}
              <label class="btn btn-secondary btn-sm" style="margin-top: 0.35rem; font-size: 0.72rem; padding: 0.15rem 0.45rem; cursor: pointer;">
                ${window.i18n.t("change_photo")}
                <input type="file" accept="image/*" style="display:none;" onchange="window.app.handleDashboardPhotoChange(this)" />
              </label>
            </div>
            <div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: #000;">${this.currentUser.full_name}</h3>
              <p style="color: #64748b; font-size: 0.88rem;">${this.currentUser.school_organization || '-'}</p>
            </div>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <span class="badge badge-blue">${this.currentUser.role}</span>
            <span class="badge ${this.currentUser.role_status === 'APPROVED' ? 'badge-green' : 'badge-amber'}">
              ${this.currentUser.role_status}
            </span>
          </div>
        </div>

        ${isPending ? `
          <div style="margin-top: 1.25rem; background: #fef3c7; border: 1px solid #fde68a; padding: 1rem; border-radius: var(--radius-md);">
            <h4 style="color: #b45309; margin-bottom: 0.25rem; display: flex; align-items: center; gap: 0.4rem;">
              ${getSvg("alert", 16)} ${window.i18n.t("under_review_title")}
            </h4>
            <p style="font-size: 0.85rem; color: #78350f;">
              ${window.i18n.t("under_review_desc")}
            </p>
          </div>
        ` : ''}

        ${role === "LEADER" ? `
          <div style="margin-top: 1.5rem;">
            <button class="btn btn-primary" onclick="window.app.navigate('teams')">
              ${getSvg("document", 14)} ${window.i18n.t("submit_team_application")}
            </button>
          </div>
        ` : ''}
      </div>

      <div class="win-glass" style="padding: 1.75rem; margin-top: 1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem; flex-wrap:wrap; gap:0.5rem;">
          <div>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--brand-navy);">${myTeam ? myTeam.name : (window.i18n.lang === 'bn' ? 'আমার দল (My Team)' : 'My Team')}</h3>
            <p style="font-size: 0.84rem; color: #64748b;">${myTeam ? (myTeam.school_organization || 'HGHSDC') : (window.i18n.lang === 'bn' ? 'দলের সদস্য ও যোগাযোগের বিবরণ' : 'Team Members & Direct WhatsApp Contacts')}</p>
          </div>
          ${myTeam ? `
            <div style="display:flex; gap:0.5rem; align-items:center;">
              <span class="badge ${myTeam.status === 'APPROVED' ? 'badge-green' : 'badge-amber'}">${myTeam.status}</span>
              ${myTeam.rating ? `<span class="badge badge-gold">Tier ${myTeam.rating}</span>` : ''}
            </div>
          ` : ''}
        </div>

        ${myTeam ? `
          <!-- 4 Detailed Team Member Cards with Direct WhatsApp Chat Links -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
            <!-- Leader Card -->
            <div style="background: #f8fafc; border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 1.1rem; border-left: 4px solid var(--brand-navy);">
              <span style="font-size: 0.72rem; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Team Leader</span>
              <div style="font-size: 1.05rem; font-weight: 800; color: var(--brand-navy); margin: 0.35rem 0 0.4rem;">${myTeam.leader_name || 'TBD'}</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.35rem; padding-top:0.35rem; border-top:1px dashed #e2e8f0;">
                <code style="font-size: 0.82rem; color: #334155; font-family:monospace; background:#e2e8f0; padding:2px 6px; border-radius:4px;">${myTeam.leader_phone || '-'}</code>
                ${getWhatsAppButton(myTeam.leader_phone, myTeam.leader_name)}
              </div>
            </div>

            <!-- Speaker 1 Card -->
            <div style="background: #f8fafc; border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 1.1rem; border-left: 4px solid #2563eb;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #2563eb; text-transform: uppercase; letter-spacing: 0.05em;">1st Speaker</span>
              <div style="font-size: 1.05rem; font-weight: 800; color: var(--brand-navy); margin: 0.35rem 0 0.4rem;">${myTeam.speaker1_name || 'TBD'}</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.35rem; padding-top:0.35rem; border-top:1px dashed #e2e8f0;">
                <code style="font-size: 0.82rem; color: #334155; font-family:monospace; background:#e2e8f0; padding:2px 6px; border-radius:4px;">${myTeam.speaker1_phone || '-'}</code>
                ${getWhatsAppButton(myTeam.speaker1_phone, myTeam.speaker1_name)}
              </div>
            </div>

            <!-- Speaker 2 Card -->
            <div style="background: #f8fafc; border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 1.1rem; border-left: 4px solid #059669;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #059669; text-transform: uppercase; letter-spacing: 0.05em;">2nd Speaker</span>
              <div style="font-size: 1.05rem; font-weight: 800; color: var(--brand-navy); margin: 0.35rem 0 0.4rem;">${myTeam.speaker2_name || 'TBD'}</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.35rem; padding-top:0.35rem; border-top:1px dashed #e2e8f0;">
                <code style="font-size: 0.82rem; color: #334155; font-family:monospace; background:#e2e8f0; padding:2px 6px; border-radius:4px;">${myTeam.speaker2_phone || '-'}</code>
                ${getWhatsAppButton(myTeam.speaker2_phone, myTeam.speaker2_name)}
              </div>
            </div>

            <!-- Speaker 3 Card -->
            <div style="background: #f8fafc; border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 1.1rem; border-left: 4px solid #d97706;">
              <span style="font-size: 0.72rem; font-weight: 800; color: #d97706; text-transform: uppercase; letter-spacing: 0.05em;">3rd Speaker</span>
              <div style="font-size: 1.05rem; font-weight: 800; color: var(--brand-navy); margin: 0.35rem 0 0.4rem;">${myTeam.speaker3_name || 'TBD'}</div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.35rem; padding-top:0.35rem; border-top:1px dashed #e2e8f0;">
                <code style="font-size: 0.82rem; color: #334155; font-family:monospace; background:#e2e8f0; padding:2px 6px; border-radius:4px;">${myTeam.speaker3_phone || '-'}</code>
                ${getWhatsAppButton(myTeam.speaker3_phone, myTeam.speaker3_name)}
              </div>
            </div>
          </div>

          <!-- Team Leader Speaker Interchange Controls -->
          ${(role === "LEADER" || role === "ADMIN") ? `
            <div style="background: #f1f5f9; border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 1.15rem;">
              <span class="form-label" style="color: var(--brand-navy); margin-bottom: 0.45rem;">
                ${window.i18n.lang === 'bn' ? '🔄 স্পিকার পজিশন অদলবদল (Speaker Interchange):' : '🔄 Speaker Interchange:'}
              </span>
              <p style="font-size: 0.82rem; color: #64748b; margin-bottom: 0.75rem;">
                ${window.i18n.lang === 'bn' ? 'দলনেতা হিসেবে আপনি বক্তাদের অবস্থান অদলবদল করতে পারবেন:' : 'As Team Leader, you can interchange speaker speaking orders:'}
              </p>
              <div style="display:flex; gap:0.65rem; flex-wrap:wrap;">
                <button class="btn btn-secondary btn-sm" onclick="window.app.swapTeamSpeakers(${myTeam.id}, 1, 2)">
                  ${getSvg("edit", 12)} Swap 1st ↔ 2nd Speaker
                </button>
                <button class="btn btn-secondary btn-sm" onclick="window.app.swapTeamSpeakers(${myTeam.id}, 2, 3)">
                  ${getSvg("edit", 12)} Swap 2nd ↔ 3rd Speaker
                </button>
                <button class="btn btn-secondary btn-sm" onclick="window.app.swapTeamSpeakers(${myTeam.id}, 1, 3)">
                  ${getSvg("edit", 12)} Swap 1st ↔ 3rd Speaker
                </button>
              </div>
            </div>
          ` : ''}
        ` : `
          <div style="text-align: center; padding: 2rem; color: #64748b;">
            <p style="font-size: 0.95rem; margin-bottom: 0.75rem;">
              ${window.i18n.lang === 'bn' ? 'আপনি এখনও কোনো দলের সদস্য হিসেবে যুক্ত হননি।' : 'You are not assigned to any team yet.'}
            </p>
            ${role === "LEADER" ? `
              <button class="btn btn-primary" onclick="window.app.navigate('teams')">
                ${getSvg("plus", 14)} ${window.i18n.lang === 'bn' ? 'নতুন দলের আবেদন তৈরি করুন' : 'Submit Team Application'}
              </button>
            ` : ''}
          </div>
        `}
      </div>
    `;
    container.innerHTML = html;
  }


  // ==============================================
  // USERS DIRECTORY VIEW
  // ==============================================
  async renderAdminUsersDirectory(container, isSubtab = false) {
    try {
      const res = await window.api.get("/api/members/admin/all-users");
      const users = res.users || [];
      this.cachedUsers = users;

      let html = `
        ${!isSubtab ? `
          <div class="section-header">
            <div>
              <h2 class="section-title">${window.i18n.t("users_dir_title")}</h2>
              <p class="section-desc">${window.i18n.t("users_dir_desc")}</p>
            </div>
            <button class="btn btn-primary btn-sm" onclick="window.app.openCreateUserModal()">
              ${getSvg("plus", 14)} ${window.i18n.t("add_new_user")}
            </button>
          </div>
        ` : ''}

        <div class="win-glass" style="padding: 1.25rem;">
          <div class="win-table-container">
            <table class="win-table">
              <thead>
                <tr>
                  <th>${window.i18n.t("th_photo")}</th>
                  <th>${window.i18n.t("th_full_name")}</th>
                  <th>${window.i18n.t("th_username")}</th>
                  <th>${window.i18n.t("th_role")}</th>
                  <th>${window.i18n.t("th_status")}</th>
                  <th>${window.i18n.t("th_institution")}</th>
                  <th>${window.i18n.t("th_actions")}</th>
                </tr>
              </thead>
              <tbody>
                ${users.length === 0 ? `
                  <tr>
                    <td colspan="7" style="text-align:center; padding:2.5rem; color:#64748b;">
                      ${window.i18n.lang === 'bn' ? 'কোনো ব্যবহারকারী পাওয়া যায়নি।' : 'No users found.'}
                    </td>
                  </tr>
                ` : users.map(u => `
                  <tr>
                    <td style="width: 44px; text-align:center;">
                      ${u.photo_url ? `
                        <img src="${u.photo_url}" class="debater-avatar" alt="" onerror="this.outerHTML='<span class=\'debater-avatar-placeholder\'>${(u.full_name||'U')[0]}</span>'" />
                      ` : `
                        <span class="debater-avatar-placeholder">${(u.full_name || 'U')[0]}</span>
                      `}
                    </td>
                    <td>
                      <strong>${u.full_name}</strong>
                      ${u.username ? `<br><small style="color:#64748b; font-size:0.75rem; font-family:monospace;">@${u.username}</small>` : ''}
                    </td>
                    <td>
                      <code style="font-size:0.85rem; padding:0.15rem 0.4rem; background:#f1f5f9; border-radius:4px;">${u.whatsapp_number}</code>
                      ${getWhatsAppButton(u.whatsapp_number, u.full_name)}
                    </td>
                    <td><span class="badge badge-blue">${u.role}</span></td>
                    <td><span class="badge ${u.role_status === 'APPROVED' ? 'badge-green' : 'badge-amber'}">${u.role_status}</span></td>
                    <td>${u.school_organization || '-'}</td>
                    <td>
                      <div style="display:flex; gap:0.45rem;">
                        <button class="btn btn-secondary btn-sm" onclick="window.app.openEditUserModalById(${u.id})">
                          ${getSvg("edit", 12)} ${window.i18n.t("edit")}
                        </button>
                        ${u.role !== 'ADMIN' ? `
                          <button class="btn btn-danger btn-sm" onclick="window.app.deleteUser(${u.id})">
                            ${getSvg("trash", 12)}
                          </button>
                        ` : ''}
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

      container.innerHTML = html;
    } catch (e) {
      container.innerHTML = `<div style="padding:2rem; color:#dc2626;">Error loading Users Directory: ${e.message}</div>`;
      showToast(e.message, "error");
    }
  }

  openCreateUserModal() {
    let modalHtml = `
      <div class="modal-backdrop" id="user-modal">
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 class="modal-title">${getSvg("plus", 16)} ${window.i18n.t("add_new_user")}</h3>
            <button style="background:none;border:none;color:#000;font-size:1.5rem;cursor:pointer;" onclick="document.getElementById('user-modal').remove()">x</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">${window.i18n.t("full_name")}</label>
              <input type="text" id="modal-user-name" class="form-input" placeholder="${window.i18n.t('full_name')}" required />
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("whatsapp_number")}</label>
              <input type="text" id="modal-user-phone" class="form-input" placeholder="${window.i18n.t('whatsapp_number')}" required />
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("th_role")}</label>
              <select id="modal-user-role" class="form-select">
                <option value="MEMBER">${window.i18n.t("role_member")}</option>
                <option value="LEADER">${window.i18n.t("role_leader")}</option>
                <option value="JUDGE">${window.i18n.t("role_judge")}</option>
                <option value="ADMIN">${window.i18n.t("role_admin")}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("pin")}</label>
              <input type="password" id="modal-user-pin" class="form-input" value="1234" maxlength="8" required />
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("institution")}</label>
              <input type="text" id="modal-user-inst" class="form-input" placeholder="${window.i18n.t('institution')}" />
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("photo_upload_label")}</label>
              <input type="file" accept="image/*" class="form-input" onchange="window.app.handlePhotoUpload(this, 'modal-user-photo', 'modal-user-photo-preview')" />
              <input type="hidden" id="modal-user-photo" />
              <div id="modal-user-photo-preview" style="margin-top:0.35rem;"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="document.getElementById('user-modal').remove()">${window.i18n.t("cancel")}</button>
            <button class="btn btn-primary" onclick="window.app.submitCreateUser()">${window.i18n.t("save")}</button>
          </div>
        </div>
      </div>
    `;
    const div = document.createElement("div");
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);
  }

  async submitCreateUser() {
    const name = document.getElementById("modal-user-name").value.trim();
    const phone = document.getElementById("modal-user-phone").value.trim();
    const role = document.getElementById("modal-user-role").value;
    const pin = document.getElementById("modal-user-pin").value.trim();
    const inst = document.getElementById("modal-user-inst").value.trim();
    const photo = document.getElementById("modal-user-photo").value.trim();

    try {
      await window.api.post("/api/members/admin/create-user", {
        full_name: name,
        whatsapp_number: phone,
        role: role,
        pin: pin,
        school_organization: inst,
        photo_url: photo
      });
      document.getElementById("user-modal")?.remove();
      showToast(window.i18n.lang === 'bn' ? "নতুন ইউজার সফলভাবে তৈরি হয়েছে।" : "User created successfully.", "success");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async openEditUserModalById(userId) {
    let user = (this.cachedUsers || []).find(u => u.id === userId);
    if (!user) {
      try {
        const res = await window.api.get(`/api/members/admin/users/${userId}`);
        user = res.user;
      } catch (e) {
        showToast(e.message, "error");
        return;
      }
    }
    this.openEditUserModal(user);
  }

  openEditUserModal(user) {
    let modalHtml = `
      <div class="modal-backdrop" id="user-modal">
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 class="modal-title">${getSvg("edit", 16)} ${window.i18n.t("edit_user_title")}: ${user.full_name}</h3>
            <button style="background:none;border:none;color:#000;font-size:1.5rem;cursor:pointer;" onclick="document.getElementById('user-modal').remove()">x</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">${window.i18n.t("full_name")}</label>
              <input type="text" id="modal-user-name" class="form-input" value="${user.full_name}" required />
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("whatsapp_number")} / Username</label>
              <input type="text" id="modal-user-phone" class="form-input" value="${user.whatsapp_number || user.username || ''}" placeholder="017xxxxxxxx" required />
              <span style="font-size: 0.72rem; color: #64748b; margin-top: 0.2rem; display: block;">
                ${window.i18n.lang === 'bn' ? 'বিতার্কিকের হোয়াটসঅ্যাপ নম্বর ও লগইন ইউজারনেম পরিবর্তন করুন।' : 'Update user WhatsApp number / Username.'}
              </span>
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("th_role")}</label>
              <select id="modal-user-role" class="form-select">
                <option value="MEMBER" ${user.role === 'MEMBER' ? 'selected' : ''}>${window.i18n.t("role_member")}</option>
                <option value="LEADER" ${user.role === 'LEADER' ? 'selected' : ''}>${window.i18n.t("role_leader")}</option>
                <option value="JUDGE" ${user.role === 'JUDGE' ? 'selected' : ''}>${window.i18n.t("role_judge")}</option>
                <option value="ADMIN" ${user.role === 'ADMIN' ? 'selected' : ''}>${window.i18n.t("role_admin")}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("reset_pin_hint")}</label>
              <input type="password" id="modal-user-pin" class="form-input" placeholder="New PIN" maxlength="8" />
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("institution")}</label>
              <input type="text" id="modal-user-inst" class="form-input" value="${user.school_organization || ''}" />
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("photo_upload_label")}</label>
              <input type="file" accept="image/*" class="form-input" onchange="window.app.handlePhotoUpload(this, 'modal-user-photo', 'modal-user-photo-preview')" />
              <input type="hidden" id="modal-user-photo" value="${user.photo_url || ''}" />
              <div id="modal-user-photo-preview" style="margin-top:0.35rem;">
                ${user.photo_url ? `<img src="${user.photo_url}" style="width:44px; height:44px; border-radius:50%; object-fit:cover; border:2px solid #000; display:inline-block;" />` : ''}
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="document.getElementById('user-modal').remove()">${window.i18n.t("cancel")}</button>
            <button class="btn btn-primary" onclick="window.app.submitUpdateUser(${user.id})">${window.i18n.t("save")}</button>
          </div>
        </div>
      </div>
    `;
    const div = document.createElement("div");
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);
  }

  async submitUpdateUser(userId) {
    const name = document.getElementById("modal-user-name").value.trim();
    const phone = document.getElementById("modal-user-phone").value.trim();
    const role = document.getElementById("modal-user-role").value;
    const pin = document.getElementById("modal-user-pin").value.trim();
    const inst = document.getElementById("modal-user-inst").value.trim();
    const photo = document.getElementById("modal-user-photo").value.trim();

    if (!name) {
      showToast(window.i18n.lang === 'bn' ? "নাম পূরণ করতে হবে।" : "Full Name is required.", "error");
      return;
    }
    if (!phone) {
      showToast(window.i18n.lang === 'bn' ? "হোয়াটসঅ্যাপ নম্বর / ইউজারনেম দিতে হবে।" : "WhatsApp number / Username is required.", "error");
      return;
    }

    try {
      const payload = {
        full_name: name,
        whatsapp_number: phone,
        role: role,
        school_organization: inst,
        photo_url: photo
      };
      if (pin) payload.pin = pin;

      await window.api.put(`/api/members/admin/users/${userId}`, payload);
      document.getElementById("user-modal")?.remove();
      showToast(window.i18n.lang === 'bn' ? "ইউজার তথ্য ও হোয়াটসঅ্যাপ নম্বর সফলভাবে আপডেট হয়েছে।" : "User and WhatsApp number updated successfully.", "success");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async deleteUser(userId) {
    const confirmMsg = window.i18n.lang === 'bn' ? "আপনি কি নিশ্চিতভাবে এই ইউজারকে মুছে ফেলতে চান?" : "Are you sure you want to delete this user?";
    if (!confirm(confirmMsg)) return;
    try {
      await window.api.request(`/api/members/admin/users/${userId}`, { method: "DELETE" });
      showToast(window.i18n.lang === 'bn' ? "ইউজার মুছে ফেলা হয়েছে।" : "User deleted.", "info");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  // ==============================================
  // TEAMS VIEW (Leader Team Form + Admin Direct Manager)
  // ==============================================

  onLeaderTeamSlotChange(teamId) {
    if (!teamId) return;
    const avail = (this.cachedAvailableTeams || []).find(t => t.id == teamId);
    const nameInput = document.getElementById("apply-team-name");
    const sp1 = document.getElementById("apply-sp1");
    const sp2 = document.getElementById("apply-sp2");
    const sp3 = document.getElementById("apply-sp3");

    if (avail && nameInput) {
      nameInput.value = avail.name || "";
      if (sp1 && avail.speaker1_id) sp1.value = avail.speaker1_id;
      if (sp2 && avail.speaker2_id) sp2.value = avail.speaker2_id;
      if (sp3 && avail.speaker3_id) sp3.value = avail.speaker3_id;
    }
  }

  async renderTeamsView(container) {
    const isLeader = this.currentUser && this.currentUser.role === "LEADER";
    const isAdmin = this.currentUser && this.currentUser.role === "ADMIN";

    let html = `
      <div class="section-header">
        <div>
          <h2 class="section-title">${isLeader ? window.i18n.t("team_form_title") : window.i18n.t("teams")}</h2>
          <p class="section-desc">${isLeader ? window.i18n.t("team_form_desc") : (window.i18n.lang === 'bn' ? "দল তৈরি, স্পিকার নির্বাচন, এ/বি/সি ক্যাটাগরি ও রোস্টার পরিচালনা" : "Manage official teams, leader assignments, speaker rosters, and strength ratings")}</p>
        </div>
        ${isAdmin ? `
          <button class="btn btn-primary btn-sm" onclick="window.app.openEditTeamModal(null)">
            ${getSvg("plus", 14)} ${window.i18n.t("create_new_team")}
          </button>
        ` : ''}
      </div>
    `;

    if (isLeader) {
      const availRes = await window.api.get("/api/teams/available-for-leader");
      const eligibleRes = await window.api.get("/api/members/eligible-speakers");
      this.cachedAvailableTeams = availRes.available_teams || [];

      // Find if this leader already has an assigned team
      const myAssignedTeam = this.cachedAvailableTeams.find(t => t.leader_id === this.currentUser.id);

      html += `
        <div class="win-glass" style="padding: 2rem; max-width: 700px; margin-bottom: 2rem;">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1.4rem; padding-bottom:1rem; border-bottom:1px solid var(--border-subtle);">
            ${getHghsdcLogo(36)}
            <div>
              <h3 style="font-size:1.2rem; font-weight:800; color:var(--brand-navy); margin:0;">
                ${window.i18n.lang === 'bn' ? 'দল নির্বাচন ও নাম নির্ধারণ (1-16 স্লট)' : 'Team Selection & Name Setup (Slots 1-16)'}
              </h3>
              <p style="font-size:0.82rem; color:#64748b; margin:0.2rem 0 0 0;">
                ${window.i18n.lang === 'bn' ? '1 থেকে 16 এর মধ্যে যেকোনো স্লট নির্বাচন করুন এবং আপনার দলের নাম ও স্পিকার নির্ধারণ করুন।' : 'Choose a team slot (1-16), enter your custom team name, and select your speakers.'}
              </p>
            </div>
          </div>

          <form onsubmit="window.app.handleTeamApply(event)">
            <!-- 1. Team Slot Selection (1-16) -->
            <div class="form-group">
              <label class="form-label">
                ${window.i18n.lang === 'bn' ? 'টিম নম্বর / স্লট নির্বাচন (1-16)' : 'Select Team Slot (1-16)'}
              </label>
              <select id="apply-team-id" class="form-select" required onchange="window.app.onLeaderTeamSlotChange(this.value)">
                <option value="">-- ${window.i18n.lang === 'bn' ? '1-16 এর মধ্যে একটি স্লট বেছে নিন' : 'Choose Team Slot 1-16'} --</option>
                ${this.cachedAvailableTeams.map((t, idx) => {
                  const slotNum = t.seed_number || (idx + 1);
                  const isMine = t.leader_id === this.currentUser.id;
                  const isTaken = t.leader_id && !isMine;
                  const statusNote = isMine ? ' [আপনার দল / Your Team]' : (isTaken ? ` [নিবন্ধিত: ${t.leader_name || 'Leader'}]` : ' [উপলব্ধ / Available]');
                  const dis = isTaken && this.currentUser.role !== 'ADMIN' ? 'disabled style="color:#94a3b8;"' : '';
                  const sel = isMine || (myAssignedTeam && myAssignedTeam.id === t.id) ? 'selected' : '';
                  return `<option value="${t.id}" ${sel} ${dis}>Team ${slotNum}: ${t.name}${statusNote}</option>`;
                }).join('')}
              </select>
            </div>

            <!-- 2. Custom Team Name Input -->
            <div class="form-group">
              <label class="form-label">
                ${window.i18n.lang === 'bn' ? 'দলের নাম / পোস্টার রোস্টার নাম (Custom Team Name)' : 'Custom Team Name'}
              </label>
              <input type="text" id="apply-team-name" class="form-input" 
                     placeholder="e.g. HGHS Titans / সূর্যসেন / অগ্নিবীণা / Pioneers" 
                     value="${myAssignedTeam ? (myAssignedTeam.custom_name || (myAssignedTeam.name && !myAssignedTeam.name.startsWith('Team ') ? myAssignedTeam.name : '')) : ''}" required />
              <span style="font-size:0.75rem; color:#64748b; margin-top:0.35rem; display:block; line-height:1.4;">
                ${window.i18n.lang === 'bn' ? '💡 দল অনুমোদন (Approved) হলে 1-16 টিম নম্বরের সাথে এই নামটি আলাদা সারিতে ব্র্যাকেট, কন্ট্রোল সেন্টার ও বিচারকের মার্কশিটে প্রদর্শিত হবে।' : '💡 When approved, this custom team name will display in an additional row under the slot across Bracket, Control Center, and Judge Marksheet.'}
              </span>
            </div>

            <!-- 3. Speakers Selection -->
            <div style="background: #f8fafc; padding: 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--border-card); margin-bottom: 1.25rem;">
              <span class="form-label" style="color:var(--brand-navy); margin-bottom:0.75rem; display:block;">
                ${window.i18n.lang === 'bn' ? 'দলের সদস্য / স্পিকার নির্বাচন' : 'Team Speakers Selection'}
              </span>

              <div class="form-group" style="margin-bottom:0.75rem;">
                <label style="font-size:0.8rem; font-weight:700; color:#334155; margin-bottom:0.25rem; display:block;">
                  ${window.i18n.t("speaker_1")} (1ম বক্তা - Required)
                </label>
                <select id="apply-sp1" class="form-select" required>
                  <option value="">-- ${window.i18n.t("speaker_1_list")} --</option>
                  ${eligibleRes.eligible_speakers.map(s => {
                    const isOther = s.current_team_id && (!myAssignedTeam || s.current_team_id !== myAssignedTeam.id);
                    const tag = isOther ? ` (${s.current_team_name} দলে যুক্ত)` : '';
                    const dis = isOther ? 'disabled style="color:#94a3b8;"' : '';
                    const sel = myAssignedTeam && myAssignedTeam.speaker1_id === s.id ? 'selected' : '';
                    return `<option value="${s.id}" ${sel} ${dis}>${s.full_name}${tag}</option>`;
                  }).join('')}
                </select>
              </div>

              <div class="form-group" style="margin-bottom:0.75rem;">
                <label style="font-size:0.8rem; font-weight:700; color:#334155; margin-bottom:0.25rem; display:block;">
                  ${window.i18n.t("speaker_2")} (2য় বক্তা - Optional)
                </label>
                <select id="apply-sp2" class="form-select">
                  <option value="">-- Optional: ${window.i18n.t("speaker_2_list")} --</option>
                  ${eligibleRes.eligible_speakers.map(s => {
                    const isOther = s.current_team_id && (!myAssignedTeam || s.current_team_id !== myAssignedTeam.id);
                    const tag = isOther ? ` (${s.current_team_name} দলে যুক্ত)` : '';
                    const dis = isOther ? 'disabled style="color:#94a3b8;"' : '';
                    const sel = myAssignedTeam && myAssignedTeam.speaker2_id === s.id ? 'selected' : '';
                    return `<option value="${s.id}" ${sel} ${dis}>${s.full_name}${tag}</option>`;
                  }).join('')}
                </select>
              </div>

              <div class="form-group" style="margin-bottom:0.25rem;">
                <label style="font-size:0.8rem; font-weight:700; color:#334155; margin-bottom:0.25rem; display:block;">
                  ${window.i18n.t("speaker_3")} (3য় বক্তা - Optional)
                </label>
                <select id="apply-sp3" class="form-select">
                  <option value="">-- Optional: ${window.i18n.t("speaker_3_list")} --</option>
                  ${eligibleRes.eligible_speakers.map(s => {
                    const isOther = s.current_team_id && (!myAssignedTeam || s.current_team_id !== myAssignedTeam.id);
                    const tag = isOther ? ` (${s.current_team_name} দলে যুক্ত)` : '';
                    const dis = isOther ? 'disabled style="color:#94a3b8;"' : '';
                    const sel = myAssignedTeam && myAssignedTeam.speaker3_id === s.id ? 'selected' : '';
                    return `<option value="${s.id}" ${sel} ${dis}>${s.full_name}${tag}</option>`;
                  }).join('')}
                </select>
              </div>
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; padding:0.75rem;">
              ${window.i18n.lang === 'bn' ? 'দলের নাম ও রোস্টার সংরক্ষণ করুন' : 'Save Team Name & Roster'}
            </button>
          </form>
        </div>
      `;
    }

    if (isAdmin) {
      const teamsRes = await window.api.get("/api/teams");
      this.cachedTeams = teamsRes.teams || [];

      html += `
        <div class="win-glass" style="padding: 1.25rem;">
          <div class="win-table-container">
            <table class="win-table">
              <thead>
                <tr>
                  <th>${window.i18n.t("th_team_name")}</th>
                  <th>${window.i18n.t("th_institution")}</th>
                  <th>${window.i18n.t("th_leader")}</th>
                  <th>${window.i18n.t("th_speakers")}</th>
                  <th>${window.i18n.t("th_rating")}</th>
                  <th>${window.i18n.t("th_status")}</th>
                  <th>${window.i18n.lang === "bn" ? "টুর্নামেন্ট 16 দল" : "Tournament 16"}</th>
                  <th>${window.i18n.t("th_actions")}</th>
                </tr>
              </thead>
              <tbody>
                ${this.cachedTeams.map(t => `
                  <tr>
                    <td>
                      <div style="display:flex; align-items:center; gap:0.4rem; margin-bottom:0.25rem;">
                        <span class="badge badge-gold" style="font-size:0.75rem;">${window.i18n.lang === 'bn' ? `টিম ${t.seed_number || 1}` : `Team ${t.seed_number || 1}`}</span>
                        <strong>${t.name}</strong>
                      </div>
                      ${t.custom_name ? `
                        <div style="font-size:0.85rem; font-weight:700; color:#047857; display:flex; align-items:center; gap:0.35rem;">
                          <span style="background:#d1fae5; color:#065f46; border:1px solid #a7f3d0; padding:1px 6px; border-radius:4px; font-size:0.7rem; font-weight:800;">
                            ${t.status === 'APPROVED' ? (window.i18n.lang === 'bn' ? 'অনুমোদিত দল' : 'Approved Roster') : (window.i18n.lang === 'bn' ? 'অপেক্ষমাণ' : 'Pending')}
                          </span>
                          <span>${t.custom_name}</span>
                        </div>
                      ` : ''}
                    </td>
                    <td>${t.school_organization || '-'}</td>
                    <td>
                      <div style="display:flex; align-items:center; gap:0.4rem;">
                        <div>
                          <strong>${t.leader_name || '-'}</strong>
                          ${t.leader_phone ? `<div style="font-size:0.75rem; font-family:monospace; color:#64748b;">${t.leader_phone}</div>` : ''}
                        </div>
                        ${getWhatsAppButton(t.leader_phone, t.leader_name)}
                      </div>
                    </td>
                    <td>
                      <div style="display:flex; flex-direction:column; gap:0.3rem;">
                        ${t.speaker1_name ? `<div style="display:flex; align-items:center; gap:0.35rem; font-size:0.82rem;">1: <strong>${t.speaker1_name}</strong> ${t.speaker1_phone ? `<code style="font-size:0.75rem; color:#64748b; font-family:monospace;">${t.speaker1_phone}</code>` : ''} ${getWhatsAppButton(t.speaker1_phone, t.speaker1_name)}</div>` : ''}
                        ${t.speaker2_name ? `<div style="display:flex; align-items:center; gap:0.35rem; font-size:0.82rem;">2: <strong>${t.speaker2_name}</strong> ${t.speaker2_phone ? `<code style="font-size:0.75rem; color:#64748b; font-family:monospace;">${t.speaker2_phone}</code>` : ''} ${getWhatsAppButton(t.speaker2_phone, t.speaker2_name)}</div>` : ''}
                        ${t.speaker3_name ? `<div style="display:flex; align-items:center; gap:0.35rem; font-size:0.82rem;">3: <strong>${t.speaker3_name}</strong> ${t.speaker3_phone ? `<code style="font-size:0.75rem; color:#64748b; font-family:monospace;">${t.speaker3_phone}</code>` : ''} ${getWhatsAppButton(t.speaker3_phone, t.speaker3_name)}</div>` : ''}
                        ${!t.speaker1_name && !t.speaker2_name && !t.speaker3_name ? '<span style="color:#94a3b8">-</span>' : ''}
                      </div>
                    </td>
                    <td>
                      <select class="form-select" style="width:68px; padding:0.2rem; font-weight:700;" onchange="window.app.updateTeamRating(${t.id}, this.value)">
                        <option value="A" ${t.rating === 'A' ? 'selected' : ''}>A</option>
                        <option value="B" ${t.rating === 'B' ? 'selected' : ''}>B</option>
                        <option value="C" ${t.rating === 'C' ? 'selected' : ''}>C</option>
                      </select>
                    </td>
                    <td><span class="badge ${t.status === 'APPROVED' ? 'badge-green' : 'badge-amber'}">${t.status}</span></td>
                    <td>
                      <input type="checkbox" ${t.is_official ? 'checked' : ''} onchange="window.app.toggleOfficialTeam(${t.id}, this.checked)" />
                    </td>
                    <td>
                      <div style="display:flex; gap:0.4rem;">
                        <button class="btn btn-secondary btn-sm" onclick="window.app.openEditTeamModalById(${t.id})">
                          ${getSvg("edit", 12)} ${window.i18n.t("edit")}
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="window.app.deleteTeam(${t.id})">
                          ${getSvg("trash", 12)}
                        </button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  openEditTeamModalById(teamId) {
    const team = (this.cachedTeams || []).find(t => t.id === teamId);
    this.openEditTeamModal(team);
  }

  async openEditTeamModal(team) {
    const isEdit = !!team;
    const usersRes = await window.api.get("/api/members/eligible-speakers");
    const allUsers = usersRes.eligible_speakers || [];

    let modalHtml = `
      <div class="modal-backdrop" id="team-modal">
        <div class="modal-dialog" style="max-width: 680px;">
          <div class="modal-header">
            <h3 class="modal-title">${getSvg(isEdit ? "edit" : "plus", 16)} ${isEdit ? (window.i18n.lang === 'bn' ? 'দল সম্পাদনা' : 'Edit Team') : (window.i18n.lang === 'bn' ? 'নতুন দল গঠন' : 'Create Team')}</h3>
            <button style="background:none;border:none;color:#000;font-size:1.5rem;cursor:pointer;" onclick="document.getElementById('team-modal').remove()">x</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label">${window.i18n.t("team_name_label")} (Slot / Default Name)</label>
              <input type="text" id="m-team-name" class="form-input" placeholder="e.g. Team 1" value="${team ? team.name : ''}" required />
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.lang === 'bn' ? 'অনুমোদিত দলের নাম (Custom / Poster Roster Name)' : 'Custom Roster / Poster Team Name'}</label>
              <input type="text" id="m-team-custom-name" class="form-input" placeholder="e.g. সূর্যসেন / অগ্নিবীণা / Titans" value="${team ? (team.custom_name || '') : ''}" />
              <span style="font-size:0.75rem; color:#64748b; margin-top:0.25rem; display:block;">
                ${window.i18n.lang === 'bn' ? '💡 দল অনুমোদন হলে ব্র্যাকেট, কন্ট্রোল সেন্টার ও বিচারকের মার্কশিটে এই নামটি আলাদা সারিতে প্রদর্শিত হবে।' : '💡 When approved, this name will display in the secondary row alongside the slot number across all views.'}
              </span>
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("school_inst_label")}</label>
              <input type="text" id="m-team-inst" class="form-input" value="${team ? (team.school_organization || 'HGHSDC (Habiganj Govt. High School)') : 'HGHSDC (Habiganj Govt. High School)'}" />
            </div>

            <div style="background: #f8fafc; padding: 1.15rem; border-radius: var(--radius-lg); border: 1px solid var(--border-card); margin-bottom: 1.25rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.85rem;">
                <span class="form-label" style="margin-bottom:0; color:var(--brand-navy); font-weight:800;">
                  দলের 3 জন বিতার্কিক নির্বাচন (Select 3 Distinct Debaters)
                </span>
                <span class="badge badge-blue">3 জন সদস্য</span>
              </div>

              <!-- Speaker 1 -->
              <div style="margin-bottom: 0.85rem;">
                <label style="font-size:0.8rem; font-weight:700; color:#334155; display:block; margin-bottom:0.35rem;">
                  1ম বক্তা (1st Speaker):
                </label>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem;">
                  <select id="m-team-sp1" class="form-select" onchange="window.app.validateDebaterSelect('m-team-sp1')">
                    <option value="">-- 1ম বক্তা নির্বাচন করুন --</option>
                    ${allUsers.map(u => {
                      const isOther = u.current_team_id && (!team || team.id !== u.current_team_id);
                      const tag = isOther ? ` (${u.current_team_name} দলে যুক্ত)` : '';
                      const dis = isOther ? 'disabled style="color:#94a3b8;"' : '';
                      return `<option value="${u.id}" ${team && team.speaker1_id === u.id && !team.speaker1_name_custom ? 'selected' : ''} ${dis}>${u.full_name}${tag}</option>`;
                    }).join('')}
                  </select>
                  <input type="text" id="m-team-sp1-custom" class="form-input" placeholder="বা নাম লিখুন (Custom Name)" value="${team ? (team.speaker1_name_custom || '') : ''}" oninput="if(this.value) document.getElementById('m-team-sp1').value=''" />
                </div>
              </div>

              <!-- Speaker 2 -->
              <div style="margin-bottom: 0.85rem;">
                <label style="font-size:0.8rem; font-weight:700; color:#334155; display:block; margin-bottom:0.35rem;">
                  2য় বক্তা (2nd Speaker):
                </label>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem;">
                  <select id="m-team-sp2" class="form-select" onchange="window.app.validateDebaterSelect('m-team-sp2')">
                    <option value="">-- 2য় বক্তা নির্বাচন করুন --</option>
                    ${allUsers.map(u => {
                      const isOther = u.current_team_id && (!team || team.id !== u.current_team_id);
                      const tag = isOther ? ` (${u.current_team_name} দলে যুক্ত)` : '';
                      const dis = isOther ? 'disabled style="color:#94a3b8;"' : '';
                      return `<option value="${u.id}" ${team && team.speaker2_id === u.id && !team.speaker2_name_custom ? 'selected' : ''} ${dis}>${u.full_name}${tag}</option>`;
                    }).join('')}
                  </select>
                  <input type="text" id="m-team-sp2-custom" class="form-input" placeholder="বা নাম লিখুন (Custom Name)" value="${team ? (team.speaker2_name_custom || '') : ''}" oninput="if(this.value) document.getElementById('m-team-sp2').value=''" />
                </div>
              </div>

              <!-- Speaker 3 -->
              <div style="margin-bottom: 0.65rem;">
                <label style="font-size:0.8rem; font-weight:700; color:#334155; display:block; margin-bottom:0.35rem;">
                  3য় বক্তা (3rd Speaker):
                </label>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem;">
                  <select id="m-team-sp3" class="form-select" onchange="window.app.validateDebaterSelect('m-team-sp3')">
                    <option value="">-- 3য় বক্তা নির্বাচন করুন --</option>
                    ${allUsers.map(u => {
                      const isOther = u.current_team_id && (!team || team.id !== u.current_team_id);
                      const tag = isOther ? ` (${u.current_team_name} দলে যুক্ত)` : '';
                      const dis = isOther ? 'disabled style="color:#94a3b8;"' : '';
                      return `<option value="${u.id}" ${team && team.speaker3_id === u.id && !team.speaker3_name_custom ? 'selected' : ''} ${dis}>${u.full_name}${tag}</option>`;
                    }).join('')}
                  </select>
                  <input type="text" id="m-team-sp3-custom" class="form-input" placeholder="বা নাম লিখুন (Custom Name)" value="${team ? (team.speaker3_name_custom || '') : ''}" oninput="if(this.value) document.getElementById('m-team-sp3').value=''" />
                </div>
              </div>

              <!-- Leader selection radio -->
              <div style="margin-top:0.75rem; padding-top:0.65rem; border-top:1px dashed #cbd5e1; display:flex; align-items:center; gap:0.85rem; flex-wrap:wrap;">
                <span style="font-size:0.76rem; font-weight:800; color:#475569;">দলনেতা নির্বাচন:</span>
                <label style="font-size:0.78rem; display:flex; align-items:center; gap:0.25rem; cursor:pointer;">
                  <input type="radio" name="leader_pos" value="3" ${!team || team.leader_id === team.speaker3_id || !team.leader_id ? 'checked' : ''} /> 3য় বক্তা (Default)
                </label>
                <label style="font-size:0.78rem; display:flex; align-items:center; gap:0.25rem; cursor:pointer;">
                  <input type="radio" name="leader_pos" value="1" ${team && team.leader_id === team.speaker1_id && team.speaker1_id ? 'checked' : ''} /> 1ম বক্তা
                </label>
                <label style="font-size:0.78rem; display:flex; align-items:center; gap:0.25rem; cursor:pointer;">
                  <input type="radio" name="leader_pos" value="2" ${team && team.leader_id === team.speaker2_id && team.speaker2_id ? 'checked' : ''} /> 2য় বক্তা
                </label>
              </div>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
              <div class="form-group">
                <label class="form-label">${window.i18n.t("category_label")}</label>
                <select id="m-team-rating" class="form-select">
                  <option value="A" ${team && team.rating === 'A' ? 'selected' : ''}>A (Strong)</option>
                  <option value="B" ${!team || team.rating === 'B' ? 'selected' : ''}>B (Medium)</option>
                  <option value="C" ${team && team.rating === 'C' ? 'selected' : ''}>C (Developing)</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">${window.i18n.t("status_label")}</label>
                <select id="m-team-status" class="form-select">
                  <option value="APPROVED" ${!team || team.status === 'APPROVED' ? 'selected' : ''}>Approved</option>
                  <option value="PENDING_APPROVAL" ${team && team.status === 'PENDING_APPROVAL' ? 'selected' : ''}>Pending</option>
                  <option value="REJECTED" ${team && team.status === 'REJECTED' ? 'selected' : ''}>Rejected</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="document.getElementById('team-modal').remove()">${window.i18n.t("cancel")}</button>
            <button class="btn btn-primary" onclick="window.app.submitSaveTeam(${team ? team.id : 'null'})">
              ${window.i18n.t("save_changes")}
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById("team-modal")?.remove();
    const div = document.createElement("div");
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);
  }

  validateDebaterSelect(changedId) {
    const s1 = document.getElementById("m-team-sp1");
    const s2 = document.getElementById("m-team-sp2");
    const s3 = document.getElementById("m-team-sp3");
    const changed = document.getElementById(changedId);
    if (!changed || !changed.value) return;

    const customField = document.getElementById(changedId + "-custom");
    if (customField) customField.value = "";

    const all = [s1, s2, s3].filter(el => el && el.id !== changedId);
    for (const other of all) {
      if (other && other.value && other.value === changed.value) {
        showToast("একই বিতার্কিককে একই দলে একাধিক পদে নির্বাচন করা যাবে না।", "error");
        changed.value = "";
        return;
      }
    }
  }

  async submitSaveTeam(teamId) {
    const nameEl = document.getElementById("m-team-name");
    const name = nameEl ? nameEl.value.trim() : "";
    if (!name) {
      showToast("দলের নাম প্রদান করতে হবে। (Team name is required.)", "error");
      return;
    }

    const customNameEl = document.getElementById("m-team-custom-name");
    const customName = customNameEl ? customNameEl.value.trim() : "";

    const instEl = document.getElementById("m-team-inst");
    const inst = instEl ? instEl.value.trim() : "HGHSDC (Habiganj Govt. High School)";

    const sp1El = document.getElementById("m-team-sp1");
    const sp1 = sp1El ? sp1El.value : "";
    const sp1CustomEl = document.getElementById("m-team-sp1-custom");
    const sp1Custom = sp1CustomEl ? sp1CustomEl.value.trim() : "";

    const sp2El = document.getElementById("m-team-sp2");
    const sp2 = sp2El ? sp2El.value : "";
    const sp2CustomEl = document.getElementById("m-team-sp2-custom");
    const sp2Custom = sp2CustomEl ? sp2CustomEl.value.trim() : "";

    const sp3El = document.getElementById("m-team-sp3");
    const sp3 = sp3El ? sp3El.value : "";
    const sp3CustomEl = document.getElementById("m-team-sp3-custom");
    const sp3Custom = sp3CustomEl ? sp3CustomEl.value.trim() : "";

    // Duplicate speaker validation on same team
    const selectedIds = [sp1, sp2, sp3].filter(x => x && x !== "");
    if (selectedIds.length !== new Set(selectedIds).size) {
      showToast("1ম, 2য় ও 3য় বক্তা ভিন্ন ব্যক্তি হতে হবে। একই বিতার্কিক একাধিক পদে থাকতে পারেন না।", "error");
      return;
    }

    const sp1Val = sp1 ? parseInt(sp1) : null;
    const sp2Val = sp2 ? parseInt(sp2) : null;
    const sp3Val = sp3 ? parseInt(sp3) : null;

    const leaderPos = document.querySelector('input[name="leader_pos"]:checked')?.value || "3";
    let leaderId = sp3Val;
    if (leaderPos === "1") leaderId = sp1Val;
    else if (leaderPos === "2") leaderId = sp2Val;

    const ratingEl = document.getElementById("m-team-rating");
    const rating = ratingEl ? ratingEl.value : "B";

    const statusEl = document.getElementById("m-team-status");
    const status = statusEl ? statusEl.value : "APPROVED";

    try {
      const res = await window.api.post("/api/teams/admin/save-team", {
        id: teamId,
        name: name,
        custom_name: customName,
        school_organization: inst,
        leader_id: leaderId,
        speaker1_id: sp1Val,
        speaker2_id: sp2Val,
        speaker3_id: sp3Val,
        speaker1_name_custom: sp1Custom,
        speaker2_name_custom: sp2Custom,
        speaker3_name_custom: sp3Custom,
        rating: rating,
        status: status,
        is_official: 1
      });

      document.getElementById("team-modal")?.remove();
      showToast(window.i18n.lang === 'bn' ? "দলের তথ্য সফলভাবে সংরক্ষিত হয়েছে।" : "Team roster saved successfully.", "success");
      
      // Refresh teams view immediately
      await this.renderTeamsView(document.getElementById("main-view"));
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async deleteTeam(teamId) {
    const confirmMsg = window.i18n.lang === 'bn' ? "আপনি কি নিশ্চিতভাবে এই দলটি মুছে ফেলতে চান?" : "Are you sure you want to delete this team?";
    if (!confirm(confirmMsg)) return;
    try {
      await window.api.request(`/api/teams/admin/teams/${teamId}`, { method: "DELETE" });
      showToast(window.i18n.lang === 'bn' ? "দল মুছে ফেলা হয়েছে।" : "Team deleted.", "info");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async handleTeamApply(e) {
    e.preventDefault();
    const teamId = parseInt(document.getElementById("apply-team-id").value);
    const teamName = document.getElementById("apply-team-name") ? document.getElementById("apply-team-name").value.trim() : "";
    const sp1 = document.getElementById("apply-sp1").value ? parseInt(document.getElementById("apply-sp1").value) : null;
    const sp2 = document.getElementById("apply-sp2").value ? parseInt(document.getElementById("apply-sp2").value) : null;
    const sp3 = document.getElementById("apply-sp3").value ? parseInt(document.getElementById("apply-sp3").value) : null;

    if (!teamId) {
      showToast(window.i18n.lang === 'bn' ? "1-16 এর মধ্যে একটি টিম স্লট নির্বাচন করুন।" : "Please select a team slot (1-16).", "error");
      return;
    }

    if (!teamName) {
      showToast(window.i18n.lang === 'bn' ? "দলের নাম লিখুন।" : "Please enter a custom team name.", "error");
      return;
    }

    const selectedSpeakers = [sp1, sp2, sp3].filter(s => s !== null);
    if (new Set(selectedSpeakers).size !== selectedSpeakers.length) {
      showToast(window.i18n.t("speaker_duplicate_error"), "error");
      return;
    }

    try {
      const res = await window.api.post("/api/teams/apply", {
        team_id: teamId,
        name: teamName,
        custom_name: teamName,
        speaker1_id: sp1,
        speaker2_id: sp2,
        speaker3_id: sp3
      });
      showToast(res.message || (window.i18n.lang === 'bn' ? "দলের নাম ও রোস্টার সফলভাবে সংরক্ষিত হয়েছে।" : "Team roster saved successfully."), "success");
      await this.loadBracket();
      this.render();
    } catch (err) {
      showToast(err.message, "error");
    }
  }

  async updateTeamRating(teamId, rating) {
    try {
      await window.api.post("/api/teams/rating", { team_id: teamId, rating });
      showToast(window.i18n.lang === 'bn' ? `দলের ক্যাটাগরি ${rating} করা হয়েছে।` : `Category updated to ${rating}`, "success");
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async toggleOfficialTeam(teamId, isOfficial) {
    try {
      await window.api.post("/api/teams/official", { team_id: teamId, is_official: isOfficial });
      showToast(window.i18n.lang === 'bn' ? "দলের অফিসিয়াল স্ট্যাটাস আপডেট হয়েছে।" : "Team official status updated.", "success");
      await this.loadTeams();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  // ==============================================
  // ADMIN MATCH-DAY CONTROL CENTER
  // ==============================================
  async renderAdminControlCenter(container) {
    await this.loadBracket();
    const roundsRes = await window.api.get("/api/tournament/rounds");
    const rounds = roundsRes.rounds;
    const currentRound = rounds.find(r => r.status === "STARTED" || r.status === "SCORING" || r.status === "REVIEW") || rounds[0];

    const matches = this.bracketData ? this.bracketData.matches : [];
    const rMatches = matches.filter(m => m.round_id === currentRound.id);

    let html = `
      <div class="section-header">
        <div>
          <h2 class="section-title">${window.i18n.t("command_center_title")}</h2>
          <p class="section-desc">${window.i18n.t("command_center_desc")}</p>
        </div>
        <div style="display: flex; gap: 0.65rem;">
          <a href="/api/export/tournament-csv" class="btn btn-secondary btn-sm" download>
            ${getSvg("download", 14)} ${window.i18n.t("export_csv")}
          </a>
          <button class="btn btn-secondary btn-sm" onclick="window.print()">
            ${getSvg("print", 14)} ${window.i18n.t("print")}
          </button>
          <button class="btn btn-danger btn-sm" onclick="window.app.openGranularResetModal()" title="${window.i18n.lang === 'bn' ? 'সিস্টেম ও ডাটাবেস রিসেট' : 'Granular System Reset'}">
            ${getSvg("trash", 14)} ${window.i18n.t("system_reset")}
          </button>
        </div>
      </div>

      <div class="grid-cards">
        <div class="win-glass stat-card">
          <div class="stat-header">
            <span>${window.i18n.t("official_teams_count")}</span>
            ${getSvg("users", 16)}
          </div>
          <div class="stat-value">${this.stats ? this.stats.official_teams : 0} / 16</div>
          <div class="stat-subtext">${window.i18n.lang === 'bn' ? 'চূড়ান্ত 16 দলের টুর্নামেন্ট' : '16 Confirmed Teams'}</div>
        </div>

        <div class="win-glass stat-card">
          <div class="stat-header">
            <span>${window.i18n.lang === 'bn' ? 'বর্তমান রাউন্ড' : 'Current Round'}</span>
            ${getSvg("bracket", 16)}
          </div>
          <div class="stat-value" style="font-size: 1.35rem;">${currentRound.name}</div>
          <div class="stat-subtext">${window.i18n.t("th_status")}: <span class="badge badge-blue">${currentRound.status}</span></div>
        </div>

        <div class="win-glass stat-card">
          <div class="stat-header">
            <span>${window.i18n.t("pending_ballots")}</span>
            ${getSvg("scale", 16)}
          </div>
          <div class="stat-value">${this.stats ? this.stats.pending_ballots : 0}</div>
          <div class="stat-subtext">${window.i18n.lang === 'bn' ? 'বিচারকদের মূল্যায়ন শিট' : 'Pending Adjudicator Ballots'}</div>
        </div>

        <div class="win-glass stat-card">
          <div class="stat-header">
            <span>${window.i18n.t("pending_publication")}</span>
            ${getSvg("lock", 16)}
          </div>
          <div class="stat-value">${this.stats ? this.stats.pending_publications : 0}</div>
          <div class="stat-subtext">${window.i18n.lang === 'bn' ? 'প্রকাশের জন্য প্রস্তুত' : 'Silent Results Awaiting Release'}</div>
        </div>
      </div>

      <div class="win-glass" style="padding: 1.25rem 1.5rem; margin-bottom: 1.75rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: #64748b; font-weight: 800;">${window.i18n.t("active_motion")}</span>
          <div style="font-weight: 700; font-size: 1rem; color:#000; margin-top: 0.2rem;">
            ${(window.i18n.lang === 'bn') ? (currentRound.motion_bn || currentRound.motion_en || 'বিতর্কের বিষয় এখনও নির্ধারিত হয়নি') : (currentRound.motion_en || 'Motion not yet released')}
          </div>
          ${(window.i18n.lang === 'bn' && currentRound.motion_bn && currentRound.motion_en) ? `<div style="font-size: 0.88rem; color: #475569; margin-top: 0.15rem;">${currentRound.motion_en}</div>` : ''}
        </div>
        <div>
          ${currentRound.status === "READY" || currentRound.status === "DRAFT" ? `
            <button class="btn btn-primary" onclick="window.app.startRound(${currentRound.round_number})">
              ${window.i18n.t("start_round")} ${currentRound.round_number}
            </button>
          ` : `
            <span class="badge badge-green" style="font-size: 0.85rem; padding: 0.4rem 0.85rem;">
              ${window.i18n.t("round_is_live")}
            </span>
          `}
        </div>
      </div>

      <div class="win-glass" style="padding: 1.25rem;">
        <h3 style="font-size: 1.1rem; font-weight: 800; color: #000; margin-bottom: 1rem;">${window.i18n.t("matches_and_scores")}</h3>
        <div class="win-table-container">
          <table class="win-table">
            <thead>
              <tr>
                <th>${window.i18n.t("th_match")}</th>
                <th>${window.i18n.t("th_room")}</th>
                <th>${window.i18n.t("th_team1")}</th>
                <th>${window.i18n.t("th_team2")}</th>
                <th>${window.i18n.t("th_status")}</th>
                <th>${window.i18n.t("th_total_score")}</th>
                <th>${window.i18n.t("th_winner")}</th>
                <th>${window.i18n.t("th_admin_actions")}</th>
              </tr>
            </thead>
            <tbody>
              ${rMatches.map(m => `
                <tr>
                  <td><strong>M${m.match_number}</strong></td>
                  <td>${m.room_name || 'Room Alpha'}</td>
                  <td>
                    <span style="font-weight:700; color:#0369a1; display:block;">${m.team1_name || 'TBD'}</span>
                    ${m.team1_custom_name ? `<span style="font-size:0.78rem; font-weight:700; color:#047857; display:block; line-height:1.2;">${m.team1_custom_name}</span>` : ''}
                  </td>
                  <td>
                    <span style="font-weight:700; color:#15803d; display:block;">${m.team2_name || 'TBD'}</span>
                    ${m.team2_custom_name ? `<span style="font-size:0.78rem; font-weight:700; color:#047857; display:block; line-height:1.2;">${m.team2_custom_name}</span>` : ''}
                  </td>
                  <td>
                    <span class="badge ${m.is_published ? 'badge-green' : (m.status === 'LIVE' ? 'badge-amber' : 'badge-purple')}">
                      ${m.is_published ? window.i18n.t("published_badge") : (m.status === 'LIVE' ? 'LIVE' : window.i18n.t("silent_result_badge"))}
                    </span>
                  </td>
                  <td>
                    ${m.team1_aggregate !== null ? `
                      <strong>${m.team1_aggregate.toFixed(1)}</strong> vs <strong>${m.team2_aggregate.toFixed(1)}</strong>
                    ` : '<span style="color:#94a3b8">-</span>'}
                  </td>
                  <td>
                    ${m.winner_name ? `
                      <strong style="color: #059669; display:block;">${m.winner_name}</strong>
                      ${m.winner_custom_name ? `<span style="font-size:0.78rem; font-weight:700; color:#047857; display:block;">${m.winner_custom_name}</span>` : ''}
                    ` : (m.tie_status === 'DEADLOCK_ADMIN_REQUIRED' ? '<span class="badge badge-rose">DEADLOCK TIE</span>' : '-')}
                  </td>
                  <td>
                    <div style="display:flex; gap:0.45rem;">
                      <button class="btn btn-secondary btn-sm" onclick="window.app.openMatchReviewModal(${m.id})">
                        ${getSvg("edit", 12)} ${window.i18n.t("tabulation")}
                      </button>
                      ${m.status === 'LIVE' ? `
                        <button class="btn btn-secondary btn-sm" onclick="window.app.undoStartMatch(${m.id})">
                          ${window.i18n.lang === 'bn' ? 'শুরু বাতিল' : 'Undo Start'}
                        </button>
                      ` : ''}
                      ${!m.is_published && m.winner_id ? `
                        <button class="btn btn-primary btn-sm" onclick="window.app.publishMatchResult(${m.id})">
                          ${window.i18n.t("publish_result")}
                        </button>
                      ` : ''}
                      ${m.is_published ? `
                        <button class="btn btn-danger btn-sm" onclick="window.app.undoEndMatch(${m.id})">
                          ${window.i18n.lang === 'bn' ? 'ফলাফল বাতিল' : 'Undo End'}
                        </button>
                      ` : ''}
                      ${m.tie_status === 'DEADLOCK_ADMIN_REQUIRED' ? `
                        <button class="btn btn-danger btn-sm" onclick="window.app.openDeadlockResolveModal(${m.id}, ${m.team1_id}, '${m.team1_name}', ${m.team2_id}, '${m.team2_name}')">
                          ${window.i18n.t("resolve_tie")}
                        </button>
                      ` : ''}
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  async startRound(rNum) {
    try {
      const res = await window.api.post(`/api/judging/rounds/${rNum}/start`, {});
      showToast(res.message, "success");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async openMatchReviewModal(matchId) {
    try {
      const res = await window.api.get(`/api/results/match/${matchId}/review`);
      const m = res.match;
      const ballots = res.ballots;

      let modalHtml = `
        <div class="modal-backdrop" id="match-review-modal">
          <div class="modal-dialog" style="max-width: 760px;">
            <div class="modal-header">
              <h3 class="modal-title">
                <img src="/static/img/hghsdc.png?v=2026" alt="Official Seal" style="width:26px; height:26px; object-fit:contain; border-radius:50%;" />
                Match ${m.match_number} Tabulation & Review
              </h3>
              <button style="background:none;border:none;color:#000;font-size:1.5rem;cursor:pointer;" onclick="document.getElementById('match-review-modal').remove()">x</button>
            </div>
            <div class="modal-body">
              <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 1.15rem; border-radius: var(--radius-md); border: 1px solid var(--border-card); margin-bottom: 1.25rem;">
                <div>
                  <div style="font-size: 1.05rem; font-weight: 800; color: #0369a1;">${m.team1_name}</div>
                  ${m.team1_custom_name ? `<div style="font-size:0.85rem; font-weight:700; color:#047857; line-height:1.2;">${m.team1_custom_name}</div>` : ''}
                  <div style="font-size: 1.5rem; font-weight: 900; color:#000;">
                    ${m.team1_aggregate !== null ? m.team1_aggregate.toFixed(2) : '-'}
                  </div>
                </div>
                <div style="font-weight: 800; color: #64748b; font-size: 1.1rem;">VS</div>
                <div style="text-align: right;">
                  <div style="font-size: 1.05rem; font-weight: 800; color: #15803d;">${m.team2_name}</div>
                  ${m.team2_custom_name ? `<div style="font-size:0.85rem; font-weight:700; color:#047857; line-height:1.2;">${m.team2_custom_name}</div>` : ''}
                  <div style="font-size: 1.5rem; font-weight: 900; color:#000;">
                    ${m.team2_aggregate !== null ? m.team2_aggregate.toFixed(2) : '-'}
                  </div>
                </div>
              </div>

              <!-- Team Debater WhatsApp Directory for Tab Director -->
              <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin-bottom:1.25rem;">
                <div style="background:#f8fafc; border:1px solid var(--border-card); border-radius:var(--radius-md); padding:0.75rem 0.9rem; border-left:3px solid #2563eb;">
                  <span style="font-size:0.75rem; font-weight:800; color:#2563eb; display:block; margin-bottom:0.35rem;">${m.team1_name} ${m.team1_custom_name ? `(${m.team1_custom_name})` : ''} Roster:</span>
                  <div style="display:flex; flex-direction:column; gap:0.25rem; font-size:0.8rem;">
                    ${(res.team1_members || []).map(mem => `
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span><strong>${mem.name}</strong> <span style="font-size:0.7rem; color:#64748b;">(${mem.role})</span></span>
                        ${getWhatsAppButton(mem.phone, mem.name)}
                      </div>
                    `).join('')}
                  </div>
                </div>

                <div style="background:#f8fafc; border:1px solid var(--border-card); border-radius:var(--radius-md); padding:0.75rem 0.9rem; border-left:3px solid #059669;">
                  <span style="font-size:0.75rem; font-weight:800; color:#059669; display:block; margin-bottom:0.35rem;">${m.team2_name} ${m.team2_custom_name ? `(${m.team2_custom_name})` : ''} Roster:</span>
                  <div style="display:flex; flex-direction:column; gap:0.25rem; font-size:0.8rem;">
                    ${(res.team2_members || []).map(mem => `
                      <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span><strong>${mem.name}</strong> <span style="font-size:0.7rem; color:#64748b;">(${mem.role})</span></span>
                        ${getWhatsAppButton(mem.phone, mem.name)}
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- Ballots List -->
              <h4 style="font-size: 0.9rem; font-weight: 800; margin-bottom: 0.65rem; color:#000;">${window.i18n.lang === 'bn' ? 'বিচারকদের স্বতন্ত্র ব্যালট তালিকা' : 'Independent Adjudicator Ballots'} (${ballots.length})</h4>
              ${ballots.length === 0 ? `<p style="color:#64748b; font-size:0.85rem; margin-bottom:1.25rem;">${window.i18n.lang === 'bn' ? 'এখনও কোনো ব্যালট জমা পড়েনি।' : 'No ballots submitted yet.'}</p>` : `
                <div class="win-table-container" style="margin-bottom: 1.25rem;">
                  <table class="win-table">
                    <thead>
                      <tr>
                        <th>${window.i18n.t("th_judge")}</th>
                        <th>${window.i18n.t("th_status")}</th>
                        <th>${m.team1_name} ${window.i18n.t("total_column")}</th>
                        <th>${m.team2_name} ${window.i18n.t("total_column")}</th>
                        <th>${window.i18n.t("th_tie_choice")}</th>
                        <th>${window.i18n.lang === 'bn' ? 'পদক্ষেপ' : 'Tab Director Action'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${ballots.map(b => `
                        <tr>
                          <td><strong>${b.judge_name}</strong></td>
                          <td><span class="badge ${b.status === 'SUBMITTED' ? 'badge-green' : 'badge-amber'}">${b.status}</span></td>
                          <td style="color:#0369a1; font-weight:800;">${b.team1_total.toFixed(2)}</td>
                          <td style="color:#15803d; font-weight:800;">${b.team2_total.toFixed(2)}</td>
                          <td>${b.tie_choice_team_id ? (b.tie_choice_team_id === m.team1_id ? m.team1_name : m.team2_name) : '-'}</td>
                          <td>
                            <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
                              <button class="btn btn-secondary btn-sm" onclick="window.app.openJudgeBallotAsAdmin(${b.id}, '${b.judge_name}')">
                                ${getSvg("edit", 12)} ${window.i18n.lang === 'bn' ? 'নম্বর এডিট' : 'Enter / Edit'}
                              </button>
                              ${b.status === 'SUBMITTED' ? `
                                <button class="btn btn-warning btn-sm" onclick="window.app.requestRejudgeBallot(${b.id}, ${m.id}, '${b.judge_name}')" title="${window.i18n.lang === 'bn' ? 'পুনর্মূল্যায়ন আবেদন' : 'Request Re-Judge'}">
                                  ${getSvg("lock", 12)} ${window.i18n.t("rejudge_request")}
                                </button>
                              ` : ''}
                              <button class="btn btn-danger btn-sm" onclick="window.app.deleteBallot(${b.id}, ${m.id}, '${b.judge_name}')" title="${window.i18n.lang === 'bn' ? 'ব্যালট মুছুন' : 'Delete Ballot'}">
                                ${getSvg("trash", 12)} ${window.i18n.t("delete_ballot")}
                              </button>
                            </div>
                          </td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              `}

              <!-- Direct Score Entry Override -->
              <div style="background: #ffffff; border: 2px solid #000000; padding: 1.15rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
                <span class="form-label" style="color: #000000; font-size:0.82rem; margin-bottom: 0.4rem; display: block;">
                  ${getSvg("edit", 14)} ${window.i18n.t("direct_score_title")}
                </span>
                <p style="font-size: 0.8rem; color: #475569; margin-bottom: 0.75rem;">
                  ${window.i18n.t("direct_score_desc")}
                </p>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.65rem; margin-bottom: 0.75rem;">
                  <div>
                    <label class="form-label">${m.team1_name} ${window.i18n.t("total_column")}</label>
                    <input type="number" id="dir-t1-score" class="form-input" step="0.1" value="${m.team1_aggregate !== null ? m.team1_aggregate : 0}" />
                  </div>
                  <div>
                    <label class="form-label">${m.team2_name} ${window.i18n.t("total_column")}</label>
                    <input type="number" id="dir-t2-score" class="form-input" step="0.1" value="${m.team2_aggregate !== null ? m.team2_aggregate : 0}" />
                  </div>
                  <div>
                    <label class="form-label">${window.i18n.t("decisive_winner_label")}</label>
                    <select id="dir-winner" class="form-select">
                      <option value="${m.team1_id}" ${m.winner_id === m.team1_id ? 'selected' : ''}>${m.team1_name}${m.team1_custom_name ? ` (${m.team1_custom_name})` : ''}</option>
                      <option value="${m.team2_id}" ${m.winner_id === m.team2_id ? 'selected' : ''}>${m.team2_name}${m.team2_custom_name ? ` (${m.team2_custom_name})` : ''}</option>
                    </select>
                  </div>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="window.app.applyDirectScore(${m.id})">
                  ${window.i18n.t("save_direct_score")}
                </button>
              </div>

              ${m.winner_name ? `
                <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 0.85rem; border-radius: var(--radius-md);">
                  <strong style="color:#065f46;">${window.i18n.t("th_winner")}:</strong> <span style="font-weight:800; color:#000;">${m.winner_name}${m.winner_custom_name ? ` (${m.winner_custom_name})` : ''}</span>
                  ${m.is_published ? `<span class="badge badge-green" style="margin-left:0.5rem;">${window.i18n.t("published_badge")}</span>` : `<span class="badge badge-purple" style="margin-left:0.5rem;">${window.i18n.t("silent_result_badge")}</span>`}
                </div>
              ` : ''}
            </div>
            <div class="modal-footer">
              ${m.is_published ? `
                <button class="btn btn-danger" onclick="window.app.undoEndMatch(${m.id})">
                  ${window.i18n.lang === 'bn' ? 'ম্যাচের ফলাফল বাতিল (Undo End)' : 'Undo Match End'}
                </button>
              ` : ''}
              <button class="btn btn-secondary" onclick="document.getElementById('match-review-modal').remove()">${window.i18n.t("close")}</button>
              ${!m.is_published && m.winner_id ? `
                <button class="btn btn-primary" onclick="window.app.publishMatchResult(${m.id})">
                  ${window.i18n.t("publish_result")}
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;

      const div = document.createElement("div");
      div.innerHTML = modalHtml;
      document.body.appendChild(div.firstElementChild);
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async applyDirectScore(matchId) {
    const t1 = parseFloat(document.getElementById("dir-t1-score").value) || 0;
    const t2 = parseFloat(document.getElementById("dir-t2-score").value) || 0;
    const winnerId = parseInt(document.getElementById("dir-winner").value);

    try {
      await window.api.post(`/api/results/match/${matchId}/direct-score`, {
        team1_score: t1,
        team2_score: t2,
        winner_id: winnerId,
        publish_now: false
      });
      showToast(window.i18n.lang === 'bn' ? "স্কোর সংরক্ষিত হয়েছে।" : "Scores applied directly by Admin.", "success");
      document.getElementById("match-review-modal")?.remove();
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async publishMatchResult(matchId) {
    try {
      const res = await window.api.post(`/api/results/match/${matchId}/publish`, {});
      document.getElementById("match-review-modal")?.remove();
      showToast(res.message, "success");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  openDeadlockResolveModal(matchId, t1Id, t1Name, t2Id, t2Name) {
    let modalHtml = `
      <div class="modal-backdrop" id="deadlock-modal">
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 class="modal-title">${getSvg("alert", 16)} ${window.i18n.t("deadlock_tie_title")}</h3>
            <button style="background:none;border:none;color:#000;font-size:1.5rem;cursor:pointer;" onclick="document.getElementById('deadlock-modal').remove()">x</button>
          </div>
          <div class="modal-body">
            <p style="font-size:0.85rem; color:#475569; margin-bottom:1rem;">
              ${window.i18n.t("deadlock_tie_desc")}
            </p>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("decisive_winner_label")}</label>
              <select id="deadlock-winner" class="form-select">
                <option value="${t1Id}">${t1Name}</option>
                <option value="${t2Id}">${t2Name}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">${window.i18n.t("audit_reason_label")}</label>
              <textarea id="deadlock-reason" class="form-textarea" rows="3" placeholder="${window.i18n.t('audit_reason_label')}" required></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="document.getElementById('deadlock-modal').remove()">${window.i18n.t("cancel")}</button>
            <button class="btn btn-danger" onclick="window.app.submitDeadlockResolution(${matchId})">${window.i18n.t("confirm_decision")}</button>
          </div>
        </div>
      </div>
    `;
    const div = document.createElement("div");
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);
  }

  async submitDeadlockResolution(matchId) {
    const winnerId = parseInt(document.getElementById("deadlock-winner").value);
    const reason = document.getElementById("deadlock-reason").value.trim();
    if (!reason) {
      showToast(window.i18n.lang === 'bn' ? "দয়া করে কারণ উল্লেখ করুন।" : "Please provide a reason.", "error");
      return;
    }

    try {
      await window.api.post(`/api/results/match/${matchId}/resolve-tie`, {
        match_id: matchId,
        winner_id: winnerId,
        reason
      });
      document.getElementById("deadlock-modal")?.remove();
      showToast(window.i18n.lang === 'bn' ? "টাইব্রেকার সফল হয়েছে।" : "Tie resolved successfully.", "success");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  // ==============================================
  // JUDGE WORKSPACE
  // ==============================================
  async renderJudgeWorkspace(container) {
    const assignRes = await window.api.get("/api/judging/my-assignment");

    let notifsHtml = "";
    try {
      const notifsRes = await window.api.get("/api/judging/notifications");
      const unread = (notifsRes.notifications || []).filter(n => !n.is_read);
      if (unread.length > 0) {
        notifsHtml = `
          <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 1rem 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
            <div style="display:flex; align-items: center; gap:0.65rem;">
              ${getSvg("bell", 18)}
              <div>
                <strong style="color:#065f46;">${unread[0].message}</strong>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="window.app.markNotifRead(${unread[0].id})">
              ${window.i18n.t("close")}
            </button>
          </div>
        `;
      }
    } catch (e) {}

    if (!assignRes.active) {
      container.innerHTML = `
        <div class="section-header">
          <div>
            <h2 class="section-title">${window.i18n.t("judging_title")}</h2>
            <p class="section-desc">${window.i18n.t("judging_desc")}</p>
          </div>
        </div>

        ${notifsHtml}

        <div class="win-glass" style="padding: 3rem 2rem; text-align: center; max-width: 620px; margin: 2rem auto;">
          <div style="color: #64748b; margin-bottom: 1rem;">
            ${getSvg("lock", 40)}
          </div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color:#000; margin-bottom: 0.5rem;">${window.i18n.lang === 'bn' ? 'মূল্যায়ন পত্র বর্তমানে নিষ্ক্রিয়' : 'Adjudication Workspace Inactive'}</h3>
          <p style="color: #475569; font-size: 0.9rem; line-height: 1.6;">
            ${assignRes.message}
          </p>
        </div>
      `;
      return;
    }

    const m = assignRes.match;
    container.innerHTML = `
      <div class="section-header">
        <div>
          <h2 class="section-title">${window.i18n.t("judging_title")} — ${window.i18n.t("th_match")} ${m.match_number}</h2>
          <p class="section-desc">${m.round_name} • ${m.room_name || 'Room Alpha'}</p>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="window.debateAudio.testAudio()">
            ${getSvg("bell", 14)} ${window.i18n.t("test_audio")}
          </button>
        </div>
      </div>

      ${notifsHtml}

      <!-- Motion Card -->
      <div class="win-glass" style="padding: 1.15rem 1.4rem; margin-bottom: 1.5rem;">
        <span style="font-size: 0.75rem; font-weight: 800; color: #0369a1; text-transform: uppercase; letter-spacing: 0.08em;">
          ${window.i18n.t("motion")}
        </span>
        <div style="font-size: 1.1rem; font-weight: 800; color:#000; margin-top: 0.25rem;">
          ${m.motion_en}
        </div>
        ${m.motion_bn ? `<div style="font-size: 0.92rem; color: #334155; font-weight:600; margin-top: 0.2rem;">${m.motion_bn}</div>` : ''}
      </div>

      <!-- Debater Direct WhatsApp Directory for Judge -->
      <div class="win-glass" style="padding: 1.15rem 1.4rem; margin-bottom: 1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; border-bottom:1px solid var(--border-card); padding-bottom:0.45rem;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <strong style="font-size:0.86rem; color:var(--brand-navy);">${window.i18n.lang === 'bn' ? 'উভয় দলের বিতার্কিকদের সরাসরি হোয়াটসঅ্যাপ' : 'Debater Direct WhatsApp Directory'}</strong>
          </div>
          <span style="font-size:0.74rem; color:#64748b;">${window.i18n.lang === 'bn' ? 'যোগাযোগ করতে আইকনে চাপ দিন' : 'Click icon to message directly'}</span>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.25rem;">
          <!-- Team 1 -->
          <div style="background:#f8fafc; border:1px solid var(--border-card); border-radius:var(--radius-md); padding:0.85rem 1rem; border-left:4px solid #2563eb;">
            <div style="font-size:0.88rem; font-weight:800; color:#2563eb; margin-bottom:0.25rem;">${m.team1_name} (${window.i18n.lang === 'bn' ? 'সরকারি দল / Proposition' : 'Proposition'})</div>
            ${m.team1_custom_name ? `
              <div style="font-size:0.92rem; font-weight:800; color:#047857; margin-bottom:0.55rem; display:flex; align-items:center; gap:0.4rem;">
                <span style="background:#d1fae5; color:#065f46; border:1px solid #a7f3d0; padding:1px 6px; border-radius:4px; font-size:0.7rem; font-weight:800;">
                  ${window.i18n.lang === 'bn' ? 'অনুমোদিত দল' : 'Approved Roster'}
                </span>
                <span>${window.i18n.lang === 'bn' ? 'দলের নাম' : 'Team'}: <strong>${m.team1_custom_name}</strong></span>
              </div>
            ` : ''}
            <div style="display:flex; flex-direction:column; gap:0.45rem;">
              ${(assignRes.team1_speakers || []).map((sp, idx) => `
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.84rem; padding:0.35rem 0.5rem; background:rgba(255,255,255,0.75); border-radius:6px; border:1px solid #e2e8f0;">
                  <div style="display:flex; align-items:center; gap:0.45rem;">
                    <span class="role-code-badge role-code-${sp.role_code || (idx+1)}" style="width:22px; height:22px; font-size:0.7rem;">${sp.role_code || (idx+1)}</span>
                    <strong>${sp.name}</strong>
                  </div>
                  <div style="display:flex; align-items:center; gap:0.4rem;">
                    <code style="font-size:0.78rem; padding:0.15rem 0.45rem; background:#f1f5f9; border-radius:4px; font-family:monospace; color:#334155;">${sp.phone || '-'}</code>
                    ${getWhatsAppButton(sp.phone, sp.name)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Team 2 -->
          <div style="background:#f8fafc; border:1px solid var(--border-card); border-radius:var(--radius-md); padding:0.85rem 1rem; border-left:4px solid #059669;">
            <div style="font-size:0.88rem; font-weight:800; color:#059669; margin-bottom:0.25rem;">${m.team2_name} (${window.i18n.lang === 'bn' ? 'বিরোধী দল / Opposition' : 'Opposition'})</div>
            ${m.team2_custom_name ? `
              <div style="font-size:0.92rem; font-weight:800; color:#047857; margin-bottom:0.55rem; display:flex; align-items:center; gap:0.4rem;">
                <span style="background:#d1fae5; color:#065f46; border:1px solid #a7f3d0; padding:1px 6px; border-radius:4px; font-size:0.7rem; font-weight:800;">
                  ${window.i18n.lang === 'bn' ? 'অনুমোদিত দল' : 'Approved Roster'}
                </span>
                <span>${window.i18n.lang === 'bn' ? 'দলের নাম' : 'Team'}: <strong>${m.team2_custom_name}</strong></span>
              </div>
            ` : ''}
            <div style="display:flex; flex-direction:column; gap:0.45rem;">
              ${(assignRes.team2_speakers || []).map((sp, idx) => `
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.84rem; padding:0.35rem 0.5rem; background:rgba(255,255,255,0.75); border-radius:6px; border:1px solid #e2e8f0;">
                  <div style="display:flex; align-items:center; gap:0.45rem;">
                    <span class="role-code-badge role-code-${sp.role_code || (idx+1)}" style="width:22px; height:22px; font-size:0.7rem;">${sp.role_code || (idx+1)}</span>
                    <strong>${sp.name}</strong>
                  </div>
                  <div style="display:flex; align-items:center; gap:0.4rem;">
                    <code style="font-size:0.78rem; padding:0.15rem 0.45rem; background:#f1f5f9; border-radius:4px; font-family:monospace; color:#334155;">${sp.phone || '-'}</code>
                    ${getWhatsAppButton(sp.phone, sp.name)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Integrated 3-Minute Timer -->
      <div class="win-glass" id="timer-container" style="padding: 1.5rem; margin-bottom: 1.75rem; text-align: center;">
        <div class="timer-speaker-pill">
          <span>${window.i18n.t("speaker_indicator")}</span>
          <span id="timer-speaker-name">${window.debateTimer.currentSpeaker}</span>
        </div>

        <div class="timer-digits-container">
          <div class="timer-digits" id="timer-digits">03:00</div>
        </div>

        <div class="timer-progress-bar" style="margin: 0 auto 1.5rem;">
          <div class="timer-progress-fill" id="timer-progress-fill"></div>
        </div>

        <div class="timer-controls">
          <button class="btn btn-primary btn-lg" id="timer-start-btn" onclick="window.debateTimer.isRunning ? window.debateTimer.pause() : window.debateTimer.start()">
            ${window.i18n.t("start")}
          </button>
          <button class="btn btn-secondary btn-lg" onclick="window.debateTimer.reset()">
            ${window.i18n.t("reset")}
          </button>
          <button class="btn btn-secondary btn-lg" onclick="window.debateTimer.toggleFullscreen()">
            ${window.i18n.t("fullscreen")}
          </button>
        </div>

        <div class="timer-speaker-select">
          <button class="speaker-btn active" onclick="window.debateTimer.setSpeaker('Team 1 - Sp 1')">${m.team1_name}${m.team1_custom_name ? ` (${m.team1_custom_name})` : ''} Sp1</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('Team 2 - Sp 1')">${m.team2_name}${m.team2_custom_name ? ` (${m.team2_custom_name})` : ''} Sp1</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('Team 1 - Sp 2')">${m.team1_name}${m.team1_custom_name ? ` (${m.team1_custom_name})` : ''} Sp2</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('Team 2 - Sp 2')">${m.team2_name}${m.team2_custom_name ? ` (${m.team2_custom_name})` : ''} Sp2</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('Team 1 - Sp 3')">${m.team1_name}${m.team1_custom_name ? ` (${m.team1_custom_name})` : ''} Sp3</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('Team 2 - Sp 3')">${m.team2_name}${m.team2_custom_name ? ` (${m.team2_custom_name})` : ''} Sp3</button>
        </div>
      </div>

      <!-- Modern Excel-Style Spreadsheet -->
      <div id="adjudication-sheet-mount"></div>
    `;

    const scData = await window.api.get(`/api/scoring/scorecard/${assignRes.scorecard_id}`);
    window.sheet = new window.AdjudicationSpreadsheet("adjudication-sheet-mount");
    window.sheet.loadData(scData, m, assignRes.team1_speakers, assignRes.team2_speakers);
  }

  async markNotifRead(notifId) {
    await window.api.post(`/api/judging/notifications/${notifId}/read`, {});
    this.render();
  }

  // ==============================================
  // BRACKET ADMIN VIEW
  // ==============================================
  async renderBracketAdminView(container) {
    await this.loadBracket();
    const isLocked = this.tournamentData && this.tournamentData.status === "BRACKET_LOCKED";

    let html = `
      <div class="section-header">
        <div>
          <h2 class="section-title">${window.i18n.t("bracket_title")}</h2>
          <p class="section-desc">${window.i18n.t("bracket_desc")}</p>
        </div>
        <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;">
          ${!isLocked ? `
            <button class="btn btn-primary btn-sm" onclick="window.app.openManualBracketModal()" style="font-weight:800;" title="Manually configure match pairings">
              ${getSvg("edit", 14)} ${window.i18n.lang === 'bn' ? '✏️ ম্যানুয়ালি ব্র্যাকেট ইনপুট' : '✏️ Manual Bracket Input'}
            </button>
            <button class="btn btn-gold btn-sm" onclick="window.app.generateBracket('random')" style="font-weight:800;" title="Fair Randomized Draw">
              ${getSvg("shuffle", 14)} ${window.i18n.lang === 'bn' ? '🎲 লটারি র্যান্ডম ড্র (16 দল)' : '🎲 Random Draw (16 Teams)'}
            </button>
            <button class="btn btn-secondary btn-sm" onclick="window.app.generateBracket('balanced')" title="Balanced Draw based on strength">
              ${getSvg("bracket", 14)} ${window.i18n.lang === 'bn' ? 'ব্যালান্সড ড্র' : 'Balanced Draw'}
            </button>
            <button class="btn btn-success btn-sm" onclick="window.app.lockBracket()">
              ${getSvg("lock", 14)} ${window.i18n.t("lock_bracket")}
            </button>
          ` : `
            <span class="badge badge-green" style="font-size:0.8rem; padding:0.35rem 0.75rem;">
              ${getSvg("lock", 12)} ${window.i18n.t("bracket_locked_badge")}
            </span>
            <button class="btn btn-danger btn-sm" onclick="window.app.unlockBracket()">
              ${getSvg("lock", 12)} ${window.i18n.lang === 'bn' ? 'ব্র্যাকেট আনলক করুন' : 'Unlock Bracket'}
            </button>
          `}
        </div>
      </div>

      ${this.tournamentData && this.tournamentData.bracket_details ? `
        <div class="win-glass" style="padding: 0.95rem 1.25rem; margin-bottom: 1.5rem; border-left: 4px solid #000000; font-size: 0.85rem; background: #f8fafc;">
          <strong>${window.i18n.t("balance_report")}:</strong> ${this.tournamentData.bracket_details}
        </div>
      ` : ''}

      <div class="win-glass" style="padding: 1.25rem;">
        <div id="admin-bracket-mount"></div>
      </div>
    `;

    container.innerHTML = html;
    window.renderBracket("admin-bracket-mount", this.bracketData, true);
  }

  async generateBracket(mode = "random") {
    try {
      const res = await window.api.post("/api/tournament/bracket/generate", { mode });
      showToast(res.message, "success");
      await this.loadBracket();
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async lockBracket() {
    try {
      const res = await window.api.post("/api/tournament/bracket/lock", {});
      showToast(res.message, "success");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  // ==============================================
  // APPLICATIONS QUEUE VIEW
  // ==============================================
  async renderAdminApprovals(container, isSubtab = false) {
    const pendRes = await window.api.get("/api/members/applications/pending");
    const teamsRes = await window.api.get("/api/teams");
    const pendTeams = teamsRes.teams.filter(t => t.status === "PENDING_ADMIN_APPROVAL");

    let html = `
      ${!isSubtab ? `
        <div class="section-header">
          <div>
            <h2 class="section-title">${window.i18n.lang === 'bn' ? 'আবেদনের তালিকা' : 'Applications Queue'}</h2>
            <p class="section-desc">${window.i18n.lang === 'bn' ? 'নতুন দল ও ভূমিকা আবেদনের অনুমোদন বা বাতিল' : 'Review pending team registrations and participant role applications'}</p>
          </div>
        </div>
      ` : ''}

      <div class="win-glass" style="padding: 1.5rem; margin-bottom: 1.75rem;">
        <h3 style="font-size: 1.1rem; font-weight: 800; color:#000; margin-bottom: 1rem;">
          ${window.i18n.lang === 'bn' ? 'দলের অনুমোদনের আবেদন' : 'Pending Team Applications'} (${pendTeams.length})
        </h3>
        ${pendTeams.length === 0 ? `<p style="color:#64748b; font-size:0.85rem;">${window.i18n.lang === 'bn' ? 'কোনো দলের আবেদন অপেক্ষমান নেই।' : 'No pending team applications.'}</p>` : `
          <div class="win-table-container">
            <table class="win-table">
              <thead>
                <tr>
                  <th>${window.i18n.t("th_team1")}</th>
                  <th>${window.i18n.t("th_institution")}</th>
                  <th>${window.i18n.t("th_leader")}</th>
                  <th>${window.i18n.t("th_speakers")}</th>
                  <th>${window.i18n.t("th_actions")}</th>
                </tr>
              </thead>
              <tbody>
                ${pendTeams.map(t => `
                  <tr>
                    <td><span class="badge badge-gold" style="margin-right:0.4rem; font-size:0.75rem;">Team ${t.seed_number || 1}</span><strong>${t.name}</strong></td>
                    <td>${t.school_organization}</td>
                    <td>${t.leader_name}</td>
                    <td>${t.speaker1_name}, ${t.speaker2_name}, ${t.speaker3_name}</td>
                    <td>
                      <button class="btn btn-success btn-sm" onclick="window.app.approveTeam(${t.id})">${window.i18n.lang === 'bn' ? 'অনুমোদন' : 'Approve'}</button>
                      <button class="btn btn-danger btn-sm" onclick="window.app.rejectTeam(${t.id})">${window.i18n.lang === 'bn' ? 'বাতিল' : 'Reject'}</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>

      <div class="win-glass" style="padding: 1.5rem;">
        <h3 style="font-size: 1.1rem; font-weight: 800; color:#000; margin-bottom: 1rem;">
          ${window.i18n.lang === 'bn' ? 'ব্যক্তিগত ভূমিকা আবেদন' : 'Pending Participant Role Applications'} (${pendRes.pending_applications.length})
        </h3>
        ${pendRes.pending_applications.length === 0 ? `<p style="color:#64748b; font-size:0.85rem;">${window.i18n.lang === 'bn' ? 'কোনো ব্যক্তিগত ভূমিকা আবেদন অপেক্ষমান নেই।' : 'No pending role applications.'}</p>` : `
          <div class="win-table-container">
            <table class="win-table">
              <thead>
                <tr>
                  <th>${window.i18n.t("th_full_name")}</th>
                  <th>${window.i18n.t("th_username")}</th>
                  <th>${window.i18n.t("th_role")}</th>
                  <th>${window.i18n.t("th_institution")}</th>
                  <th>${window.i18n.t("th_actions")}</th>
                </tr>
              </thead>
              <tbody>
                ${pendRes.pending_applications.map(a => `
                  <tr>
                    <td><strong>${a.full_name}</strong></td>
                    <td><code>${a.whatsapp_number}</code></td>
                    <td><span class="badge badge-blue">${a.applied_role}</span></td>
                    <td>${a.school_organization || '-'}</td>
                    <td>
                      <button class="btn btn-success btn-sm" onclick="window.app.approveRole(${a.id})">${window.i18n.lang === 'bn' ? 'অনুমোদন' : 'Approve'}</button>
                      <button class="btn btn-danger btn-sm" onclick="window.app.rejectRole(${a.id})">${window.i18n.lang === 'bn' ? 'বাতিল' : 'Reject'}</button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    `;

    container.innerHTML = html;
  }

  async approveTeam(teamId) {
    try {
      await window.api.post("/api/teams/approve", { team_id: teamId, status: "APPROVED" });
      showToast(window.i18n.lang === 'bn' ? "দল অনুমোদিত হয়েছে।" : "Team approved!", "success");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async rejectTeam(teamId) {
    try {
      await window.api.post("/api/teams/approve", { team_id: teamId, status: "REJECTED" });
      showToast(window.i18n.lang === 'bn' ? "দল বাতিল করা হয়েছে।" : "Team rejected.", "info");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async approveRole(userId) {
    try {
      await window.api.post("/api/members/applications/approve", { user_id: userId, status: "APPROVED" });
      showToast(window.i18n.lang === 'bn' ? "ভূমিকা অনুমোদিত হয়েছে।" : "Role approved!", "success");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  async rejectRole(userId) {
    try {
      await window.api.post("/api/members/applications/reject", { user_id: userId, status: "REJECTED" });
      showToast(window.i18n.lang === 'bn' ? "ভূমিকা বাতিল হয়েছে।" : "Role rejected.", "info");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  // ==============================================
  // JUDGES & CLASHES MANAGEMENT
  // ==============================================
  async renderAdminJudges(container, isSubtab = false) {
    await this.loadBracket();
    const judgesRes = await window.api.get("/api/judging/judges");
    const judges = judgesRes.judges || [];
    const matches = this.bracketData ? this.bracketData.matches : [];

    let html = `
      ${!isSubtab ? `
        <div class="section-header">
          <div>
            <h2 class="section-title">${window.i18n.t("judges")}</h2>
            <p class="section-desc">${window.i18n.lang === 'bn' ? 'প্রতি ম্যাচে সর্বোচ্চ 3 জন বিচারক নির্ধারণ ও স্বার্থের দ্বন্দ্ব (Clash) পরীক্ষা' : 'Assign 1 to 3 adjudicators per match with conflict of interest detection'}</p>
          </div>
        </div>
      ` : ''}

      <div class="win-glass" style="padding: 1.25rem; margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.05rem; font-weight: 800; color:#000; margin-bottom: 0.85rem;">
          ${window.i18n.lang === 'bn' ? 'অনুমোদিত বিচারক তালিকা' : 'Approved Adjudicators List'} (${judges.length})
        </h3>
        <div style="display:flex; flex-wrap:wrap; gap:0.65rem;">
          ${judges.map(j => `
            <div style="background:#f8fafc; padding:0.65rem 1rem; border-radius:var(--radius-md); border:1px solid var(--border-card); display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
              <div>
                <div style="font-weight:700; color:#000;">${j.full_name}</div>
                <div style="font-size:0.75rem; color:#64748b;">${j.school_organization || '-'}</div>
              </div>
              <div style="display:flex; align-items:center; gap:0.45rem;">
                <code style="font-size:0.78rem; padding:0.15rem 0.45rem; background:#f1f5f9; border-radius:4px; font-family:monospace; color:#334155;">${j.whatsapp_number}</code>
                ${getWhatsAppButton(j.whatsapp_number, j.full_name)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="win-glass" style="padding: 1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom: 0.85rem;">
          <h3 style="font-size: 1.05rem; font-weight: 800; color:#000; margin:0;">${window.i18n.lang === 'bn' ? 'ম্যাচ বিচারক নির্ধারণ' : 'Match Adjudicator Assignments'}</h3>
          <div style="display:flex; gap:0.35rem; font-size:0.78rem;">
            <button class="btn btn-secondary btn-sm" onclick="window.app.filterJudgeRound('all')">${window.i18n.lang === 'bn' ? 'সকল রাউন্ড' : 'All Rounds'}</button>
            <button class="btn btn-secondary btn-sm" onclick="window.app.filterJudgeRound(1)">R16</button>
            <button class="btn btn-secondary btn-sm" onclick="window.app.filterJudgeRound(2)">QF</button>
            <button class="btn btn-secondary btn-sm" onclick="window.app.filterJudgeRound(3)">SF</button>
            <button class="btn btn-secondary btn-sm" onclick="window.app.filterJudgeRound(4)">Final</button>
          </div>
        </div>
        <div class="win-table-container">
          <table class="win-table">
            <thead>
              <tr>
                <th>${window.i18n.t("th_match")}</th>
                <th>${window.i18n.lang === 'bn' ? 'রাউন্ড' : 'Round'}</th>
                <th>${window.i18n.lang === 'bn' ? 'দলসমূহ' : 'Competing Teams'}</th>
                <th>${window.i18n.t("th_room")}</th>
                <th>${window.i18n.t("th_assigned_judges")}</th>
                <th>${window.i18n.t("th_actions")}</th>
              </tr>
            </thead>
            <tbody id="judge-matches-tbody">
              ${matches.map(m => {
                const rLabel = m.round_number === 1 ? 'R16' : (m.round_number === 2 ? 'QF' : (m.round_number === 3 ? 'SF' : 'Final'));
                return `
                <tr class="judge-match-row" data-round="${m.round_number}">
                  <td><strong>M${m.match_number}</strong></td>
                  <td><span class="badge ${m.round_number === 4 ? 'badge-gold' : (m.round_number === 3 ? 'badge-blue' : 'badge-neutral')}">${rLabel}</span></td>
                  <td>
                    <div><strong>${m.team1_name || 'TBD'}</strong> ${m.team1_custom_name ? `<span style="color:#047857; font-size:0.8rem; font-weight:700;">(${m.team1_custom_name})</span>` : ''}</div>
                    <div style="font-size:0.75rem; color:#64748b; font-weight:700;">vs</div>
                    <div><strong>${m.team2_name || 'TBD'}</strong> ${m.team2_custom_name ? `<span style="color:#047857; font-size:0.8rem; font-weight:700;">(${m.team2_custom_name})</span>` : ''}</div>
                  </td>
                  <td>${m.room_name || 'Room Alpha'}</td>
                  <td id="match-assigned-names-${m.id}">
                    <span style="font-size:0.82rem; color:#64748b;">Loading...</span>
                  </td>
                  <td>
                    <button class="btn btn-secondary btn-sm" onclick="window.app.openAssignJudgeModal(${m.id}, ${m.match_number}, '${(m.team1_name || 'Team 1').replace(/'/g, "\\'")}', '${(m.team2_name || 'Team 2').replace(/'/g, "\\'")}')">
                      ${getSvg("edit", 12)} ${window.i18n.lang === 'bn' ? 'বিচারক নির্ধারণ' : 'Assign Judges'}
                    </button>
                  </td>
                </tr>
              `}).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    container.innerHTML = html;

    matches.forEach(async m => {
      try {
        const aRes = await window.api.get(`/api/judging/assignments/${m.id}`);
        const names = aRes.assigned_judges.map(j => j.full_name).join(', ') || `<span style="color:#94a3b8">${window.i18n.lang === 'bn' ? 'কেউ নির্ধারিত নেই' : 'None assigned'}</span>`;
        const cell = document.getElementById(`match-assigned-names-${m.id}`);
        if (cell) cell.innerHTML = names;
      } catch(e) {}
    });
  }

  filterJudgeRound(round) {
    const rows = document.querySelectorAll('.judge-match-row');
    rows.forEach(r => {
      if (round === 'all' || r.getAttribute('data-round') === String(round)) {
        r.style.display = '';
      } else {
        r.style.display = 'none';
      }
    });
  }

  async openAssignJudgeModal(matchId, matchNum, team1Name, team2Name) {
    const judgesRes = await window.api.get("/api/judging/judges");
    const allJudges = judgesRes.judges || [];

    const aRes = await window.api.get(`/api/judging/assignments/${matchId}`);
    const assignedIds = new Set(aRes.assigned_judges.map(j => j.id));

    let modalHtml = `
      <div class="modal-backdrop" id="assign-judge-modal">
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 class="modal-title">${getSvg("scale", 16)} ${window.i18n.t("select_judges_title")} ${matchNum}</h3>
            <button style="background:none;border:none;color:#000;font-size:1.5rem;cursor:pointer;" onclick="document.getElementById('assign-judge-modal').remove()">x</button>
          </div>
          <div class="modal-body">
            <p style="font-size:0.85rem; color:#475569; margin-bottom:1rem;">
              ${window.i18n.t("th_match")}: <strong>${team1Name}</strong> vs <strong>${team2Name}</strong>.<br />
              <strong>${window.i18n.t("max_3_judges_desc")}</strong>
            </p>

            <div style="display:flex; flex-direction:column; gap:0.5rem; max-height:280px; overflow-y:auto; padding-right:0.35rem;">
              ${allJudges.map(j => `
                <label style="display:flex; align-items:center; justify-content:space-between; background:#f8fafc; padding:0.65rem 0.95rem; border-radius:var(--radius-md); border:1px solid var(--border-card); cursor:pointer;">
                  <div>
                    <div style="font-weight:700; color:#000;">${j.full_name}</div>
                    <div style="font-size:0.75rem; color:#64748b;">${j.school_organization}</div>
                  </div>
                  <input type="checkbox" class="judge-select-checkbox" value="${j.id}" ${assignedIds.has(j.id) ? 'checked' : ''} onchange="window.app.limitJudgeSelection(this)" />
                </label>
              `).join('')}
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="document.getElementById('assign-judge-modal').remove()">${window.i18n.t("cancel")}</button>
            <button class="btn btn-primary" onclick="window.app.submitJudgeAssignment(${matchId})">${window.i18n.t("save_and_notify_judges")}</button>
          </div>
        </div>
      </div>
    `;

    const div = document.createElement("div");
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);
  }

  limitJudgeSelection(checkbox) {
    const checked = document.querySelectorAll(".judge-select-checkbox:checked");
    if (checked.length > 3) {
      checkbox.checked = false;
      showToast(window.i18n.lang === 'bn' ? "একটি ম্যাচে সর্বোচ্চ 3 জন বিচারক নির্বাচন করা যাবে।" : "Maximum 3 judges can be assigned.", "error");
    }
  }

  async submitJudgeAssignment(matchId) {
    const checked = Array.from(document.querySelectorAll(".judge-select-checkbox:checked")).map(cb => parseInt(cb.value));
    if (checked.length < 1 || checked.length > 3) {
      showToast(window.i18n.lang === 'bn' ? "অনুগ্রহ করে 1 থেকে 3 জন বিচারক নির্বাচন করুন।" : "Please select between 1 and 3 judges.", "error");
      return;
    }

    try {
      const clashRes = await window.api.post("/api/judging/check-clashes", {
        match_id: matchId,
        judge_ids: checked
      });

      let override = false;
      if (clashRes.has_clashes) {
        const warningTitle = window.i18n.lang === 'bn' ? "স্বার্থের দ্বন্দ্ব সতর্কতা!" : "Conflict of Interest Warning!";
        const proceedMsg = window.i18n.lang === 'bn' ? "\nআপনি কি এরপরও নিশ্চিত করতে চান?" : "\nDo you want to override and proceed anyway?";
        const proceed = confirm(`${warningTitle}\n${clashRes.clashes.map(c => c.reason).join('\n')}${proceedMsg}`);
        if (!proceed) return;
        override = true;
      }

      const res = await window.api.post("/api/judging/assign", {
        match_id: matchId,
        judge_ids: checked,
        override_clashes: override
      });

      document.getElementById("assign-judge-modal")?.remove();
      showToast(res.message, "success");
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  // ==============================================
  // MOTIONS & ROUNDS VIEW
  // ==============================================
  async renderAdminMotions(container) {
    const roundsRes = await window.api.get("/api/tournament/rounds");
    const rounds = roundsRes.rounds;

    let html = `
      <div class="section-header">
        <div>
          <h2 class="section-title">${window.i18n.t("rounds")}</h2>
          <p class="section-desc">${window.i18n.lang === 'bn' ? 'প্রতিটি নকআউট পর্বের জন্য বিষয় নির্ধারণ' : 'Configure English and বাংলা debate motions per knockout stage'}</p>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        ${rounds.map(r => `
          <div class="win-glass" style="padding: 1.5rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
              <h3 style="font-size:1.15rem; font-weight:800; color:#000;">${r.name} (${r.name_bn})</h3>
              <span class="badge badge-blue">${r.status}</span>
            </div>

            <div class="form-group">
              <label class="form-label">${window.i18n.lang === 'bn' ? 'ইংরেজি বিষয় (Motion in English)' : 'Motion in English'}</label>
              <textarea id="motion-en-${r.round_number}" class="form-textarea" rows="2">${r.motion_en || ''}</textarea>
            </div>

            <div class="form-group">
              <label class="form-label">${window.i18n.lang === 'bn' ? 'বাংলা বিষয় (Motion in বাংলা)' : 'Motion in বাংলা'}</label>
              <textarea id="motion-bn-${r.round_number}" class="form-textarea" rows="2">${r.motion_bn || ''}</textarea>
            </div>

            <button class="btn btn-primary btn-sm" onclick="window.app.saveRoundMotion(${r.round_number})">
              ${window.i18n.t("save")}
            </button>
          </div>
        `).join('')}
      </div>
    `;

    container.innerHTML = html;
  }

  async saveRoundMotion(rNum) {
    const mEn = document.getElementById(`motion-en-${rNum}`).value.trim();
    const mBn = document.getElementById(`motion-bn-${rNum}`).value.trim();

    try {
      await window.api.put(`/api/tournament/rounds/${rNum}`, {
        motion_en: mEn,
        motion_bn: mBn
      });
      showToast(window.i18n.lang === 'bn' ? `রাউন্ড ${rNum} এর বিষয় সংরক্ষিত হয়েছে।` : `Motion for Round ${rNum} updated.`, "success");
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  // ==============================================
  // STANDALONE TIMER VIEW
  // ==============================================
  renderStandaloneTimer(container) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    container.innerHTML = `
      <div class="section-header">
        <div>
          <h2 class="section-title">${window.i18n.t("timer_title")}</h2>
          <p class="section-desc">${window.i18n.t("timer_desc")}</p>
        </div>
        <div style="display:flex; gap:0.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="window.debateAudio.testAudio()">
            ${getSvg("bell", 14)} Test Bell
          </button>
        </div>
      </div>

      <div class="win-glass" id="timer-container" style="padding: 2.25rem 2rem; max-width: 680px; margin: 1.5rem auto; text-align: center;">
        <div style="display: flex; justify-content: center; align-items: center; gap: 0.6rem; margin-bottom: 1.25rem;">
          ${getHghsdcLogo(28)}
          <span class="brand-badge">HGHSDC • DEBATE TIMER</span>
        </div>

        <div class="timer-speaker-pill">
          <span>${window.i18n.t("speaker_indicator")}</span>
          <span id="timer-speaker-name">${window.debateTimer.currentSpeaker}</span>
        </div>

        <!-- Timer Digits Display -->
        <div class="timer-digits-container">
          <div class="timer-digits" id="timer-digits">03:00</div>
        </div>

        <!-- Progress Bar -->
        <div class="timer-progress-bar" style="margin: 0 auto 1.5rem;">
          <div class="timer-progress-fill" id="timer-progress-fill"></div>
        </div>

        <!-- Main Timer Controls -->
        <div class="timer-controls" style="margin-bottom: 1.75rem;">
          <button class="btn btn-primary btn-lg" id="timer-start-btn" onclick="window.debateTimer.isRunning ? window.debateTimer.pause() : window.debateTimer.start()">
            ${window.i18n.t("start")}
          </button>
          <button class="btn btn-secondary btn-lg" onclick="window.debateTimer.reset()">
            ${window.i18n.t("reset")}
          </button>
          <button class="btn btn-secondary btn-lg" onclick="window.debateTimer.toggleFullscreen()">
            ${window.i18n.t("fullscreen")}
          </button>
        </div>

        <!-- Custom Timer Duration Adjuster (Mobile & Desktop Friendly) -->
        <div style="background: #f8fafc; border: 1px solid var(--border-card); border-radius: var(--radius-lg); padding: 1.15rem; margin-bottom: 1.5rem;">
          <span style="font-size: 0.76rem; font-weight: 800; color: #475569; text-transform: uppercase; letter-spacing: 0.06em; display: block; margin-bottom: 0.65rem;">
            ${isBn ? '⏱ কাস্টম টাইমার সময় নির্ধারণ (Custom Duration):' : '⏱ Set Custom Duration:'}
          </span>
          <div style="display: flex; justify-content: center; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
            <button class="btn btn-secondary btn-sm" onclick="window.app.setTimerDuration(1, 0)">1 Min</button>
            <button class="btn btn-secondary btn-sm" onclick="window.app.setTimerDuration(3, 0)">3 Min (Standard)</button>
            <button class="btn btn-secondary btn-sm" onclick="window.app.setTimerDuration(4, 0)">4 Min</button>
            <button class="btn btn-secondary btn-sm" onclick="window.app.setTimerDuration(5, 0)">5 Min</button>
          </div>
          <div style="display: flex; justify-content: center; align-items: center; gap: 0.65rem;">
            <label style="font-size:0.82rem; font-weight:700;">Min:</label>
            <input type="number" id="custom-timer-min" min="0" max="60" value="3" style="width:60px; text-align:center;" class="form-input" />
            <label style="font-size:0.82rem; font-weight:700;">Sec:</label>
            <input type="number" id="custom-timer-sec" min="0" max="59" value="0" style="width:60px; text-align:center;" class="form-input" />
            <button class="btn btn-secondary btn-sm" onclick="window.app.applyCustomTimerFromInputs()">
              Set
            </button>
          </div>
        </div>

        <!-- Tactile 3D Debate Bell (Touch & Mouse & Dash Key) -->
        <div class="manual-bell-container">
          <button id="manual-bell-btn" class="manual-bell-btn"
                  onpointerdown="window.debateTimer.onBellPointerDown(event)"
                  onpointerup="window.debateTimer.onBellPointerUp(event)"
                  title="Click/Tap to Ring Bell. Hold for continuous ringing.">
            <svg class="manual-bell-icon" viewBox="0 0 24 24">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
            <span style="font-size: 0.76rem; font-weight: 900; margin-top: 0.25rem;">RING BELL</span>
          </button>
          <div class="manual-bell-hint">
            ${isBn ? '🔔 ট্যাপ করুন = 1 বেল | ডাবল ট্যাপ = 2 বেল | চেপে ধরলে অনবরত বাজবে<br>💻 কীবোর্ডের <strong>Space (স্পেসবার)</strong> বাটন চেপেও বেল বাজাতে বা বাজিয়ে রাখতে পারবেন (Enter = শুরু/বিরতি)' : '🔔 Tap = 1 Ding | Double Tap = 2 Dings | Hold = Continuous Ringing<br>💻 You can also press or hold the <strong>Space</strong> key on your keyboard (Enter = Start/Pause)'}
          </div>
        </div>
      </div>
    `;
    window.debateTimer.updateUI();
  }

  setTimerDuration(m, s) {
    window.debateTimer.setCustomTime(m, s);
    const minEl = document.getElementById("custom-timer-min");
    const secEl = document.getElementById("custom-timer-sec");
    if (minEl) minEl.value = m;
    if (secEl) secEl.value = s;
  }

  applyCustomTimerFromInputs() {
    const minEl = document.getElementById("custom-timer-min");
    const secEl = document.getElementById("custom-timer-sec");
    const m = minEl ? parseInt(minEl.value) : 3;
    const s = secEl ? parseInt(secEl.value) : 0;
    window.debateTimer.setCustomTime(m, s);
  }

  async renderAuditLogs(container) {
    const res = await window.api.get("/api/audit");
    const logs = res.audit_logs;

    let html = `
      <div class="section-header">
        <div>
          <h2 class="section-title">${window.i18n.t("audit_log")}</h2>
          <p class="section-desc">${window.i18n.lang === 'bn' ? 'প্রশাসনিক সকল কর্মকাণ্ডের ধারাবাহিক রেকর্ড' : 'Immutable chronological record of tournament administrative operations'}</p>
        </div>
      </div>

      <div class="win-glass" style="padding: 1.25rem;">
        <div class="win-table-container">
          <table class="win-table">
            <thead>
              <tr>
                <th>${window.i18n.t("th_timestamp")}</th>
                <th>${window.i18n.t("th_actor")}</th>
                <th>${window.i18n.t("th_action")}</th>
                <th>${window.i18n.t("th_item")}</th>
                <th>${window.i18n.t("th_details")}</th>
                <th>${window.i18n.lang === 'bn' ? 'পূর্বাবস্থা (Undo)' : 'Undo Action'}</th>
              </tr>
            </thead>
            <tbody>
              ${logs.map(l => `
                <tr style="${l.is_undone ? 'opacity:0.6; text-decoration:line-through;' : ''}">
                  <td style="color:#64748b; font-size:0.78rem;">${l.timestamp.slice(0, 19).replace('T', ' ')}</td>
                  <td><strong>${l.actor_name}</strong></td>
                  <td><span class="badge ${l.is_undone ? 'badge-amber' : 'badge-blue'}">${l.action}</span></td>
                  <td>${l.object_type} #${l.object_id}</td>
                  <td style="color:#334155; font-size:0.82rem;">${l.details || '-'}</td>
                  <td>
                    ${l.is_undone ? `
                      <span class="badge badge-amber">${window.i18n.lang === 'bn' ? 'বাতিলকৃত' : 'Undone'}</span>
                    ` : (l.action === 'UNDO_ACTION' ? '-' : `
                      <button class="btn btn-secondary btn-sm" style="color:#dc2626; border-color:#fecaca;" onclick="window.app.undoAuditLog(${l.id}, '${l.action}')">
                        ${getSvg("trash", 12)} Undo
                      </button>
                    `)}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    container.innerHTML = html;
  }


  async undoAuditLog(logId, actionName) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const confirmMsg = isBn ? 
      `আপনি কি নিশ্চিত যে এই অ্যাকশনটি ('${actionName}') বাতিল করে পূর্বাবস্থায় ফিরিয়ে নিতে চান?` :
      `Are you sure you want to undo and revert this action: '${actionName}'?`;
    if (!confirm(confirmMsg)) return;

    try {
      const res = await window.api.post(`/api/audit/${logId}/undo`, {});
      showToast(res.message || (isBn ? "সফলভাবে পূর্বাবস্থায় ফিরিয়ে নেওয়া হয়েছে।" : "Action undone successfully."), "success");
      await this.loadBracket();
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }

  onMatchCardClick(matchId, matchNum) {
    if (this.currentUser && this.currentUser.role === "ADMIN") {
      this.openMatchReviewModal(matchId);
    }
  }

  // ==========================================================================
  // SENIOR SEGMENT (CLASS 10 MASTER ROUND) — FULL UNIFIED DEBATE WORKSPACE
  // ==========================================================================
  async renderSeniorSegment(container) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const isAdmin = this.currentUser && this.currentUser.role === 'ADMIN';

    let data = { senior: null };
    try {
      data = await window.api.get('/api/senior/status');
    } catch (e) {
      console.warn("Could not load senior status:", e);
    }

    const s = data.senior || {
      title: "Class 10 Master Championship",
      title_bn: "10ম শ্রেণি একক মাস্টার্স রাউন্ড",
      team1_name: "Class 10 Master Team Alpha",
      team2_name: "Class 10 Master Team Beta",
      team1_speaker1: "Master Debater 1",
      team1_speaker2: "Master Debater 2",
      team1_speaker3: "Master Debater 3",
      team2_speaker1: "Master Debater 4",
      team2_speaker2: "Master Debater 5",
      team2_speaker3: "Master Debater 6",
      motion_en: "This House believes that experienced senior debaters should steer community leadership.",
      motion_bn: "এই সংসদ বিশ্বাস করে যে অভিজ্ঞ সিনিয়র বিতার্কিকদের সমাজের নেতৃত্ব দেওয়া উচিত।",
      room_name: "Central Auditorium",
      status: "SCHEDULED",
      team1_score: 0,
      team2_score: 0,
      winner_team: "",
      is_published: 0
    };

    const curUserId = this.currentUser ? this.currentUser.id : null;
    const isT1Leader = Boolean(curUserId && (curUserId === s.team1_leader_id || data.can_edit_team1));
    const isT2Leader = Boolean(curUserId && (curUserId === s.team2_leader_id || data.can_edit_team2));
    const canConfigure = isAdmin || isT1Leader || isT2Leader || data.can_configure;

    const winnerDeclared = (s.winner_team || s.winner_name) && (s.status === 'PUBLISHED' || s.is_published);

    const t1List = s.team1_speakers_list || [
      { id: 8011, position: 1, name: s.team1_speaker1 || "Speaker 1", phone: s.team1_speaker1_phone || "", role_code: "1" },
      { id: 8012, position: 2, name: s.team1_speaker2 || "Speaker 2", phone: s.team1_speaker2_phone || "", role_code: "2" },
      { id: 8013, position: 3, name: s.team1_speaker3 || "Speaker 3", phone: s.team1_speaker3_phone || "", role_code: "3" }
    ];
    const t2List = s.team2_speakers_list || [
      { id: 8021, position: 1, name: s.team2_speaker1 || "Speaker 1", phone: s.team2_speaker1_phone || "", role_code: "1" },
      { id: 8022, position: 2, name: s.team2_speaker2 || "Speaker 2", phone: s.team2_speaker2_phone || "", role_code: "2" },
      { id: 8023, position: 3, name: s.team2_speaker3 || "Speaker 3", phone: s.team2_speaker3_phone || "", role_code: "3" }
    ];

    let html = `
      ${winnerDeclared ? `
        <div class="hero-championship-card" style="margin-bottom: 1.5rem; background: linear-gradient(135deg, #091224 0%, #1e293b 100%); border: 2px solid #fbbf24; box-shadow: 0 10px 25px rgba(251,191,36,0.25);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div style="display: flex; align-items: center; gap: 1rem;">
              <span style="font-size: 2.5rem; filter: drop-shadow(0 2px 8px rgba(251,191,36,0.5));">🏆</span>
              <div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                  <span class="badge badge-gold" style="font-weight: 900; letter-spacing: 0.05em;">${isBn ? '10ম শ্রেণি সিনিয়র মাস্টার্স বিজয়ী' : 'CLASS 10 SENIOR CHAMPION'}</span>
                  <span class="badge badge-green">${isBn ? 'ফলাফল প্রকাশিত' : 'OFFICIAL PUBLISHED'}</span>
                </div>
                <h2 style="font-size: 1.55rem; font-weight: 900; color: #fbbf24; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
                  ${s.winner_team || s.winner_name}
                </h2>
                <div style="font-size: 0.88rem; color: #cbd5e1; margin-top: 0.35rem; display:flex; gap:1.25rem;">
                  <span>${s.team1_name}: <strong style="color:#60a5fa;">${s.team1_score || 0}</strong></span>
                  <span>${s.team2_name}: <strong style="color:#34d399;">${s.team2_score || 0}</strong></span>
                </div>
              </div>
            </div>
            <button class="btn btn-gold" onclick="window.app.triggerCelebration('${(s.winner_team || s.winner_name).replace(/'/g, "\\'")}', ${s.team1_score || 0}, ${s.team2_score || 0}, 'Class 10 Senior Master Championship')">
              🎉 ${isBn ? 'চ্যাম্পিয়ন উদযাপন' : 'Celebrate Winner'}
            </button>
          </div>
        </div>
      ` : ''}

      <div class="section-header">
        <div>
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
            <span class="badge badge-gold" style="font-weight:800;">🎓 ${isBn ? '10ম শ্রেণি সিনিয়র মাস্টার্স' : 'CLASS 10 SENIOR MASTERS'}</span>
            <span class="badge ${s.status === 'PUBLISHED' ? 'badge-green' : (s.status === 'COMPLETED' ? 'badge-blue' : 'badge-amber')}">${s.status || 'SCHEDULED'}</span>
          </div>
          <h2 class="section-title">${isBn ? (s.title_bn || '10ম শ্রেণি একক মাস্টার্স রাউন্ড') : (s.title || 'Class 10 Master Championship')}</h2>
          <p class="section-desc">${s.room_name || 'Central Auditorium'} • ${isBn ? '10ম শ্রেণির নির্বাচিত মাস্টার বিতার্কিকদের শীর্ষ ম্যাচ' : 'Premier debate round for Class 10'}</p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm" onclick="window.debateAudio.testAudio()">
            ${getSvg("bell", 14)} ${window.i18n.t("test_audio")}
          </button>
          ${canConfigure ? `
            <button class="btn btn-primary btn-sm" onclick="window.app.openSeniorConfigModal()">
              ${getSvg("users", 14)} ${isBn ? 'দল কনফিগারেশন' : 'Configure Teams'}
            </button>
          ` : ''}
          ${isAdmin ? `
            <button class="btn btn-subtle btn-sm" onclick="window.app.editSeniorMotion()">
              ${getSvg("edit", 14)} ${isBn ? 'বিষয় সম্পাদনা' : 'Edit Motion'}
            </button>
            <button class="btn btn-danger btn-sm" onclick="window.app.resetSeniorSegment()">
              ${getSvg("trash", 14)} ${isBn ? 'রিসেট' : 'Reset'}
            </button>
          ` : ''}
        </div>
      </div>

      <!-- Motion Card -->
      <div class="win-glass" style="padding: 1.15rem 1.4rem; margin-bottom: 1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size: 0.75rem; font-weight: 800; color: #0369a1; text-transform: uppercase; letter-spacing: 0.08em;">
            ${window.i18n.t("motion")}
          </span>
          <span style="font-size: 0.75rem; color: #64748b; font-weight:700;">📍 ${s.room_name || 'Central Auditorium'}</span>
        </div>
        <div style="font-size: 1.1rem; font-weight: 800; color:#000; margin-top: 0.35rem;">
          ${isBn ? (s.motion_bn || s.motion_en || s.motion) : (s.motion_en || s.motion || 'This House believes that experienced senior debaters should steer community leadership.')}
        </div>
        ${(isBn && s.motion_en) ? `<div style="font-size: 0.92rem; color: #334155; font-weight:600; margin-top: 0.25rem;">${s.motion_en}</div>` : ''}
      </div>

      <!-- Senior Official Adjudicators WhatsApp Panel -->
      <div class="win-glass" style="padding: 1.15rem 1.4rem; margin-bottom: 1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; border-bottom:1px solid var(--border-card); padding-bottom:0.45rem;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span style="font-size:1.15rem;">⚖️</span>
            <strong style="font-size:0.86rem; color:var(--brand-navy);">${isBn ? '10ম শ্রেণি সিনিয়র বিচারকমণ্ডলীর প্যানেল ও হোয়াটসঅ্যাপ' : 'Class 10 Senior Adjudicators Panel & WhatsApp'}</strong>
          </div>
          <span style="font-size:0.74rem; color:#64748b;">${isBn ? 'অফিসিয়াল বিচারকমণ্ডলী' : 'Official Registered Adjudicators'}</span>
        </div>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:1rem;">
          <!-- Chief Adjudicator -->
          <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:var(--radius-md); padding:0.75rem 0.95rem; border-left:4px solid #f59e0b;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
              <span class="badge badge-gold" style="font-size:0.68rem; font-weight:800;">⚖️ ${isBn ? 'প্রধান বিচারক' : 'Chief Adjudicator'}</span>
              ${s.chief_judge?.whatsapp_number ? getWhatsAppButton(s.chief_judge.whatsapp_number, s.chief_judge.full_name) : (getWhatsAppButton('01710000007', 'Tanvir Judge'))}
            </div>
            <div style="font-size:0.9rem; font-weight:800; color:var(--brand-navy);">
              ${s.chief_judge?.full_name || (isBn ? 'তানভীর আহমেদ' : 'Tanvir Ahmed')}
            </div>
            <div style="display:flex; align-items:center; gap:0.4rem; font-size:0.76rem; color:#64748b; margin-top:0.25rem;">
              ${s.chief_judge?.username ? `<span>@${s.chief_judge.username}</span> • ` : ''}
              <code>${s.chief_judge?.whatsapp_number || '01710000007'}</code>
            </div>
          </div>

          <!-- Panel Judge 1 -->
          ${(() => {
            const pj1 = (s.panel_judges && s.panel_judges[0]) || null;
            const pj1Name = pj1 ? pj1.full_name : (isBn ? 'ফাহিম মোর্শেদ' : 'Fahim Morshed');
            const pj1Phone = pj1 ? pj1.whatsapp_number : '01710000008';
            const pj1User = pj1 ? pj1.username : 'fahim_judge';
            return `
              <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:var(--radius-md); padding:0.75rem 0.95rem; border-left:4px solid #6366f1;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
                  <span class="badge badge-blue" style="font-size:0.68rem; font-weight:800;">${isBn ? 'প্যানেল বিচারক 1' : 'Panel Judge 1'}</span>
                  ${getWhatsAppButton(pj1Phone, pj1Name)}
                </div>
                <div style="font-size:0.9rem; font-weight:800; color:var(--brand-navy);">
                  ${pj1Name}
                </div>
                <div style="display:flex; align-items:center; gap:0.4rem; font-size:0.76rem; color:#64748b; margin-top:0.25rem;">
                  ${pj1User ? `<span>@${pj1User}</span> • ` : ''}
                  <code>${pj1Phone}</code>
                </div>
              </div>
            `;
          })()}

          <!-- Panel Judge 2 -->
          ${(() => {
            const pj2 = (s.panel_judges && s.panel_judges[1]) || null;
            const pj2Name = pj2 ? pj2.full_name : (isBn ? 'তাসনিম জাহান' : 'Tasnim Jahan');
            const pj2Phone = pj2 ? pj2.whatsapp_number : '01710000009';
            const pj2User = pj2 ? pj2.username : 'tasnim_judge';
            return `
              <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:var(--radius-md); padding:0.75rem 0.95rem; border-left:4px solid #8b5cf6;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
                  <span class="badge badge-purple" style="font-size:0.68rem; font-weight:800;">${isBn ? 'প্যানেল বিচারক 2' : 'Panel Judge 2'}</span>
                  ${getWhatsAppButton(pj2Phone, pj2Name)}
                </div>
                <div style="font-size:0.9rem; font-weight:800; color:var(--brand-navy);">
                  ${pj2Name}
                </div>
                <div style="display:flex; align-items:center; gap:0.4rem; font-size:0.76rem; color:#64748b; margin-top:0.25rem;">
                  ${pj2User ? `<span>@${pj2User}</span> • ` : ''}
                  <code>${pj2Phone}</code>
                </div>
              </div>
            `;
          })()}
        </div>
      </div>

      <!-- Debater Direct WhatsApp Directory for Class 10 -->
      <div class="win-glass" style="padding: 1.15rem 1.4rem; margin-bottom: 1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; border-bottom:1px solid var(--border-card); padding-bottom:0.45rem;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="${WHATSAPP_SVG_PATH}"/></svg>
            <strong style="font-size:0.86rem; color:var(--brand-navy);">${isBn ? '10ম শ্রেণির বিতার্কিকদের সরাসরি হোয়াটসঅ্যাপ সংযোগ ও প্রোফাইল' : 'Class 10 Debater WhatsApp & Profile Directory'}</strong>
          </div>
          <span style="font-size:0.74rem; color:#64748b;">${isBn ? 'যোগাযোগ করতে আইকনে চাপ দিন' : 'Click icon to message directly on WhatsApp'}</span>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.25rem;">
          <!-- Team 1 -->
          <div style="background:#f8fafc; border:1px solid var(--border-card); border-radius:var(--radius-md); padding:0.85rem 1rem; border-left:4px solid #2563eb;">
            <div style="font-size:0.88rem; font-weight:800; color:#2563eb; margin-bottom:0.35rem; display:flex; justify-content:space-between; align-items:center;">
              <span>${s.team1_name} (${isBn ? 'সরকারি দল' : 'Proposition'})</span>
              ${s.team1_leader ? `<span style="font-size:0.72rem; color:#1e40af; background:#dbeafe; padding:1px 6px; border-radius:4px;">👑 ${s.team1_leader.full_name || ''}</span>` : ''}
            </div>
            <div style="display:flex; flex-direction:column; gap:0.45rem; margin-top:0.5rem;">
              ${t1List.map((sp, idx) => `
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; padding:0.3rem 0; ${idx < 2 ? 'border-bottom:1px dashed #e2e8f0;' : ''}">
                  <span style="display:flex; align-items:center; gap:0.4rem;">
                    <span class="role-code-badge role-code-${sp.role_code || (idx+1)}" style="width:20px; height:20px; font-size:0.7rem;">${sp.role_code || (idx+1)}</span>
                    <strong>${sp.name}</strong>
                    ${sp.username ? `<span style="color:#64748b; font-size:0.75rem;">@${sp.username}</span>` : ''}
                    ${idx === 0 ? `<span class="badge badge-blue" style="font-size:0.65rem; padding:1px 5px;">${isBn ? 'দলনেতা' : 'Leader'}</span>` : ''}
                  </span>
                  <div style="display:flex; align-items:center; gap:0.4rem;">
                    ${sp.phone ? `<code style="font-size:0.75rem; padding:1px 4px; background:#e2e8f0; border-radius:3px;">${sp.phone}</code>` : ''}
                    ${getWhatsAppButton(sp.phone || "", sp.name)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Team 2 -->
          <div style="background:#f8fafc; border:1px solid var(--border-card); border-radius:var(--radius-md); padding:0.85rem 1rem; border-left:4px solid #059669;">
            <div style="font-size:0.88rem; font-weight:800; color:#059669; margin-bottom:0.35rem; display:flex; justify-content:space-between; align-items:center;">
              <span>${s.team2_name} (${isBn ? 'বিরোধী দল' : 'Opposition'})</span>
              ${s.team2_leader ? `<span style="font-size:0.72rem; color:#065f46; background:#d1fae5; padding:1px 6px; border-radius:4px;">👑 ${s.team2_leader.full_name || ''}</span>` : ''}
            </div>
            <div style="display:flex; flex-direction:column; gap:0.45rem; margin-top:0.5rem;">
              ${t2List.map((sp, idx) => `
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; padding:0.3rem 0; ${idx < 2 ? 'border-bottom:1px dashed #e2e8f0;' : ''}">
                  <span style="display:flex; align-items:center; gap:0.4rem;">
                    <span class="role-code-badge role-code-${sp.role_code || (idx+1)}" style="width:20px; height:20px; font-size:0.7rem;">${sp.role_code || (idx+1)}</span>
                    <strong>${sp.name}</strong>
                    ${sp.username ? `<span style="color:#64748b; font-size:0.75rem;">@${sp.username}</span>` : ''}
                    ${idx === 0 ? `<span class="badge badge-green" style="font-size:0.65rem; padding:1px 5px;">${isBn ? 'দলনেতা' : 'Leader'}</span>` : ''}
                  </span>
                  <div style="display:flex; align-items:center; gap:0.4rem;">
                    ${sp.phone ? `<code style="font-size:0.75rem; padding:1px 4px; background:#e2e8f0; border-radius:3px;">${sp.phone}</code>` : ''}
                    ${getWhatsAppButton(sp.phone || "", sp.name)}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Integrated Official 3-Minute Speech Timer -->
      <div class="win-glass" id="timer-container" style="padding: 1.5rem; margin-bottom: 1.75rem; text-align: center;">
        <div class="timer-speaker-pill">
          <span>${window.i18n.t("speaker_indicator")}</span>
          <span id="timer-speaker-name">${s.team1_name} - Sp 1</span>
        </div>

        <div class="timer-digits-container">
          <div class="timer-digits" id="timer-digits">03:00</div>
        </div>

        <div class="timer-progress-bar" style="margin: 0 auto 1.5rem;">
          <div class="timer-progress-fill" id="timer-progress-fill"></div>
        </div>

        <div class="timer-controls">
          <button class="btn btn-primary btn-lg" id="timer-start-btn" onclick="window.debateTimer.isRunning ? window.debateTimer.pause() : window.debateTimer.start()">
            ${window.i18n.t("start")}
          </button>
          <button class="btn btn-secondary btn-lg" onclick="window.debateTimer.reset()">
            ${window.i18n.t("reset")}
          </button>
          <button class="btn btn-secondary btn-lg" onclick="window.debateTimer.toggleFullscreen()">
            ${window.i18n.t("fullscreen")}
          </button>
        </div>

        <div class="timer-speaker-select">
          <button class="speaker-btn active" onclick="window.debateTimer.setSpeaker('${s.team1_name.replace(/'/g, "\\\'")} - Sp 1')">${s.team1_name} Sp1</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${s.team2_name.replace(/'/g, "\\\'")} - Sp 1')">${s.team2_name} Sp1</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${s.team1_name.replace(/'/g, "\\\'")} - Sp 2')">${s.team1_name} Sp2</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${s.team2_name.replace(/'/g, "\\\'")} - Sp 2')">${s.team2_name} Sp2</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${s.team1_name.replace(/'/g, "\\\'")} - Sp 3')">${s.team1_name} Sp3</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${s.team2_name.replace(/'/g, "\\\'")} - Sp 3')">${s.team2_name} Sp3</button>
        </div>
      </div>

      <!-- Modern Excel-Style Adjudication Spreadsheet Mount -->
      <div id="senior-sheet-mount"></div>
    `;

    container.innerHTML = html;

    const seniorMatch = {
      id: 8888,
      round_name: isBn ? "10ম শ্রেণি মাস্টার্স ফাইনাল" : "Class 10 Masters Championship",
      room_name: s.room_name || "Central Auditorium",
      team1_id: 801,
      team1_name: s.team1_name || "Class 10 Team Alpha",
      team1_custom_name: s.team1_name || "",
      team1_seed: 1,
      team1_status: "APPROVED",
      team2_id: 802,
      team2_name: s.team2_name || "Class 10 Team Beta",
      team2_custom_name: s.team2_name || "",
      team2_seed: 2,
      team2_status: "APPROVED",
      motion_en: s.motion_en || "This House believes that experienced senior debaters should steer community leadership.",
      motion_bn: s.motion_bn || "এই সংসদ বিশ্বাস করে যে অভিজ্ঞ সিনিয়র বিতার্কিকদের সমাজের নেতৃত্ব দেওয়া উচিত।"
    };

    const t1Speakers = t1List.map((sp, idx) => ({
      id: sp.id || (8011 + idx),
      position: idx + 1,
      name: sp.name,
      role_code: sp.role_code || `${idx + 1}`,
      phone: sp.phone || sp.whatsapp_number || ""
    }));

    const t2Speakers = t2List.map((sp, idx) => ({
      id: sp.id || (8021 + idx),
      position: idx + 1,
      name: sp.name,
      role_code: sp.role_code || `${idx + 1}`,
      phone: sp.phone || sp.whatsapp_number || ""
    }));

    const seniorScorecard = {
      id: 8888,
      status: (s.status === 'PUBLISHED' || s.is_published) ? 'SUBMITTED' : 'DRAFT',
      criteria: [
        { id: 1, name: "Matter / বিষয়বস্তু ও যুক্তি", name_bn: "বিষয়বস্তু ও যুক্তি", max_marks: 40 },
        { id: 2, name: "Manner / উপস্থাপনা ও বাচনভঙ্গি", name_bn: "উপস্থাপনা ও বাচনভঙ্গি", max_marks: 40 },
        { id: 3, name: "Method / কৌশল ও সময়জ্ঞান", name_bn: "কৌশল ও সময়জ্ঞান", max_marks: 20 }
      ],
      scores: []
    };

    window.seniorSheet = new window.AdjudicationSpreadsheet("senior-sheet-mount");
    window.seniorSheet.loadData(seniorScorecard, seniorMatch, t1Speakers, t2Speakers, { mode: "senior" });
    window.debateTimer.init({ speaking_time_seconds: 180 });
  }

  async openSeniorConfigModal() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    let data = { senior: {} };
    let eligibleData = { eligible_speakers: [] };
    let eligibleJudgesData = { eligible_judges: [] };
    try {
      [data, eligibleData, eligibleJudgesData] = await Promise.all([
        window.api.get('/api/senior/status'),
        window.api.get('/api/senior/eligible-speakers'),
        window.api.get('/api/senior/eligible-judges').catch(() => ({ eligible_judges: [] }))
      ]);
    } catch (e) {
      console.warn("Could not load senior data for modal", e);
    }
    const s = data.senior || {};
    const eligible = eligibleData.eligible_speakers || [];
    const eligibleJudges = eligibleJudgesData.eligible_judges || [];
    const isAdmin = this.currentUser && this.currentUser.role === 'ADMIN';
    const curUid = this.currentUser ? this.currentUser.id : null;
    const canEditT1 = isAdmin || Boolean(curUid && (curUid === s.team1_leader_id || data.can_edit_team1));
    const canEditT2 = isAdmin || Boolean(curUid && (curUid === s.team2_leader_id || data.can_edit_team2));

    const renderSpeakerSelect = (id, selectedUserId, disabled) => {
      let options = `<option value="">-- ${isBn ? 'বিতার্কিক নির্বাচন করুন' : 'Select Registered Debater'} --</option>`;
      eligible.forEach(u => {
        const isSel = Boolean(selectedUserId && u.id === selectedUserId);
        const uTag = u.username ? `@${u.username}` : u.whatsapp_number;
        options += `<option value="${u.id}" ${isSel ? 'selected' : ''}>${u.full_name} (${uTag}) • ${u.whatsapp_number}</option>`;
      });
      return `
        <select class="form-control" id="${id}" ${disabled ? 'disabled' : ''}>
          ${options}
        </select>
      `;
    };

    const renderJudgeSelect = (id, selectedJudgeId) => {
      let options = `<option value="">-- ${isBn ? 'বিচারক নির্বাচন করুন' : 'Select Official Judge'} --</option>`;
      eligibleJudges.forEach(j => {
        const isSel = Boolean(selectedJudgeId && j.id === selectedJudgeId);
        const jTag = j.username ? `@${j.username}` : j.whatsapp_number;
        options += `<option value="${j.id}" ${isSel ? 'selected' : ''}>${j.full_name} (${jTag}) • ${j.whatsapp_number}</option>`;
      });
      return `
        <select class="form-control" id="${id}">
          ${options}
        </select>
      `;
    };

    let modalHtml = `
      <div class="modal-backdrop" id="senior-config-modal">
        <div class="modal-dialog" style="max-width: 680px; max-height: 90vh; overflow-y: auto;">
          <div class="modal-header">
            <h3 class="modal-title">${isBn ? '10ম শ্রেণি সিনিয়র দল ও বিচারকমণ্ডলী নির্বাচন' : 'Class 10 Teams & Adjudicators Formation'}</h3>
            <button class="win-btn win-btn-subtle" onclick="document.getElementById('senior-config-modal').remove()">x</button>
          </div>
          <div class="modal-body" style="display:flex; flex-direction:column; gap:1.25rem;">
            <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:6px; padding:0.65rem 0.85rem; font-size:0.8rem; color:#1e40af;">
              ℹ️ ${isAdmin
                ? (isBn ? 'ট্যাব পরিচালক হিসেবে আপনি উভয় দল, সকল সদস্য ও বিচারকমণ্ডলী নির্বাচন করতে পারেন।' : 'As Tab Director, you can configure both teams, assign debaters, and appoint official judges.')
                : (isBn ? 'টিম লিডার হিসেবে আপনি আপনার দলের নাম ও নিবন্ধিত বিতার্কিকদের নির্বাচন করতে পারেন।' : 'As Team Leader, you can configure your team name and select registered debaters.')}
            </div>

            <!-- TEAM 1 (GOVERNMENT) -->
            <div style="background:#f8fafc; border:1px solid ${canEditT1 ? '#2563eb' : '#e2e8f0'}; border-radius:8px; padding:1rem; border-left:4px solid #2563eb;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <strong style="color:#2563eb; font-size:0.95rem;">
                  🏛️ ${isBn ? '1ম দল (সরকারি দল / Proposition)' : 'Team 1 (Proposition)'}
                </strong>
                ${!canEditT1 ? `<span class="badge badge-amber" style="font-size:0.7rem;">${isBn ? 'টিম 1 লিডার সম্পাদ্য' : 'Team 1 Leader Only'}</span>` : ''}
              </div>
              <div style="margin-bottom:0.75rem;">
                <label class="form-label">${isBn ? 'দলের নাম' : 'Team Name'}</label>
                <input type="text" class="form-control" id="m-s-t1-name" value="${s.team1_name || 'Class 10 Master Team Alpha'}" ${canEditT1 ? '' : 'disabled'} />
              </div>
              <div style="display:grid; grid-template-columns: 1fr; gap:0.65rem;">
                <div>
                  <label class="form-label" style="font-size:0.78rem;">${isBn ? '1ম বক্তা / দলনেতা (Prime Minister)' : '1st Speaker / Leader (PM)'}</label>
                  ${renderSpeakerSelect('m-s-t1-spk1', s.team1_speaker1_id, !canEditT1)}
                </div>
                <div>
                  <label class="form-label" style="font-size:0.78rem;">${isBn ? '2য় বক্তা (Deputy Prime Minister)' : '2nd Speaker (DPM)'}</label>
                  ${renderSpeakerSelect('m-s-t1-spk2', s.team1_speaker2_id, !canEditT1)}
                </div>
                <div>
                  <label class="form-label" style="font-size:0.78rem;">${isBn ? '3য় বক্তা (Government Whip)' : '3rd Speaker (Gov Whip)'}</label>
                  ${renderSpeakerSelect('m-s-t1-spk3', s.team1_speaker3_id, !canEditT1)}
                </div>
              </div>
            </div>

            <!-- TEAM 2 (OPPOSITION) -->
            <div style="background:#f8fafc; border:1px solid ${canEditT2 ? '#059669' : '#e2e8f0'}; border-radius:8px; padding:1rem; border-left:4px solid #059669;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
                <strong style="color:#059669; font-size:0.95rem;">
                  ⚖️ ${isBn ? '2য় দল (বিরোধী দল / Opposition)' : 'Team 2 (Opposition)'}
                </strong>
                ${!canEditT2 ? `<span class="badge badge-amber" style="font-size:0.7rem;">${isBn ? 'টিম 2 লিডার সম্পাদ্য' : 'Team 2 Leader Only'}</span>` : ''}
              </div>
              <div style="margin-bottom:0.75rem;">
                <label class="form-label">${isBn ? 'দলের নাম' : 'Team Name'}</label>
                <input type="text" class="form-control" id="m-s-t2-name" value="${s.team2_name || 'Class 10 Master Team Beta'}" ${canEditT2 ? '' : 'disabled'} />
              </div>
              <div style="display:grid; grid-template-columns: 1fr; gap:0.65rem;">
                <div>
                  <label class="form-label" style="font-size:0.78rem;">${isBn ? '1ম বক্তা / দলনেতা (Leader of Opposition)' : '1st Speaker / Leader (LO)'}</label>
                  ${renderSpeakerSelect('m-s-t2-spk1', s.team2_speaker1_id, !canEditT2)}
                </div>
                <div>
                  <label class="form-label" style="font-size:0.78rem;">${isBn ? '2য় বক্তা (Deputy Leader of Opposition)' : '2nd Speaker (DLO)'}</label>
                  ${renderSpeakerSelect('m-s-t2-spk2', s.team2_speaker2_id, !canEditT2)}
                </div>
                <div>
                  <label class="form-label" style="font-size:0.78rem;">${isBn ? '3য় বক্তা (Opposition Whip)' : '3rd Speaker (Opp Whip)'}</label>
                  ${renderSpeakerSelect('m-s-t2-spk3', s.team2_speaker3_id, !canEditT2)}
                </div>
              </div>
            </div>

            <!-- OFFICIAL ADJUDICATORS PANEL -->
            ${isAdmin ? `
              <div style="background:#f8fafc; border:1px solid #f59e0b; border-radius:8px; padding:1rem; border-left:4px solid #f59e0b;">
                <strong style="color:#b45309; font-size:0.95rem; display:block; margin-bottom:0.75rem;">
                  ⚖️ ${isBn ? 'অফিসিয়াল বিচারকমণ্ডলী প্যানেল নির্বাচন' : 'Official Adjudicators Panel Assignment'}
                </strong>
                <div style="display:grid; grid-template-columns: 1fr; gap:0.65rem;">
                  <div>
                    <label class="form-label" style="font-size:0.78rem;">${isBn ? 'প্রধান বিচারক (Chief Adjudicator)' : 'Chief Adjudicator'}</label>
                    ${renderJudgeSelect('m-s-chief-judge', s.chief_judge_id)}
                  </div>
                  <div>
                    <label class="form-label" style="font-size:0.78rem;">${isBn ? 'প্যানেল বিচারক 1 (Panel Judge 1)' : 'Panel Judge 1'}</label>
                    ${renderJudgeSelect('m-s-panel-judge1', s.panel_judge1_id)}
                  </div>
                  <div>
                    <label class="form-label" style="font-size:0.78rem;">${isBn ? 'প্যানেল বিচারক 2 (Panel Judge 2)' : 'Panel Judge 2'}</label>
                    ${renderJudgeSelect('m-s-panel-judge2', s.panel_judge2_id)}
                  </div>
                  <div>
                    <label class="form-label" style="font-size:0.78rem;">${isBn ? 'রুম / ভেন্যু নোট' : 'Room / Venue Note'}</label>
                    <input type="text" class="form-control" id="m-s-adj" value="${s.room_name || 'Central Auditorium'}" placeholder="e.g. Central Auditorium" />
                  </div>
                </div>
              </div>
            ` : ''}
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="document.getElementById('senior-config-modal').remove()">${isBn ? 'বাতিল' : 'Cancel'}</button>
            <button class="btn btn-primary" onclick="window.app.saveSeniorConfig(${canEditT1}, ${canEditT2})">${isBn ? 'সংরক্ষণ করুন' : 'Save Changes'}</button>
          </div>
        </div>
      </div>
    `;
    let div = document.createElement('div');
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);
  }

  async saveSeniorConfig(canEditT1 = true, canEditT2 = true) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const isAdmin = this.currentUser && this.currentUser.role === 'ADMIN';
    try {
      const payload = {};
      if (canEditT1) {
        const t1Name = document.getElementById('m-s-t1-name')?.value;
        const sp1Id = document.getElementById('m-s-t1-spk1')?.value;
        const sp2Id = document.getElementById('m-s-t1-spk2')?.value;
        const sp3Id = document.getElementById('m-s-t1-spk3')?.value;
        if (t1Name) payload.team1_name = t1Name.trim();
        if (sp1Id) payload.team1_speaker1_id = parseInt(sp1Id, 10);
        if (sp2Id) payload.team1_speaker2_id = parseInt(sp2Id, 10);
        if (sp3Id) payload.team1_speaker3_id = parseInt(sp3Id, 10);
      }
      if (canEditT2) {
        const t2Name = document.getElementById('m-s-t2-name')?.value;
        const sp1Id = document.getElementById('m-s-t2-spk1')?.value;
        const sp2Id = document.getElementById('m-s-t2-spk2')?.value;
        const sp3Id = document.getElementById('m-s-t2-spk3')?.value;
        if (t2Name) payload.team2_name = t2Name.trim();
        if (sp1Id) payload.team2_speaker1_id = parseInt(sp1Id, 10);
        if (sp2Id) payload.team2_speaker2_id = parseInt(sp2Id, 10);
        if (sp3Id) payload.team2_speaker3_id = parseInt(sp3Id, 10);
      }
      if (isAdmin) {
        const chiefEl = document.getElementById('m-s-chief-judge');
        const pj1El = document.getElementById('m-s-panel-judge1');
        const pj2El = document.getElementById('m-s-panel-judge2');
        if (chiefEl && chiefEl.value !== "") payload.chief_judge_id = parseInt(chiefEl.value, 10);
        if (pj1El && pj1El.value !== "") payload.panel_judge1_id = parseInt(pj1El.value, 10);
        if (pj2El && pj2El.value !== "") payload.panel_judge2_id = parseInt(pj2El.value, 10);
      }
      const adjEl = document.getElementById('m-s-adj');
      if (adjEl) payload.adjudicators = adjEl.value.trim();

      await window.api.post('/api/senior/save-teams', payload);
      document.getElementById('senior-config-modal')?.remove();
      showToast(isBn ? 'সিনিয়র দলের তথ্য সংরক্ষিত হয়েছে!' : 'Senior segment teams saved successfully!', 'success');
      this.render();
    } catch (e) {
      showToast(e.message, 'error');
    }
  }

  async editSeniorMotion() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const newMotion = prompt(isBn ? '10ম শ্রেণির সিনিয়র রাউন্ডের বিতর্কের বিষয় লিখুন:' : 'Enter motion for Class 10 Senior Round:');
    if (!newMotion || !newMotion.trim()) return;

    try {
      await window.api.post('/api/senior/update-motion', { motion: newMotion.trim() });
      showToast(isBn ? 'বিতর্কের বিষয় আপডেট হয়েছে!' : 'Motion updated successfully!', 'success');
      this.render();
    } catch (e) {
      showToast(e.message, 'error');
    }
  }

  async resetSeniorSegment() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    if (!confirm(isBn ? 'আপনি কি নিশ্চিত যে সিনিয়র সেগমেন্টের সকল স্কোর রিসেট করতে চান?' : 'Are you sure you want to reset Senior Segment scores?')) return;
    try {
      await window.api.post('/api/senior/reset', {});
      showToast(isBn ? 'সিনিয়র সেগমেন্ট রিসেট হয়েছে।' : 'Senior segment reset successfully.', 'success');
      this.render();
    } catch (e) {
      showToast(e.message, 'error');
    }
  }

  // ==========================================================================
  // PRACTICE / DEMO DEBATE ARENA — FULL UNIFIED DEBATE WORKSPACE (SAME COMPUTER)
  // ==========================================================================
  getPracticeConfig() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const def = {
      team1_name: isBn ? "সরকারি দল" : "Government Team",
      team1_custom: isBn ? "ঢাকা কলেজ" : "Alpha Squad",
      t1_s1: isBn ? "1ম সরকারি বক্তা (প্রধানমন্ত্রী)" : "1st Gov Speaker (PM)",
      t1_s2: isBn ? "2য় সরকারি বক্তা (মন্ত্রী)" : "2nd Gov Speaker (DPM)",
      t1_s3: isBn ? "3য় সরকারি বক্তা (হুইপ)" : "3rd Gov Speaker (Gov Whip)",
      team2_name: isBn ? "বিরোধী দল" : "Opposition Team",
      team2_custom: isBn ? "নটর ডেম" : "Beta Squad",
      t2_s1: isBn ? "1ম বিরোধী বক্তা (বিরোধী দলনেতা)" : "1st Opp Speaker (LO)",
      t2_s2: isBn ? "2য় বিরোধী বক্তা (উপনেতা)" : "2nd Opp Speaker (DLO)",
      t2_s3: isBn ? "3য় বিরোধী বক্তা (হুইপ)" : "3rd Opp Speaker (Opp Whip)",
      motion_en: "This House would completely ban fossil fuels for environmental preservation.",
      motion_bn: "এই সংসদ পরিবেশ সুরক্ষায় জীবাশ্ম জ্বালানির ব্যবহার সম্পূর্ণ নিষিদ্ধ করবে।"
    };
    try {
      const stored = localStorage.getItem("hghsdc_practice_config");
      if (stored) return Object.assign(def, JSON.parse(stored));
    } catch (e) {}
    return def;
  }

  savePracticeConfig(cfg) {
    try {
      localStorage.setItem("hghsdc_practice_config", JSON.stringify(cfg));
    } catch (e) {}
  }

  renderPracticeDebate(container) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const cfg = this.getPracticeConfig();

    let html = `
      <div class="section-header">
        <div>
          <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
            <span class="practice-badge">⚡ ${isBn ? 'প্র্যাকটিস ও ডেমো স্যান্ডবক্স' : 'PRACTICE / DEMO SANDBOX'}</span>
            <span class="badge badge-blue">${isBn ? 'অফিসিয়াল টুর্নামেন্ট ডাটাবেস অক্ষত' : 'Standalone Rehearsal'}</span>
          </div>
          <h2 class="section-title">${isBn ? 'লাইভ প্র্যাকটিস বিতর্ক এরিনা' : 'Live Practice & Demo Debate Arena'}</h2>
          <p class="section-desc">${isBn ? 'একই স্ক্রিনে লাইভ টাইমার ও পূর্ণাঙ্গ এক্সেল-স্টাইল বিচারক মূল্যায়ন শিট • ব্যক্তিগত মহড়া' : 'Full timer & live spreadsheet judging on the same screen • Personal demo'}</p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn btn-secondary btn-sm" onclick="window.debateAudio.testAudio()">
            ${getSvg("bell", 14)} ${window.i18n.t("test_audio")}
          </button>
          <button class="btn btn-primary btn-sm" onclick="window.app.openPracticeConfigModal()">
            ${getSvg("users", 14)} ${isBn ? 'দল ও বিষয় কাস্টমাইজ' : 'Customize Teams & Motion'}
          </button>
          <button class="btn btn-secondary btn-sm" onclick="window.app.resetPracticeSheet()">
            ${getSvg("trash", 14)} ${isBn ? 'শিট রিসেট' : 'Reset Sheet'}
          </button>
          <button class="btn btn-gold btn-sm" onclick="window.app.declarePracticeWinner()">
            ${getSvg("trophy", 14)} ${isBn ? 'অনুশীলনী বিজয়ী ঘোষণা' : 'Declare Winner'}
          </button>
        </div>
      </div>

      <!-- Practice Motion Card -->
      <div class="win-glass" style="padding: 1.15rem 1.4rem; margin-bottom: 1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size: 0.75rem; font-weight: 800; color: #0369a1; text-transform: uppercase; letter-spacing: 0.08em;">
            ${window.i18n.t("motion")} (PRACTICE)
          </span>
          <button class="btn btn-subtle btn-sm" style="font-size:0.75rem; padding:0.2rem 0.6rem;" onclick="window.app.editPracticeMotion()">
            ${getSvg("edit", 12)} ${isBn ? 'বিষয় সম্পাদনা' : 'Edit Motion'}
          </button>
        </div>
        <div style="font-size: 1.1rem; font-weight: 800; color:#000; margin-top: 0.35rem;">
          ${cfg.motion_en}
        </div>
        ${cfg.motion_bn ? `<div style="font-size: 0.92rem; color: #334155; font-weight:600; margin-top: 0.25rem;">${cfg.motion_bn}</div>` : ''}
      </div>

      <!-- Debater WhatsApp Directory for Practice -->
      <div class="win-glass" style="padding: 1.15rem 1.4rem; margin-bottom: 1.5rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; border-bottom:1px solid var(--border-card); padding-bottom:0.45rem;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="${WHATSAPP_SVG_PATH}"/></svg>
            <strong style="font-size:0.86rem; color:var(--brand-navy);">${isBn ? 'অনুশীলনী বিতার্কিকদের সরাসরি হোয়াটসঅ্যাপ' : 'Practice Debater WhatsApp Directory'}</strong>
          </div>
          <span style="font-size:0.74rem; color:#64748b;">${isBn ? 'যোগাযোগ করতে আইকনে চাপ দিন' : 'Click icon to message directly'}</span>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1.25rem;">
          <!-- Team 1 -->
          <div style="background:#f8fafc; border:1px solid var(--border-card); border-radius:var(--radius-md); padding:0.85rem 1rem; border-left:4px solid #2563eb;">
            <div style="font-size:0.88rem; font-weight:800; color:#2563eb; margin-bottom:0.25rem;">
              ${cfg.team1_name} (${isBn ? 'সরকারি দল / Proposition' : 'Proposition'})
            </div>
            ${cfg.team1_custom ? `
              <div style="font-size:0.92rem; font-weight:800; color:#047857; margin-bottom:0.55rem; display:flex; align-items:center; gap:0.4rem;">
                <span style="background:#d1fae5; color:#065f46; border:1px solid #a7f3d0; padding:1px 6px; border-radius:4px; font-size:0.7rem; font-weight:800;">
                  ${isBn ? 'অনুমোদিত দল' : 'Approved Roster'}
                </span>
                <span>${cfg.team1_custom}</span>
              </div>
            ` : ''}
            <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.4rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; padding:0.25rem 0; border-bottom:1px dashed #e2e8f0;">
                <span><span class="role-code-badge role-code-1" style="margin-right:0.35rem; width:20px; height:20px; font-size:0.7rem;">1</span><strong>${cfg.t1_s1}</strong></span>
                ${getWhatsAppButton("01700000001", cfg.t1_s1)}
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; padding:0.25rem 0; border-bottom:1px dashed #e2e8f0;">
                <span><span class="role-code-badge role-code-2" style="margin-right:0.35rem; width:20px; height:20px; font-size:0.7rem;">2</span><strong>${cfg.t1_s2}</strong></span>
                ${getWhatsAppButton("01700000002", cfg.t1_s2)}
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; padding:0.25rem 0;">
                <span><span class="role-code-badge role-code-3" style="margin-right:0.35rem; width:20px; height:20px; font-size:0.7rem;">3</span><strong>${cfg.t1_s3}</strong></span>
                ${getWhatsAppButton("01700000003", cfg.t1_s3)}
              </div>
            </div>
          </div>

          <!-- Team 2 -->
          <div style="background:#f8fafc; border:1px solid var(--border-card); border-radius:var(--radius-md); padding:0.85rem 1rem; border-left:4px solid #059669;">
            <div style="font-size:0.88rem; font-weight:800; color:#059669; margin-bottom:0.25rem;">
              ${cfg.team2_name} (${isBn ? 'বিরোধী দল / Opposition' : 'Opposition'})
            </div>
            ${cfg.team2_custom ? `
              <div style="font-size:0.92rem; font-weight:800; color:#047857; margin-bottom:0.55rem; display:flex; align-items:center; gap:0.4rem;">
                <span style="background:#d1fae5; color:#065f46; border:1px solid #a7f3d0; padding:1px 6px; border-radius:4px; font-size:0.7rem; font-weight:800;">
                  ${isBn ? 'অনুমোদিত দল' : 'Approved Roster'}
                </span>
                <span>${cfg.team2_custom}</span>
              </div>
            ` : ''}
            <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.4rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; padding:0.25rem 0; border-bottom:1px dashed #e2e8f0;">
                <span><span class="role-code-badge role-code-1" style="margin-right:0.35rem; width:20px; height:20px; font-size:0.7rem;">1</span><strong>${cfg.t2_s1}</strong></span>
                ${getWhatsAppButton("01700000004", cfg.t2_s1)}
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; padding:0.25rem 0; border-bottom:1px dashed #e2e8f0;">
                <span><span class="role-code-badge role-code-2" style="margin-right:0.35rem; width:20px; height:20px; font-size:0.7rem;">2</span><strong>${cfg.t2_s2}</strong></span>
                ${getWhatsAppButton("01700000005", cfg.t2_s2)}
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.82rem; padding:0.25rem 0;">
                <span><span class="role-code-badge role-code-3" style="margin-right:0.35rem; width:20px; height:20px; font-size:0.7rem;">3</span><strong>${cfg.t2_s3}</strong></span>
                ${getWhatsAppButton("01700000006", cfg.t2_s3)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Integrated 4-Minute Speech Timer -->
      <div class="win-glass" id="timer-container" style="padding: 1.5rem; margin-bottom: 1.75rem; text-align: center;">
        <div class="timer-speaker-pill">
          <span>${window.i18n.t("speaker_indicator")}</span>
          <span id="timer-speaker-name">${cfg.team1_name} - Sp 1</span>
        </div>

        <div class="timer-digits-container">
          <div class="timer-digits" id="timer-digits">04:00</div>
        </div>

        <div class="timer-progress-bar" style="margin: 0 auto 1.5rem;">
          <div class="timer-progress-fill" id="timer-progress-fill"></div>
        </div>

        <div class="timer-controls">
          <button class="btn btn-primary btn-lg" id="timer-start-btn" onclick="window.debateTimer.isRunning ? window.debateTimer.pause() : window.debateTimer.start()">
            ${window.i18n.t("start")}
          </button>
          <button class="btn btn-secondary btn-lg" onclick="window.debateTimer.reset()">
            ${window.i18n.t("reset")}
          </button>
          <button class="btn btn-secondary btn-lg" onclick="window.debateTimer.toggleFullscreen()">
            ${window.i18n.t("fullscreen")}
          </button>
        </div>

        <div class="timer-speaker-select">
          <button class="speaker-btn active" onclick="window.debateTimer.setSpeaker('${cfg.team1_name.replace(/'/g, "\\\'")} - Sp 1')">${cfg.team1_name} Sp1</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${cfg.team2_name.replace(/'/g, "\\\'")} - Sp 1')">${cfg.team2_name} Sp1</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${cfg.team1_name.replace(/'/g, "\\\'")} - Sp 2')">${cfg.team1_name} Sp2</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${cfg.team2_name.replace(/'/g, "\\\'")} - Sp 2')">${cfg.team2_name} Sp2</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${cfg.team1_name.replace(/'/g, "\\\'")} - Sp 3')">${cfg.team1_name} Sp3</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${cfg.team2_name.replace(/'/g, "\\\'")} - Sp 3')">${cfg.team2_name} Sp3</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${cfg.team2_name.replace(/'/g, "\\\'")} - Reply')">Opp Reply</button>
          <button class="speaker-btn" onclick="window.debateTimer.setSpeaker('${cfg.team1_name.replace(/'/g, "\\\'")} - Reply')">Gov Reply</button>
        </div>
      </div>

      <!-- Live Modern Excel-Style Adjudication Spreadsheet Mount -->
      <div id="practice-sheet-mount"></div>
    `;

    container.innerHTML = html;

    const pMatch = {
      id: 9999,
      round_name: isBn ? "অনুশীলনী রাউন্ড" : "Practice Mock Round",
      room_name: isBn ? "স্যান্ডবক্স এরিনা" : "Sandbox Arena",
      team1_id: 901,
      team1_name: cfg.team1_name,
      team1_custom_name: cfg.team1_custom || "",
      team1_seed: 1,
      team1_status: "APPROVED",
      team2_id: 902,
      team2_name: cfg.team2_name,
      team2_custom_name: cfg.team2_custom || "",
      team2_seed: 2,
      team2_status: "APPROVED",
      motion_en: cfg.motion_en,
      motion_bn: cfg.motion_bn
    };

    const t1Speakers = [
      { id: 9011, name: cfg.t1_s1, role_code: "1", phone: "01700000001" },
      { id: 9012, name: cfg.t1_s2, role_code: "2", phone: "01700000002" },
      { id: 9013, name: cfg.t1_s3, role_code: "3", phone: "01700000003" }
    ];

    const t2Speakers = [
      { id: 9021, name: cfg.t2_s1, role_code: "1", phone: "01700000004" },
      { id: 9022, name: cfg.t2_s2, role_code: "2", phone: "01700000005" },
      { id: 9023, name: cfg.t2_s3, role_code: "3", phone: "01700000006" }
    ];

    let savedScores = [];
    try {
      const raw = localStorage.getItem("hghsdc_practice_scores");
      if (raw) {
        const parsed = JSON.parse(raw);
        Object.entries(parsed).forEach(([key, val]) => {
          const parts = key.split("_");
          if (parts.length === 3) {
            savedScores.push({
              team_id: parseInt(parts[0]),
              speaker_position: parseInt(parts[1]),
              criterion_id: isNaN(parseInt(parts[2])) ? parts[2] : parseInt(parts[2]),
              score: val
            });
          }
        });
      }
    } catch (e) {}

    const pScorecard = {
      id: 9999,
      status: "DRAFT",
      criteria: [
        { id: 1, name: "Matter / বিষয়বস্তু ও যুক্তি", name_bn: "বিষয়বস্তু ও যুক্তি", max_marks: 40 },
        { id: 2, name: "Manner / উপস্থাপনা ও বাচনভঙ্গি", name_bn: "উপস্থাপনা ও বাচনভঙ্গি", max_marks: 40 },
        { id: 3, name: "Method / কৌশল ও সময়জ্ঞান", name_bn: "কৌশল ও সময়জ্ঞান", max_marks: 20 }
      ],
      scores: savedScores
    };

    window.practiceSheet = new window.AdjudicationSpreadsheet("practice-sheet-mount");
    window.practiceSheet.loadData(pScorecard, pMatch, t1Speakers, t2Speakers, { mode: "practice" });
    window.debateTimer.init({ speaking_time_seconds: 240 });
  }

  declarePracticeWinner() {
    if (window.practiceSheet) {
      window.practiceSheet.openReviewModal();
    }
  }

  resetPracticeSheet() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    try {
      localStorage.removeItem("hghsdc_practice_scores");
    } catch (e) {}
    showToast(isBn ? 'অনুশীলনী স্কোরশিট রিসেট করা হয়েছে।' : 'Practice scoresheet reset.', 'info');
    this.render();
  }

  editPracticeMotion() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const cfg = this.getPracticeConfig();
    const newM = prompt(isBn ? 'অনুশীলনী বিতর্কের বিষয় লিখুন:' : 'Enter practice debate motion:', cfg.motion_en);
    if (!newM || !newM.trim()) return;
    cfg.motion_en = newM.trim();
    cfg.motion_bn = newM.trim();
    this.savePracticeConfig(cfg);
    showToast(isBn ? 'মহড়া বিতর্কের বিষয় আপডেট হয়েছে।' : 'Practice motion updated.', 'success');
    this.render();
  }

  openPracticeConfigModal() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const cfg = this.getPracticeConfig();

    let modalHtml = `
      <div class="modal-backdrop" id="practice-config-modal">
        <div class="modal-dialog" style="max-width: 620px;">
          <div class="modal-header">
            <h3 class="modal-title">${isBn ? 'অনুশীলনী দল ও বিষয় কাস্টমাইজেশন' : 'Practice Teams & Motion Setup'}</h3>
            <button class="win-btn win-btn-subtle" onclick="document.getElementById('practice-config-modal').remove()">x</button>
          </div>
          <div class="modal-body" style="display:flex; flex-direction:column; gap:1rem;">
            <div>
              <label class="form-label">${isBn ? 'মহড়া বিতর্কের বিষয় (Motion)' : 'Practice Debate Motion'}</label>
              <input type="text" class="form-control" id="p-cfg-motion" value="${cfg.motion_en || ''}" />
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
              <div>
                <label class="form-label">${isBn ? '1ম দল (সরকারি)' : 'Team 1 (Gov)'}</label>
                <input type="text" class="form-control" id="p-cfg-t1-name" value="${cfg.team1_name || ''}" />
              </div>
              <div>
                <label class="form-label">${isBn ? '1ম দল প্রতিষ্ঠান / কাস্টম নাম' : 'Team 1 School / Org'}</label>
                <input type="text" class="form-control" id="p-cfg-t1-custom" value="${cfg.team1_custom || ''}" />
              </div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.5rem;">
              <div>
                <label class="form-label">${isBn ? '1ম বক্তা' : 'Sp 1'}</label>
                <input type="text" class="form-control form-control-sm" id="p-cfg-t1-s1" value="${cfg.t1_s1 || ''}" />
              </div>
              <div>
                <label class="form-label">${isBn ? '2য় বক্তা' : 'Sp 2'}</label>
                <input type="text" class="form-control form-control-sm" id="p-cfg-t1-s2" value="${cfg.t1_s2 || ''}" />
              </div>
              <div>
                <label class="form-label">${isBn ? '3য় বক্তা' : 'Sp 3'}</label>
                <input type="text" class="form-control form-control-sm" id="p-cfg-t1-s3" value="${cfg.t1_s3 || ''}" />
              </div>
            </div>

            <div style="border-top:1px solid #e2e8f0; padding-top:0.75rem; display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
              <div>
                <label class="form-label">${isBn ? '2য় দল (বিরোধী)' : 'Team 2 (Opp)'}</label>
                <input type="text" class="form-control" id="p-cfg-t2-name" value="${cfg.team2_name || ''}" />
              </div>
              <div>
                <label class="form-label">${isBn ? '2য় দল প্রতিষ্ঠান / কাস্টম নাম' : 'Team 2 School / Org'}</label>
                <input type="text" class="form-control" id="p-cfg-t2-custom" value="${cfg.team2_custom || ''}" />
              </div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.5rem;">
              <div>
                <label class="form-label">${isBn ? '1ম বক্তা' : 'Sp 1'}</label>
                <input type="text" class="form-control form-control-sm" id="p-cfg-t2-s1" value="${cfg.t2_s1 || ''}" />
              </div>
              <div>
                <label class="form-label">${isBn ? '2য় বক্তা' : 'Sp 2'}</label>
                <input type="text" class="form-control form-control-sm" id="p-cfg-t2-s2" value="${cfg.t2_s2 || ''}" />
              </div>
              <div>
                <label class="form-label">${isBn ? '3য় বক্তা' : 'Sp 3'}</label>
                <input type="text" class="form-control form-control-sm" id="p-cfg-t2-s3" value="${cfg.t2_s3 || ''}" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" onclick="document.getElementById('practice-config-modal').remove()">${isBn ? 'বাতিল' : 'Cancel'}</button>
            <button class="btn btn-primary" onclick="window.app.savePracticeConfigModal()">${isBn ? 'সংরক্ষণ করুন' : 'Save Setup'}</button>
          </div>
        </div>
      </div>
    `;
    let div = document.createElement('div');
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);
  }

  savePracticeConfigModal() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const cfg = {
      motion_en: document.getElementById('p-cfg-motion')?.value?.trim() || 'This House would completely ban fossil fuels for environmental preservation.',
      motion_bn: document.getElementById('p-cfg-motion')?.value?.trim() || 'এই সংসদ পরিবেশ সুরক্ষায় জীবাশ্ম জ্বালানির ব্যবহার সম্পূর্ণ নিষিদ্ধ করবে।',
      team1_name: document.getElementById('p-cfg-t1-name')?.value?.trim() || 'Government Team',
      team1_custom: document.getElementById('p-cfg-t1-custom')?.value?.trim() || '',
      t1_s1: document.getElementById('p-cfg-t1-s1')?.value?.trim() || '1st Speaker',
      t1_s2: document.getElementById('p-cfg-t1-s2')?.value?.trim() || '2nd Speaker',
      t1_s3: document.getElementById('p-cfg-t1-s3')?.value?.trim() || '3rd Speaker',
      team2_name: document.getElementById('p-cfg-t2-name')?.value?.trim() || 'Opposition Team',
      team2_custom: document.getElementById('p-cfg-t2-custom')?.value?.trim() || '',
      t2_s1: document.getElementById('p-cfg-t2-s1')?.value?.trim() || '1st Speaker',
      t2_s2: document.getElementById('p-cfg-t2-s2')?.value?.trim() || '2nd Speaker',
      t2_s3: document.getElementById('p-cfg-t2-s3')?.value?.trim() || '3rd Speaker'
    };
    this.savePracticeConfig(cfg);
    document.getElementById('practice-config-modal')?.remove();
    showToast(isBn ? 'অনুশীলনী দলের তথ্য সংরক্ষিত হয়েছে!' : 'Practice teams and motion saved!', 'success');
    this.render();
  }

  // ==========================================================================
  // HANDNOTE & PRIVATE SCRATCHPAD PANEL (হ্যান্ডনোট)
  // ==========================================================================
  async renderHandnote(container) {
    const isBn = window.i18n && window.i18n.lang === 'bn';

    let noteData = { text: '', canvas: '', matrix: '' };
    try {
      const res = await window.api.get('/api/notes/my-notes');
      if (res && res.notes) {
        res.notes.forEach(n => {
          if (n.category === 'general') noteData.text = n.content || '';
          if (n.category === 'canvas') noteData.canvas = n.content || '';
          if (n.category === 'matrix') noteData.matrix = n.content || '';
        });
      }
    } catch (e) {
      console.warn("Could not load notes:", e);
    }

    let html = `
      <div class="handnote-container">
        <!-- Header -->
        <div class="handnote-header">
          <div>
            <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.25rem;">
              <span class="badge badge-gold" style="font-weight:800;">📝 ${isBn ? 'ব্যক্তিগত হ্যান্ডনোট' : 'PRIVATE HANDNOTE'}</span>
              <span class="badge badge-green">${isBn ? '🔒 শতভাগ সুরক্ষিত ও ব্যক্তিগত' : '🔒 Strictly Private to You'}</span>
            </div>
            <h2 style="font-size:1.4rem; font-weight:800; color:#091224; margin:0;">
              ${isBn ? 'হ্যান্ডনোট — বক্তব্য ড্রাফট, ড্রয়িং বোর্ড ও বিতর্ক ছক' : 'Handnotes — Speech Draft, Drawing Board & Matrix'}
            </h2>
            <p style="font-size:0.85rem; color:#64748b; margin:0.25rem 0 0 0;">
              ${isBn ? 'আপনার নিজস্ব যুক্তি, খণ্ডন কৌশল ও তথ্য সুরক্ষিতভাবে সাজিয়ে রাখুন।' : 'Privately draft speech arguments, draw flowcharts, and maintain rebuttal matrices.'}
            </p>
          </div>

          <!-- Tab buttons -->
          <div class="handnote-tabs">
            <button class="handnote-tab-btn active" id="btn-tab-text" onclick="window.app.switchHandnoteTab('text')">
              ${getSvg("edit", 14)} ${isBn ? 'টেক্সট ড্রাফট' : 'Speech Draft'}
            </button>
            <button class="handnote-tab-btn" id="btn-tab-canvas" onclick="window.app.switchHandnoteTab('canvas')">
              🎨 ${isBn ? 'ড্রয়িং বোর্ড' : 'Drawing Canvas'}
            </button>
            <button class="handnote-tab-btn" id="btn-tab-matrix" onclick="window.app.switchHandnoteTab('matrix')">
              📊 ${isBn ? 'বিতর্ক চার্ট ও ম্যাট্রিক্স' : 'Debate Matrix'}
            </button>
          </div>
        </div>

        <!-- Tab 1: Text Editor -->
        <div id="handnote-tab-text" class="handnote-tab-content">
          <div class="win-glass" style="padding:1.25rem; border-radius:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; flex-wrap:wrap; gap:0.5rem;">
              <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                <button class="btn btn-secondary btn-sm" onclick="window.app.insertDebateSnippet('মাননীয় স্পিকার,')">
                  + মাননীয় স্পিকার
                </button>
                <button class="btn btn-secondary btn-sm" onclick="window.app.insertDebateSnippet('আমাদের মূল প্রস্তাবনা হলো...')">
                  + প্রস্তাবনা
                </button>
                <button class="btn btn-secondary btn-sm" onclick="window.app.insertDebateSnippet('বিরোধী দলের বক্তব্যের খণ্ডনে...')">
                  + যুক্তিখণ্ডন
                </button>
                <button class="btn btn-secondary btn-sm" onclick="window.app.insertDebateSnippet('বাস্তব তথ্য ও পরিসংখ্যান:')">
                  + পরিসংখ্যান
                </button>
              </div>
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <span id="handnote-save-indicator" style="font-size:0.8rem; color:#16a34a; font-weight:700;">
                  ✓ ${isBn ? 'স্বয়ংক্রিয়ভাবে সংরক্ষিত' : 'Auto-saved'}
                </span>
                <button class="btn btn-primary btn-sm" onclick="window.app.saveTextNotes()">
                  ${getSvg("check", 14)} ${isBn ? 'সংরক্ষণ করুন' : 'Save Notes'}
                </button>
              </div>
            </div>
            <textarea class="handnote-textarea" id="handnote-text-input" placeholder="${isBn ? 'এখানে আপনার বক্তব্যের মূল যুক্তি, তথ্য, উদ্ধৃতি এবং খণ্ডন পয়েন্ট লিখুন (সম্পূর্ণ গোপন ও নিরাপদ)...' : 'Draft your debate speech points, arguments, quotes and rebuttals here...'}" oninput="window.app.onHandnoteTextInput()">${noteData.text}</textarea>
          </div>
        </div>

        <!-- Tab 2: Canvas Board -->
        <div id="handnote-tab-canvas" class="handnote-tab-content" style="display:none;">
          <div class="handnote-canvas-wrapper">
            <div class="canvas-toolbar">
              <button class="canvas-tool-btn active" id="canvas-tool-pencil" onclick="window.app.setCanvasTool('pencil')">
                ✏️ ${isBn ? 'পেন্সিল' : 'Pencil'}
              </button>
              <button class="canvas-tool-btn" id="canvas-tool-eraser" onclick="window.app.setCanvasTool('eraser')">
                🧹 ${isBn ? 'ইরেজার' : 'Eraser'}
              </button>

              <div style="height:20px; width:1px; background:#cbd5e1; margin:0 0.4rem;"></div>

              <div style="display:flex; align-items:center; gap:0.4rem;">
                <span class="color-dot active" style="background:#0f172a;" onclick="window.app.setCanvasColor('#0f172a', this)" title="Black"></span>
                <span class="color-dot" style="background:#2563eb;" onclick="window.app.setCanvasColor('#2563eb', this)" title="Blue"></span>
                <span class="color-dot" style="background:#dc2626;" onclick="window.app.setCanvasColor('#dc2626', this)" title="Red"></span>
                <span class="color-dot" style="background:#16a34a;" onclick="window.app.setCanvasColor('#16a34a', this)" title="Green"></span>
                <span class="color-dot" style="background:#9333ea;" onclick="window.app.setCanvasColor('#9333ea', this)" title="Purple"></span>
                <span class="color-dot" style="background:#d97706;" onclick="window.app.setCanvasColor('#d97706', this)" title="Amber"></span>
              </div>

              <div style="height:20px; width:1px; background:#cbd5e1; margin:0 0.4rem;"></div>

              <select class="form-control form-control-sm" style="width:110px;" onchange="window.app.setCanvasLineWidth(this.value)">
                <option value="2">${isBn ? 'চিকন (2px)' : 'Fine (2px)'}</option>
                <option value="5" selected>${isBn ? 'মাঝারি (5px)' : 'Medium (5px)'}</option>
                <option value="10">${isBn ? 'পুরু (10px)' : 'Thick (10px)'}</option>
                <option value="22">${isBn ? 'হাইলাইটার' : 'Highlighter'}</option>
              </select>

              <div style="margin-left:auto; display:flex; gap:0.4rem; flex-wrap:wrap;">
                <button class="btn btn-secondary btn-sm" onclick="window.app.clearHandnoteCanvas()">
                  ${getSvg("trash", 14)} ${isBn ? 'মুছে ফেলুন' : 'Clear'}
                </button>
                <button class="btn btn-secondary btn-sm" onclick="window.app.downloadHandnoteCanvas()">
                  ${getSvg("download", 14)} ${isBn ? 'ডাউনলোড' : 'Download'}
                </button>
                <button class="btn btn-primary btn-sm" onclick="window.app.saveHandnoteCanvas()">
                  ${getSvg("check", 14)} ${isBn ? 'ক্যানভাস সংরক্ষণ' : 'Save Drawing'}
                </button>
              </div>
            </div>

            <canvas id="handnote-canvas" width="1100" height="520"></canvas>
          </div>
        </div>

        <!-- Tab 3: Debate Matrix / Flowsheet -->
        <div id="handnote-tab-matrix" class="handnote-tab-content" style="display:none;">
          <div class="matrix-card">
            <div style="padding:1.25rem 1.5rem; background:#f8fafc; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
              <div>
                <h3 style="margin:0; font-size:1.1rem; font-weight:800; color:#091224;">
                  ${isBn ? 'বিতর্ক যুক্তি ও পাল্টা যুক্তি ম্যাট্রিক্স (Debate Matrix)' : 'Debate Argument & Rebuttal Flowsheet'}
                </h3>
                <p style="margin:0.2rem 0 0 0; font-size:0.8rem; color:#64748b;">
                  ${isBn ? 'প্রতিটি বক্তার মূল পয়েন্ট, সম্ভাব্য বিরোধী আপত্তি এবং খণ্ডন কৌশল টেবিল আকারে সাজান।' : 'Structure points, anticipated counter-arguments, and attack angles in a matrix.'}
                </p>
              </div>
              <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-secondary btn-sm" onclick="window.app.addMatrixRow()">
                  ${getSvg("plus", 14)} ${isBn ? 'সারি যোগ করুন' : 'Add Row'}
                </button>
                <button class="btn btn-primary btn-sm" onclick="window.app.saveMatrixData()">
                  ${getSvg("check", 14)} ${isBn ? 'ম্যাট্রিক্স সংরক্ষণ' : 'Save Matrix'}
                </button>
              </div>
            </div>

            <div style="overflow-x:auto;">
              <table class="matrix-table" id="debate-matrix-table">
                <thead>
                  <tr>
                    <th style="width:160px;">${isBn ? 'বিতর্কের পর্যায় / বক্তা' : 'Speaker / Stage'}</th>
                    <th>${isBn ? 'আমাদের মূল যুক্তি ও লক্ষ্য' : 'Our Argument & Goal'}</th>
                    <th>${isBn ? 'সম্ভাব্য বিরোধী আপত্তি' : 'Anticipated Opp Objection'}</th>
                    <th>${isBn ? 'তাত্ক্ষণিক খণ্ডন কৌশল' : 'Direct Rebuttal Strategy'}</th>
                    <th>${isBn ? 'তথ্যসূত্র ও উদাহরণ' : 'Evidence / Precedent'}</th>
                    <th style="width:50px;"></th>
                  </tr>
                </thead>
                <tbody id="matrix-tbody">
                  <!-- Generated by matrix loader -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Cache canvas data and matrix data
    this.handnoteCanvasData = noteData.canvas;
    this.handnoteMatrixData = noteData.matrix;
    this.loadMatrixRows(noteData.matrix);
  }

  switchHandnoteTab(tabId) {
    ['text', 'canvas', 'matrix'].forEach(t => {
      const el = document.getElementById(`handnote-tab-${t}`);
      const btn = document.getElementById(`btn-tab-${t}`);
      if (el) el.style.display = t === tabId ? 'block' : 'none';
      if (btn) {
        if (t === tabId) btn.classList.add('active');
        else btn.classList.remove('active');
      }
    });

    if (tabId === 'canvas' && !this.canvasInitialized) {
      this.initHandnoteCanvas();
    }
  }

  insertDebateSnippet(snippet) {
    const textarea = document.getElementById('handnote-text-input');
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    textarea.value = text.substring(0, start) + snippet + ' ' + text.substring(end);
    textarea.focus();
    this.onHandnoteTextInput();
  }

  onHandnoteTextInput() {
    const ind = document.getElementById('handnote-save-indicator');
    if (ind) {
      ind.textContent = window.i18n.lang === 'bn' ? 'টাইপ করা হচ্ছে...' : 'Typing...';
      ind.style.color = '#ca8a04';
    }
    clearTimeout(this.handnoteDebounce);
    this.handnoteDebounce = setTimeout(() => {
      this.saveTextNotes(true);
    }, 1800);
  }

  async saveTextNotes(isSilent = false) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const text = document.getElementById('handnote-text-input')?.value || '';
    try {
      await window.api.post('/api/notes/save', {
        title: 'Speech Notes',
        content: text,
        category: 'general'
      });
      const ind = document.getElementById('handnote-save-indicator');
      if (ind) {
        ind.textContent = isBn ? '✓ স্বয়ংক্রিয়ভাবে সংরক্ষিত' : '✓ Auto-saved';
        ind.style.color = '#16a34a';
      }
      if (!isSilent) {
        showToast(isBn ? 'হ্যান্ডনোট টেক্সট সংরক্ষিত হয়েছে!' : 'Handnote text saved successfully!', 'success');
      }
    } catch (e) {
      if (!isSilent) showToast(e.message, 'error');
    }
  }

  initHandnoteCanvas() {
    const canvas = document.getElementById('handnote-canvas');
    if (!canvas) return;

    // Adjust canvas resolution to parent width
    const rect = canvas.getBoundingClientRect();
    if (rect.width > 0) {
      canvas.width = rect.width;
    }

    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 5;

    this.canvasCtx = ctx;
    this.canvasColor = '#0f172a';
    this.canvasLineWidth = 5;
    this.canvasTool = 'pencil';
    this.isDrawing = false;
    this.canvasInitialized = true;

    // Load existing canvas state if present
    if (this.handnoteCanvasData && this.handnoteCanvasData.startsWith('data:image')) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
      img.src = this.handnoteCanvasData;
    }

    // Pointer event listeners (supporting Mouse, Touch, Stylus seamlessly)
    const getPos = (e) => {
      const b = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - b.left,
        y: clientY - b.top
      };
    };

    const startDraw = (e) => {
      e.preventDefault();
      this.isDrawing = true;
      const pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    };

    const draw = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pos = getPos(e);
      if (this.canvasTool === 'eraser') {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = 20;
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        ctx.restore();
      } else {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = this.canvasColor;
        ctx.lineWidth = this.canvasLineWidth;
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
      }
    };

    const stopDraw = () => {
      if (this.isDrawing) {
        this.isDrawing = false;
        ctx.closePath();
      }
    };

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDraw);

    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    window.addEventListener('touchend', stopDraw);
  }

  setCanvasColor(color, el) {
    this.canvasColor = color;
    this.canvasTool = 'pencil';
    document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    if (el) el.classList.add('active');
    document.getElementById('canvas-tool-pencil')?.classList.add('active');
    document.getElementById('canvas-tool-eraser')?.classList.remove('active');
  }

  setCanvasLineWidth(width) {
    this.canvasLineWidth = parseInt(width);
  }

  setCanvasTool(tool) {
    this.canvasTool = tool;
    document.getElementById('canvas-tool-pencil')?.classList.toggle('active', tool === 'pencil');
    document.getElementById('canvas-tool-eraser')?.classList.toggle('active', tool === 'eraser');
  }

  clearHandnoteCanvas() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    if (!confirm(isBn ? 'আপনি কি ড্রয়িং ক্যানভাস সম্পূর্ণ মুছে ফেলতে চান?' : 'Clear the entire drawing canvas?')) return;
    const canvas = document.getElementById('handnote-canvas');
    if (canvas && this.canvasCtx) {
      this.canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  downloadHandnoteCanvas() {
    const canvas = document.getElementById('handnote-canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `Debate_Handnote_Drawing_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  async saveHandnoteCanvas() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const canvas = document.getElementById('handnote-canvas');
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    try {
      await window.api.post('/api/notes/save', {
        title: 'Drawing Canvas',
        content: dataUrl,
        category: 'canvas'
      });
      showToast(isBn ? 'ড্রয়িং সফলভাবে ক্লাউডে সংরক্ষিত হয়েছে!' : 'Drawing saved to cloud successfully!', 'success');
    } catch (e) {
      showToast(e.message, 'error');
    }
  }

  loadMatrixRows(matrixJson) {
    const tbody = document.getElementById('matrix-tbody');
    if (!tbody) return;

    let rows = [];
    try {
      if (matrixJson && matrixJson.startsWith('[')) {
        rows = JSON.parse(matrixJson);
      }
    } catch (e) {}

    if (!rows || rows.length === 0) {
      rows = [
        { stage: '1ম বক্তা (গঠনমূলক)', point: '', objection: '', rebuttal: '', evidence: '' },
        { stage: '2য় বক্তা (বিস্তার)', point: '', objection: '', rebuttal: '', evidence: '' },
        { stage: '3য় বক্তা (খণ্ডন ও রক্ষা)', point: '', objection: '', rebuttal: '', evidence: '' }
      ];
    }

    tbody.innerHTML = '';
    rows.forEach(r => this.appendMatrixRowElement(r));
  }

  appendMatrixRowElement(r = {}) {
    const tbody = document.getElementById('matrix-tbody');
    if (!tbody) return;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="text" class="form-control form-control-sm m-stage" value="${r.stage || ''}" placeholder="পর্যায়..." /></td>
      <td><textarea class="matrix-input m-point" placeholder="আমাদের পয়েন্ট...">${r.point || ''}</textarea></td>
      <td><textarea class="matrix-input m-obj" placeholder="সম্ভাব্য আপত্তি...">${r.objection || ''}</textarea></td>
      <td><textarea class="matrix-input m-reb" placeholder="খণ্ডন পদ্ধতি...">${r.rebuttal || ''}</textarea></td>
      <td><textarea class="matrix-input m-evid" placeholder="তথ্যসূত্র / প্রমাণ...">${r.evidence || ''}</textarea></td>
      <td style="text-align:center; vertical-align:middle;">
        <button class="win-btn win-btn-subtle" style="color:#ef4444;" onclick="this.closest('tr').remove()" title="Delete Row">
          ${getSvg("trash", 14)}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  }

  addMatrixRow() {
    this.appendMatrixRowElement({ stage: '', point: '', objection: '', rebuttal: '', evidence: '' });
  }

  async saveMatrixData() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const tbody = document.getElementById('matrix-tbody');
    if (!tbody) return;

    const rows = [];
    tbody.querySelectorAll('tr').forEach(tr => {
      rows.push({
        stage: tr.querySelector('.m-stage')?.value || '',
        point: tr.querySelector('.m-point')?.value || '',
        objection: tr.querySelector('.m-obj')?.value || '',
        rebuttal: tr.querySelector('.m-reb')?.value || '',
        evidence: tr.querySelector('.m-evid')?.value || ''
      });
    });

    try {
      await window.api.post('/api/notes/save', {
        title: 'Debate Matrix Flowsheet',
        content: JSON.stringify(rows),
        category: 'matrix'
      });
      showToast(isBn ? 'বিতর্ক ম্যাট্রিক্স সফলভাবে সংরক্ষিত হয়েছে!' : 'Debate matrix saved successfully!', 'success');
    } catch (e) {
      showToast(e.message, 'error');
    }
  }

  // ==========================================================================
  // ADJUDICATOR SOS & IN-APP MESSAGING
  // ==========================================================================
  async renderJudgeMessages(container) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    let msgs = [];
    try {
      const res = await window.api.get('/api/messages/my-messages');
      msgs = res.messages || [];
    } catch (e) {
      console.warn("Could not load messages:", e);
    }

    let html = `
      <div style="max-width:850px; margin:0 auto; display:flex; flex-direction:column; gap:1.5rem;">
        <div class="win-glass" style="padding:1.5rem 1.75rem; border-radius:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem;">
            <div>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span class="badge badge-gold">🚨 ${isBn ? 'বিচারক জরুরি সহায়তা' : 'JUDGE SOS & MESSAGING'}</span>
              </div>
              <h2 style="font-size:1.35rem; font-weight:800; color:#091224; margin:0.35rem 0 0 0;">
                ${isBn ? 'ট্যাব পরিচালকদের সাথে তাৎক্ষণিক যোগাযোগ' : 'Direct Message Tab Directors'}
              </h2>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="window.app.renderJudgeMessages(document.getElementById('main-view'))">
              🔄 ${isBn ? 'রিফ্রেশ' : 'Refresh'}
            </button>
          </div>

          <!-- Compose Message Form -->
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:1.25rem; display:flex; flex-direction:column; gap:0.85rem;">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
              <div>
                <label class="form-label">${isBn ? 'ম্যাচ বা রুম নম্বর (প্রযোজ্য ক্ষেত্রে)' : 'Match / Room Number'}</label>
                <input type="text" class="form-control" id="judge-msg-room" placeholder="${isBn ? 'যেমন: Room 2 / Match 4' : 'e.g. Room 2'}" />
              </div>
              <div>
                <label class="form-label">${isBn ? 'জরুরি মাত্রা' : 'Urgency'}</label>
                <select class="form-control" id="judge-msg-urgent">
                  <option value="0">${isBn ? 'সাধারণ জিজ্ঞাসা (Normal)' : 'Normal Inquiry'}</option>
                  <option value="1" style="color:#dc2626; font-weight:700;">🚨 ${isBn ? 'জরুরি এসওএস (Urgent SOS)' : 'Urgent SOS'}</option>
                </select>
              </div>
            </div>
            <div>
              <label class="form-label">${isBn ? 'আপনার বার্তা বা সমস্যা' : 'Your Message / Inquiry'}</label>
              <textarea class="form-control" id="judge-msg-body" rows="3" placeholder="${isBn ? 'ট্যাব ডিরেক্টরকে জানানোর জন্য এখানে লিখুন (স্কোরশিট সমস্যা, বক্তা অনুপস্থিতি, ইত্যাদি)...' : 'Describe your query or issue for Tab Directors...'}" style="resize:vertical;"></textarea>
            </div>
            <div style="text-align:right;">
              <button class="btn btn-primary" onclick="window.app.sendJudgeMessage()">
                ${getSvg("message", 14)} ${isBn ? 'বার্তা প্রেরণ করুন' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>

        <!-- History of Messages -->
        <div class="win-glass" style="padding:1.5rem 1.75rem; border-radius:16px;">
          <h3 style="font-size:1.1rem; font-weight:800; color:#091224; margin:0 0 1rem 0;">
            ${isBn ? 'পূর্ববর্তী বার্তাসমূহ ও উত্তর' : 'Message History & Replies'}
          </h3>

          ${msgs.length === 0 ? `
            <div style="text-align:center; padding:2rem; color:#64748b;">
              ${isBn ? 'কোনো বার্তা এখনও প্রেরণ করা হয়নি।' : 'No messages sent yet.'}
            </div>
          ` : `
            <div style="display:flex; flex-direction:column; gap:1rem;">
              ${msgs.map(m => `
                <div class="message-card ${m.is_urgent ? 'urgent' : ''}">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                      ${m.is_urgent ? `<span class="badge badge-red" style="font-weight:800;">🚨 URGENT SOS</span>` : `<span class="badge badge-blue">QUERY</span>`}
                      ${m.room_info ? `<span class="badge badge-gold">${m.room_info}</span>` : ''}
                    </div>
                    <span style="font-size:0.75rem; color:#64748b;">${m.timestamp ? m.timestamp.slice(0, 19).replace('T', ' ') : ''}</span>
                  </div>
                  <div class="message-bubble-judge">
                    <strong>${isBn ? 'আমার বার্তা:' : 'My Query:'}</strong> ${m.message}
                  </div>
                  ${m.admin_reply ? `
                    <div class="message-bubble-admin">
                      <strong>🛡️ ${isBn ? 'ট্যাব ডিরেক্টর উত্তর:' : 'Tab Director Reply:'}</strong> ${m.admin_reply}
                    </div>
                  ` : `
                    <div style="font-size:0.78rem; color:#d97706; font-weight:700; margin-top:0.25rem;">
                      ⏳ ${isBn ? 'ট্যাব ডিরেক্টরের উত্তরের অপেক্ষায়...' : 'Awaiting Tab Director response...'}
                    </div>
                  `}
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  async sendJudgeMessage() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const message = document.getElementById('judge-msg-body')?.value;
    const room_info = document.getElementById('judge-msg-room')?.value;
    const is_urgent = document.getElementById('judge-msg-urgent')?.value === '1';

    if (!message || !message.trim()) {
      showToast(isBn ? 'অনুগ্রহ করে বার্তা লিখুন।' : 'Please enter a message.', 'warning');
      return;
    }

    try {
      await window.api.post('/api/messages/send', {
        message: message.trim(),
        room_info: room_info ? room_info.trim() : null,
        is_urgent: is_urgent
      });
      showToast(isBn ? 'বার্তা সফলভাবে প্রেরণ করা হয়েছে!' : 'Message sent to Tab Directors successfully!', 'success');
      this.renderJudgeMessages(document.getElementById('main-view'));
    } catch (e) {
      showToast(e.message, 'error');
    }
  }

  async renderAdminMessages(container) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    let msgs = [];
    try {
      const res = await window.api.get('/api/messages/admin/all');
      msgs = res.messages || [];
    } catch (e) {
      console.warn("Could not load messages:", e);
    }

    let html = `
      <div style="display:flex; flex-direction:column; gap:1.5rem;">
        <div class="win-glass" style="padding:1.5rem 1.75rem; border-radius:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span class="badge badge-gold">🛡️ ${isBn ? 'ট্যাব কন্ট্রোল' : 'ADMIN SOS HUB'}</span>
                <span class="badge badge-blue">${msgs.length} ${isBn ? 'টি বার্তা' : 'Messages'}</span>
              </div>
              <h2 style="font-size:1.35rem; font-weight:800; color:#091224; margin:0.35rem 0 0 0;">
                ${isBn ? 'বিচারকদের সহায়তা ও এসওএস কেন্দ্র' : 'Judge Inquiries & Urgent SOS Messages'}
              </h2>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="window.app.renderAdminMessages(document.getElementById('main-view'))">
              🔄 ${isBn ? 'রিফ্রেশ' : 'Refresh'}
            </button>
          </div>
        </div>

        <div class="win-glass" style="padding:1.5rem 1.75rem; border-radius:16px;">
          ${msgs.length === 0 ? `
            <div style="text-align:center; padding:3rem; color:#64748b;">
              ${isBn ? 'বিচারকদের পক্ষ থেকে বর্তমানে কোনো বার্তা নেই।' : 'No messages from judges at this time.'}
            </div>
          ` : `
            <div style="display:flex; flex-direction:column; gap:1.25rem;">
              ${msgs.map(m => `
                <div class="message-card ${m.is_urgent ? 'urgent' : ''}">
                  <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem;">
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                      ${m.is_urgent ? `<span class="badge badge-red" style="font-weight:800;">🚨 URGENT SOS</span>` : `<span class="badge badge-blue">QUERY</span>`}
                      <strong>${m.judge_name}</strong>
                      ${m.judge_phone ? `<span style="font-size:0.8rem; color:#64748b;">(${m.judge_phone}) ${window.getWhatsAppButton ? window.getWhatsAppButton(m.judge_phone, m.judge_name) : ''}</span>` : ''}
                      ${m.room_info ? `<span class="badge badge-gold">${m.room_info}</span>` : ''}
                    </div>
                    <span style="font-size:0.75rem; color:#64748b;">${m.timestamp ? m.timestamp.slice(0, 19).replace('T', ' ') : ''}</span>
                  </div>

                  <div class="message-bubble-judge">
                    ${m.message}
                  </div>

                  ${m.admin_reply ? `
                    <div class="message-bubble-admin">
                      <strong>✓ ${isBn ? 'আপনার উত্তর:' : 'Your Reply:'}</strong> ${m.admin_reply}
                    </div>
                  ` : `
                    <div style="margin-top:0.75rem; display:flex; gap:0.5rem;">
                      <input type="text" class="form-control form-control-sm" id="admin-reply-input-${m.id}" placeholder="${isBn ? 'বিচারককে তাৎক্ষণিক উত্তর দিন...' : 'Type direct reply to judge...'}" />
                      <button class="btn btn-primary btn-sm" onclick="window.app.sendAdminReply(${m.id})">
                        ${isBn ? 'উত্তর দিন' : 'Reply'}
                      </button>
                    </div>
                  `}
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  async sendAdminReply(messageId) {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const input = document.getElementById(`admin-reply-input-${messageId}`);
    if (!input || !input.value.trim()) {
      showToast(isBn ? 'উত্তরের টেক্সট লিখুন।' : 'Please enter a reply.', 'warning');
      return;
    }

    try {
      await window.api.post(`/api/messages/admin/${messageId}/reply`, {
        reply: input.value.trim()
      });
      showToast(isBn ? 'উত্তর সফলভাবে প্রেরণ করা হয়েছে!' : 'Reply sent successfully!', 'success');
      this.renderAdminMessages(document.getElementById('main-view'));
    } catch (e) {
      showToast(e.message, 'error');
    }
  }

  // ==========================================================================
  // CELEBRATION MODAL & CONFETTI ENGINE
  // ==========================================================================
  triggerCelebration(winnerName, s1 = '', s2 = '', details = '') {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    if (window.audioService && window.audioService.playBell) {
      window.audioService.playBell(2);
    }

    // Remove existing if any
    document.getElementById('celebration-overlay')?.remove();

    const modalHtml = `
      <div class="celebration-backdrop" id="celebration-overlay" onclick="document.getElementById('celebration-overlay').remove()">
        <canvas id="confetti-canvas"></canvas>
        <div class="celebration-box" onclick="event.stopPropagation()">
          <div style="display:flex; justify-content:center; gap:0.75rem; margin-bottom:0.75rem;">
            <img src="/static/img/hghsdc.png" style="width:58px; height:58px; object-fit:contain; border-radius:50%; border:2px solid #eab308; background:#fff;" />
            <img src="/static/img/hghs.png" style="width:58px; height:58px; object-fit:contain; border-radius:50%; border:2px solid #dc2626; background:#fff;" />
          </div>
          <div style="font-size:2.8rem; margin-bottom:0.25rem;">🏆</div>
          <div style="font-size:0.85rem; font-weight:800; letter-spacing:0.1em; color:#ca8a04; text-transform:uppercase; margin-bottom:0.25rem;">
            ${isBn ? 'চ্যাম্পিয়ন দল ঘোষণা' : 'CHAMPIONSHIP DECLARATION'}
          </div>
          <h2 style="font-size:2.1rem; font-weight:800; color:#091224; margin:0 0 0.5rem 0;">
            ${winnerName}
          </h2>
          <p style="font-size:0.95rem; color:#475569; margin:0 0 1.25rem 0;">
            ${details || (isBn ? 'ঐতিহ্যবাহী বিতর্কে অবিস্মরণীয় পারফরম্যান্সের মাধ্যমে বিজয়ী হওয়ার গৌরব অর্জন করেছে।' : 'Crowned champion after an outstanding parliamentary debate.')}
          </p>
          ${(s1 || s2) ? `
            <div style="display:inline-flex; gap:1.5rem; background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:0.65rem 1.5rem; margin-bottom:1.5rem; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
              <div><span style="font-size:0.78rem; color:#64748b;">দল 1:</span> <strong>${s1}</strong></div>
              <div style="color:#cbd5e1;">|</div>
              <div><span style="font-size:0.78rem; color:#64748b;">দল 2:</span> <strong>${s2}</strong></div>
            </div>
          ` : ''}
          <div>
            <button class="btn btn-gold" style="padding:0.65rem 2.25rem; font-size:1rem; font-weight:800; border-radius:12px;" onclick="document.getElementById('celebration-overlay').remove()">
              🎉 ${isBn ? 'অভিনন্দন ও বন্ধ করুন' : 'Celebrate & Close'}
            </button>
          </div>
        </div>
      </div>
    `;

    let wrapper = document.createElement('div');
    wrapper.innerHTML = modalHtml;
    document.body.appendChild(wrapper.firstElementChild);

    this.runConfettiAnimation();
  }

  runConfettiAnimation() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const colors = ['#eab308', '#3b82f6', '#ef4444', '#10b981', '#a855f7', '#f97316'];
    const particles = [];

    for (let i = 0; i < 160; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        speed: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8
      });
    }

    let animationFrame;
    let frames = 0;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.y += p.speed;
        p.rotation += p.rotSpeed;
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      frames++;
      if (frames < 300 && document.getElementById('celebration-overlay')) {
        animationFrame = requestAnimationFrame(loop);
      }
    };

    loop();
  }

  // ==========================================================================
  // MANUAL BRACKET BUILDER (16 দল সরাসরি ম্যানুয়াল পেয়ারিং)
  // ==========================================================================
  async openManualBracketModal() {
    const isBn = window.i18n && window.i18n.lang === 'bn';

    // Fetch all approved teams
    let teams = [];
    try {
      const res = await window.api.get("/api/teams");
      teams = (res.teams || []).filter(t => t.status === "APPROVED");
    } catch (e) {
      showToast(e.message, "error");
      return;
    }

    if (teams.length < 2) {
      showToast(isBn ? "ব্র্যাকেট তৈরির জন্য পর্যাপ্ত অনুমোদিত দল নেই।" : "Not enough approved teams for bracket.", "error");
      return;
    }

    // Fetch existing bracket matches if available
    let existingR16 = [];
    try {
      const bRes = await window.api.get("/api/tournament/bracket");
      if (bRes && bRes.matches) {
        existingR16 = bRes.matches.filter(m => m.round_number === 1);
      }
    } catch (e) {}

    // Build team options
    const makeOptions = (selectedId) => {
      let opts = `<option value="">-- ${isBn ? 'দল নির্বাচন করুন' : 'Select Team'} --</option>`;
      teams.forEach(t => {
        const sel = t.id === selectedId ? 'selected' : '';
        opts += `<option value="${t.id}" ${sel}>${t.name}${t.custom_name ? ` (${t.custom_name})` : ''} - ${t.school_organization || 'Official'}</option>`;
      });
      return opts;
    };

    let modalHtml = `
      <div class="modal-backdrop" id="manual-bracket-modal">
        <div class="modal-dialog" style="max-width: 920px; max-height: 90vh; display:flex; flex-direction:column;">
          <div class="modal-header">
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <img src="/static/img/hghsdc.png" style="width:36px; height:36px; object-fit:contain; border-radius:50%; border:1.5px solid #eab308; background:#fff;" />
              <div>
                <h3 class="modal-title" style="margin:0;">
                  ${isBn ? 'ম্যানুয়ালি ব্র্যাকেট নির্ধারণ (16 দল • রাউন্ড অব 16)' : 'Manual 16-Team Bracket Builder'}
                </h3>
                <p style="margin:0.2rem 0 0 0; font-size:0.8rem; color:#64748b;">
                  ${isBn ? 'রাউন্ড অব 16-এর 8টি ম্যাচের দলসমূহ নিজে নির্বাচন করুন অথবা স্বয়ংক্রিয় সাজান।' : 'Manually assign Team 1 and Team 2 for each of the 8 Round of 16 matches.'}
                </p>
              </div>
            </div>
            <button class="win-btn win-btn-subtle" onclick="document.getElementById('manual-bracket-modal').remove()">x</button>
          </div>

          <!-- Quick Action Bar -->
          <div style="padding:0.75rem 1.5rem; background:#f8fafc; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
              <button class="btn btn-secondary btn-sm" onclick="window.app.autoSequentialBracketPairs()">
                🔢 ${isBn ? 'ক্রমিক পেয়ার (1-2, 3-4...)' : 'Sequential (1-2, 3-4...)'}
              </button>
              <button class="btn btn-secondary btn-sm" onclick="window.app.autoRandomBracketPairs()">
                🎲 ${isBn ? 'র্যান্ডম ড্র ফিল' : 'Random Shuffle Fill'}
              </button>
              <button class="btn btn-secondary btn-sm" onclick="window.app.clearManualBracketPairs()">
                🧹 ${isBn ? 'সব খালি করুন' : 'Clear All'}
              </button>
            </div>
            <div id="manual-bracket-warning" style="font-size:0.82rem; font-weight:700; color:#16a34a;">
              ✓ ${isBn ? 'সকল ম্যাচ প্রস্তুত' : 'Ready to configure'}
            </div>
          </div>

          <div class="modal-body" style="overflow-y:auto; padding:1.25rem 1.5rem; flex:1;">
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem;" id="manual-bracket-grid">
              ${[1, 2, 3, 4, 5, 6, 7, 8].map(mNum => {
                const ex = existingR16.find(m => m.match_number === mNum);
                let defT1 = ex ? ex.team1_id : (teams[(mNum - 1) * 2] ? teams[(mNum - 1) * 2].id : '');
                let defT2 = ex ? ex.team2_id : (teams[(mNum - 1) * 2 + 1] ? teams[(mNum - 1) * 2 + 1].id : '');
                const halfName = mNum <= 4 ? (isBn ? 'বাম পুল (Left Pool)' : 'Left Pool') : (isBn ? 'ডান পুল (Right Pool)' : 'Right Pool');

                return `
                  <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:1rem; box-shadow:0 2px 6px rgba(0,0,0,0.02); border-left:4px solid ${mNum <= 4 ? '#2563eb' : '#059669'};">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.6rem;">
                      <span style="font-size:0.85rem; font-weight:800; color:#091224;">
                        ${isBn ? `ম্যাচ ${mNum}` : `Match ${mNum}`}
                      </span>
                      <span class="badge ${mNum <= 4 ? 'badge-blue' : 'badge-green'}" style="font-size:0.72rem;">
                        ${halfName}
                      </span>
                    </div>

                    <div style="display:flex; flex-direction:column; gap:0.5rem;">
                      <div>
                        <label style="font-size:0.78rem; font-weight:700; color:#166534; display:block; margin-bottom:0.2rem;">
                          ${isBn ? '1ম দল (সরকারি দল / Proposition)' : 'Team 1 (Government)'}
                        </label>
                        <select class="form-control form-control-sm manual-b-select" id="manual-m-${mNum}-t1" data-match="${mNum}" data-slot="1" onchange="window.app.validateManualBracketSelections()">
                          ${makeOptions(defT1)}
                        </select>
                      </div>

                      <div style="text-align:center; font-weight:800; color:#94a3b8; font-size:0.78rem;">
                        — VS —
                      </div>

                      <div>
                        <label style="font-size:0.78rem; font-weight:700; color:#991b1b; display:block; margin-bottom:0.2rem;">
                          ${isBn ? '2য় দল (বিরোধী দল / Opposition)' : 'Team 2 (Opposition)'}
                        </label>
                        <select class="form-control form-control-sm manual-b-select" id="manual-m-${mNum}-t2" data-match="${mNum}" data-slot="2" onchange="window.app.validateManualBracketSelections()">
                          ${makeOptions(defT2)}
                        </select>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="modal-footer" style="padding:1rem 1.5rem; background:#ffffff; border-top:1px solid #e2e8f0; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:0.82rem; color:#64748b;">
              ${isBn ? 'মোট 16টি দলকে 8টি ম্যাচে সঠিকভাবে নির্বাচন করুন।' : 'Pair exactly 16 teams into the 8 matches.'}
            </span>
            <div style="display:flex; gap:0.5rem;">
              <button class="btn btn-secondary" onclick="document.getElementById('manual-bracket-modal').remove()">
                ${isBn ? 'বাতিল' : 'Cancel'}
              </button>
              <button class="btn btn-primary" onclick="window.app.submitManualBracket()">
                ${getSvg("check", 14)} ${isBn ? 'সংরক্ষণ ও ব্র্যাকেট প্রয়োগ করুন' : 'Save & Apply Bracket'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.manualBracketTeams = teams;

    document.getElementById('manual-bracket-modal')?.remove();
    let div = document.createElement('div');
    div.innerHTML = modalHtml;
    document.body.appendChild(div.firstElementChild);

    this.validateManualBracketSelections();
  }

  validateManualBracketSelections() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const selects = document.querySelectorAll('.manual-b-select');
    const warning = document.getElementById('manual-bracket-warning');
    if (!selects || selects.length === 0) return;

    const chosen = [];
    let hasDuplicate = false;
    let missingCount = 0;

    selects.forEach(s => {
      const val = s.value;
      if (!val) {
        missingCount++;
        s.style.borderColor = '#cbd5e1';
      } else {
        if (chosen.includes(val)) {
          hasDuplicate = true;
          s.style.borderColor = '#ef4444';
          s.style.background = '#fef2f2';
        } else {
          chosen.push(val);
          s.style.borderColor = '#cbd5e1';
          s.style.background = '#ffffff';
        }
      }
    });

    if (hasDuplicate) {
      if (warning) {
        warning.textContent = isBn ? '⚠️ একই দল একাধিক ম্যাচে নির্বাচিত হয়েছে!' : '⚠️ Duplicate team selected in multiple matches!';
        warning.style.color = '#dc2626';
      }
    } else if (missingCount > 0) {
      if (warning) {
        warning.textContent = isBn ? `⏳ আরও ${missingCount}টি দল নির্বাচন বাকি আছে` : `⏳ ${missingCount} team slots remaining`;
        warning.style.color = '#ca8a04';
      }
    } else {
      if (warning) {
        warning.textContent = isBn ? '✓ 16টি দল সম্পূর্ণ ও সঠিকভাবে পেয়ার হয়েছে' : '✓ 16 teams completely and uniquely paired';
        warning.style.color = '#16a34a';
      }
    }
  }

  autoSequentialBracketPairs() {
    if (!this.manualBracketTeams) return;
    const teams = this.manualBracketTeams;
    for (let mNum = 1; mNum <= 8; mNum++) {
      const t1 = teams[(mNum - 1) * 2];
      const t2 = teams[(mNum - 1) * 2 + 1];
      const s1 = document.getElementById(`manual-m-${mNum}-t1`);
      const s2 = document.getElementById(`manual-m-${mNum}-t2`);
      if (s1 && t1) s1.value = t1.id;
      if (s2 && t2) s2.value = t2.id;
    }
    this.validateManualBracketSelections();
  }

  autoRandomBracketPairs() {
    if (!this.manualBracketTeams) return;
    const shuffled = [...this.manualBracketTeams].sort(() => Math.random() - 0.5);
    for (let mNum = 1; mNum <= 8; mNum++) {
      const t1 = shuffled[(mNum - 1) * 2];
      const t2 = shuffled[(mNum - 1) * 2 + 1];
      const s1 = document.getElementById(`manual-m-${mNum}-t1`);
      const s2 = document.getElementById(`manual-m-${mNum}-t2`);
      if (s1 && t1) s1.value = t1.id;
      if (s2 && t2) s2.value = t2.id;
    }
    this.validateManualBracketSelections();
  }

  clearManualBracketPairs() {
    document.querySelectorAll('.manual-b-select').forEach(s => s.value = '');
    this.validateManualBracketSelections();
  }

  async submitManualBracket() {
    const isBn = window.i18n && window.i18n.lang === 'bn';
    const matches = [];
    const usedTeams = new Set();

    for (let mNum = 1; mNum <= 8; mNum++) {
      const s1 = document.getElementById(`manual-m-${mNum}-t1`);
      const s2 = document.getElementById(`manual-m-${mNum}-t2`);
      const t1Val = s1 ? parseInt(s1.value) : 0;
      const t2Val = s2 ? parseInt(s2.value) : 0;

      if (!t1Val || !t2Val) {
        showToast(isBn ? `ম্যাচ ${mNum}-এর উভয় দল নির্বাচন করুন।` : `Please select both teams for Match ${mNum}.`, "error");
        return;
      }

      if (t1Val === t2Val) {
        showToast(isBn ? `ম্যাচ ${mNum}-এ একই দল উভয় পক্ষে থাকতে পারে না।` : `Match ${mNum} cannot have the same team on both sides.`, "error");
        return;
      }

      if (usedTeams.has(t1Val) || usedTeams.has(t2Val)) {
        showToast(isBn ? "একটি দল কেবল একটি ম্যাচেই অংশগ্রহণ করতে পারে। একই দল পুনরাবৃত্তি হয়েছে।" : "Duplicate team detected. Each team can only play in one match.", "error");
        return;
      }

      usedTeams.add(t1Val);
      usedTeams.add(t2Val);

      matches.push({
        match_number: mNum,
        team1_id: t1Val,
        team2_id: t2Val
      });
    }

    try {
      const res = await window.api.post("/api/tournament/bracket/manual-setup", { matches });
      document.getElementById("manual-bracket-modal")?.remove();
      showToast(res.message || (isBn ? "ম্যানুয়াল ব্র্যাকেট সফলভাবে প্রয়োগ হয়েছে!" : "Manual bracket applied successfully!"), "success");
      await this.loadBracket();
      this.render();
    } catch (e) {
      showToast(e.message, "error");
    }
  }
}

window.app = new DebateApp();
document.addEventListener("DOMContentLoaded", () => window.app.init());
