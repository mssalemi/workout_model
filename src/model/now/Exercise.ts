import { Progression } from "./Progression";

interface Config {
  variation?: string;
}

export class Exercise {
  constructor(public name: string, public progression: Progression) {}
}
