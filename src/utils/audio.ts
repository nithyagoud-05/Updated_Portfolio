/**
 * Cinematic Web Audio API Synthesizer
 * Generates an organic, warm ambient film drone using additive synthesis,
 * analog warmth filters, and low-frequency oscillation.
 * Complies with strict user-gesture activation (zero autoplay).
 */

class CinematicAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private oscillators: OscillatorNode[] = [];
  private lfo: OscillatorNode | null = null;
  private analyser: AnalyserNode | null = null;
  private listeners: ((playing: boolean) => void)[] = [];

  public subscribe(cb: (playing: boolean) => void) {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getAnalyser(): AnalyserNode | null {
    return this.analyser;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (this.isPlaying) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.ctx) {
        this.ctx = new AudioCtx();
      }

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;

      // Master output with subtle compression & volume safety
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, now);
      // Gentle fade in over 2.5s
      this.masterGain.gain.exponentialRampToValueAtTime(0.09, now + 2.5);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);

      // Low pass filter for warm cinematic sub-bass feel
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);
      filter.Q.setValueAtTime(1.8, now);
      filter.connect(this.masterGain);

      // LFO for slow atmospheric breathing (Hans Zimmer style swelling)
      this.lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      this.lfo.frequency.setValueAtTime(0.12, now); // ~8 second cycle
      lfoGain.gain.setValueAtTime(140, now);
      this.lfo.connect(filter.frequency);
      this.lfo.start(now);

      // Cinematic drone chords: Deep D minor / ethereal fifths (D2, A2, D3, F3, A3)
      const freqs = [73.42, 110.0, 146.83, 174.61, 220.0];
      const types: OscillatorType[] = ['sine', 'triangle', 'sine', 'sine', 'triangle'];

      this.oscillators = freqs.map((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const oscGain = this.ctx!.createGain();

        // Subtle detuning for analog drift
        const detune = (i % 2 === 0 ? 1 : -1) * (i * 3.5);
        osc.frequency.setValueAtTime(freq, now);
        osc.detune.setValueAtTime(detune, now);
        osc.type = types[i % types.length];

        const individualVolume = i === 0 ? 0.4 : i === 1 ? 0.35 : 0.25;
        oscGain.gain.setValueAtTime(individualVolume, now);

        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start(now);
        return osc;
      });

      this.isPlaying = true;
      this.notify();
    } catch {
      this.isPlaying = false;
      this.notify();
    }
  }

  public stop() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) {
      this.isPlaying = false;
      this.notify();
      return;
    }

    try {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      setTimeout(() => {
        this.oscillators.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // Ignore
          }
        });
        this.oscillators = [];

        if (this.lfo) {
          try {
            this.lfo.stop();
            this.lfo.disconnect();
          } catch {
            // Ignore
          }
          this.lfo = null;
        }

        this.isPlaying = false;
        this.notify();
      }, 1250);
    } catch {
      this.isPlaying = false;
      this.notify();
    }
  }
}

export const soundEngine = new CinematicAudioEngine();
