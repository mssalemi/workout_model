interface Config {
  reps: number;
  sets: number;
  weight: number;
  notes?: string;
}

export abstract class Progression {
  constructor(public name: string, public oneRepMax: number) {}
  public abstract calculateConfig(dayNumber: number): Config;
}

export class LinearProgression extends Progression {
  constructor(name: string, oneRepMax: number) {
    super(name, oneRepMax);
  }
  calculateConfig(dayNumber: number): Config {
    return {
      reps: 5,
      sets: 5,
      weight: this.oneRepMax * 0.85 + (dayNumber - 1) * 2.5,
    };
  }
}

export class RepProgression extends Progression {
  constructor(name: string, oneRepMax: number) {
    super(name, oneRepMax);
  }
  calculateConfig(dayNumber: number): Config {
    return {
      reps: 10 + (dayNumber - 1),
      sets: 4,
      weight: this.oneRepMax * 0.75,
    };
  }
}
