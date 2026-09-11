// Acoustic Debate Brass Bell Synthesizer (Web Audio API)
// Supports Single Ding, Double Ding, and Continuous Hold Ringing

class DebateAudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.continuousInterval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playBrassStrike(freq = 1174.66, duration = 1.4, volume = 0.5) { // D6 resonant frequency
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      
      // Dual harmonic oscillators for realistic brass resonance
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(freq, now);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(freq * 2.02, now); // Metallic overtone

      // Acoustic attack and long resonant ring decay
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(volume, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
    } catch (e) {
      console.warn("Bell audio strike error:", e);
    }
  }

  ringOnce() {
    this.playBrassStrike(1174.66, 1.5, 0.55);
  }

  ringTwice() {
    this.ringOnce();
    setTimeout(() => {
      this.playBrassStrike(1318.5, 1.8, 0.6); // E6
    }, 220);
  }

  startContinuous() {
    if (this.continuousInterval) return;
    this.ringOnce();
    this.continuousInterval = setInterval(() => {
      this.playBrassStrike(1250 + Math.random() * 80, 0.35, 0.5);
    }, 180);
  }

  stopContinuous() {
    if (this.continuousInterval) {
      clearInterval(this.continuousInterval);
      this.continuousInterval = null;
      // Final ringing strike on release
      this.playBrassStrike(1174.66, 1.6, 0.45);
    }
  }

  testAudio() {
    this.ringTwice();
  }
}

window.debateAudio = new DebateAudioEngine();
