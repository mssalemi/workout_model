interface Config {
  variation?: string;
}

export class Exercise {
  constructor(public name: string, config?: Config) {}
}
