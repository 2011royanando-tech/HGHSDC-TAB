// Custom Smartphone-Style Debate Countdown Timer with Manual Tactile Bell & Keyboard Dash Control

class DebateTimer {
  constructor() {
    this.totalSeconds = 180; // Default 3:00
    this.remainingSeconds = 180;
    this.isRunning = false;
    this.timerInterval = null;
    this.currentSpeaker = "1st Speaker";
    this.autoBell = false; // Disabled by default as requested: no automatic bells
    this.isFullscreen = false;
    this.isKeyDownHeld = false;
    this.tapTimer = null;
    this.holdTimer = null;
    this.isContinuousRinging = false;
  }

  init(settings) {
    if (settings && settings.speaking_time_seconds) {
      this.totalSeconds = settings.speaking_time_seconds;
    }
    this.reset();
  }

  setCustomTime(minutes, seconds) {
    this.pause();
    const m = Math.max(0, parseInt(minutes) || 0);
    const s = Math.max(0, Math.min(59, parseInt(seconds) || 0));
    this.totalSeconds = Math.max(1, (m * 60) + s);
    this.remainingSeconds = this.totalSeconds;
    this.updateUI();
  }

  start() {
    if (this.isRunning) return;
    window.debateAudio.init();
    this.isRunning = true;
    this.timerInterval = setInterval(() => this.tick(), 1000);
    this.updateUI();
  }

  pause() {
    this.isRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.updateUI();
  }

  reset() {
    this.pause();
    this.remainingSeconds = this.totalSeconds;
    this.updateUI();
  }

  setSpeaker(name) {
    this.currentSpeaker = name;
    this.updateUI();
  }

  tick() {
    if (this.remainingSeconds > -60) {
      this.remainingSeconds--;
    }
    this.updateUI();
  }

  // Tactile Bell Handlers
  onBellPointerDown(e) {
    if (e) e.preventDefault();
    window.debateAudio.init();

    // Start hold detector for continuous ringing
    this.holdTimer = setTimeout(() => {
      this.isContinuousRinging = true;
      window.debateAudio.startContinuous();
      const bellBtn = document.getElementById("manual-bell-btn");
      if (bellBtn) bellBtn.classList.add("ringing-active");
    }, 320);
  }

  onBellPointerUp(e) {
    if (e) e.preventDefault();
    if (this.holdTimer) {
      clearTimeout(this.holdTimer);
      this.holdTimer = null;
    }

    const bellBtn = document.getElementById("manual-bell-btn");
    if (bellBtn) bellBtn.classList.remove("ringing-active");

    if (this.isContinuousRinging) {
      this.isContinuousRinging = false;
      window.debateAudio.stopContinuous();
    } else {
      // Short tap detected — check for double tap vs single tap
      if (this.tapTimer) {
        // Double tap!
        clearTimeout(this.tapTimer);
        this.tapTimer = null;
        window.debateAudio.ringTwice();
      } else {
        // Single tap wait window
        this.tapTimer = setTimeout(() => {
          this.tapTimer = null;
          window.debateAudio.ringOnce();
        }, 220);
      }
    }
  }

  formatTime(secs) {
    const isNeg = secs < 0;
    const absSecs = Math.abs(secs);
    const m = Math.floor(absSecs / 60);
    const s = absSecs % 60;
    const str = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}` ;
    return isNeg ? `-${str}` : str;
  }

  toggleFullscreen() {
    const timerCard = document.getElementById("timer-container");
    if (!timerCard) return;

    if (!document.fullscreenElement) {
      timerCard.requestFullscreen().catch(err => {
        console.warn("Fullscreen request failed:", err);
      });
      this.isFullscreen = true;
    } else {
      document.exitFullscreen();
      this.isFullscreen = false;
    }
    this.updateUI();
  }

  updateUI() {
    const displayEl = document.getElementById("timer-digits");
    const fillEl = document.getElementById("timer-progress-fill");
    const speakerEl = document.getElementById("timer-speaker-name");
    const startBtn = document.getElementById("timer-start-btn");

    if (displayEl) {
      displayEl.textContent = this.formatTime(this.remainingSeconds);
      if (this.remainingSeconds <= 0) {
        displayEl.style.color = "#dc2626";
      } else if (this.remainingSeconds <= 30) {
        displayEl.style.color = "#b45309";
      } else {
        displayEl.style.color = "var(--brand-navy)";
      }
    }

    if (fillEl) {
      const pct = Math.max(0, Math.min(100, (this.remainingSeconds / this.totalSeconds) * 100));
      fillEl.style.width = `${pct}%`;
      if (this.remainingSeconds <= 0) {
        fillEl.style.backgroundColor = "#dc2626";
      } else if (this.remainingSeconds <= 30) {
        fillEl.style.backgroundColor = "#d97706";
      } else {
        fillEl.style.backgroundColor = "var(--brand-navy)";
      }
    }

    if (speakerEl) {
      speakerEl.textContent = this.currentSpeaker;
    }

    if (startBtn) {
      const isBn = window.i18n && window.i18n.lang === 'bn';
      startBtn.textContent = this.isRunning ? 
        (isBn ? "বিরতি" : "Pause") : 
        (this.remainingSeconds < this.totalSeconds ? (isBn ? "চালু রাখুন" : "Resume") : (isBn ? "শুরু" : "Start"));
      startBtn.className = this.isRunning ? "btn btn-secondary btn-lg" : "btn btn-primary btn-lg";
    }
  }
}

window.debateTimer = new DebateTimer();

// Global Keyboard Shortcuts
// 1. SPACEBAR: Manual Debate Bell Strike (Tap once for 1 ding, double tap for 2 dings, HOLD for continuous ringing)
// 2. Enter: Start / Pause Timer
// 3. R: Reset Timer
// 4. F: Fullscreen
document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.isContentEditable) {
    return;
  }

  // SPACEBAR for Debate Bell (Tap or Hold)
  if (e.code === "Space" || e.key === " ") {
    e.preventDefault();
    if (!window.debateTimer.isKeyDownHeld) {
      window.debateTimer.isKeyDownHeld = true;
      window.debateTimer.onBellPointerDown();
    }
  } else if (e.key === "Enter") {
    e.preventDefault();
    if (window.debateTimer.isRunning) {
      window.debateTimer.pause();
    } else {
      window.debateTimer.start();
    }
  } else if (e.key === "r" || e.key === "R") {
    window.debateTimer.reset();
  } else if (e.key === "f" || e.key === "F") {
    window.debateTimer.toggleFullscreen();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Space" || e.key === " ") {
    if (window.debateTimer.isKeyDownHeld) {
      window.debateTimer.isKeyDownHeld = false;
      window.debateTimer.onBellPointerUp();
    }
  }
});
