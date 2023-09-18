// I'm looking to defining a new exercise type.
// I want to be able to define a new exercise type with a name and a description.
// Exercise type should be isolation or compount
// define a typescript class for this.

export abstract class Exercise {
  constructor(
    public name: string,
    public description: string,
    public type: string
  ) {}
}

export interface ExerciseForWorkouPayload {
  name: string;
  description: string;
  type: string;
  reps: number[];
  sets: number;
  weight: number;
}

export class ExerciseForWorkout extends Exercise {
  reps: number[];
  sets: number;
  weight: number;

  constructor({
    name,
    description,
    type = "compound",
    reps,
    weight,
    sets,
  }: ExerciseForWorkouPayload) {
    super(name, description, type);
    this.reps = reps;
    this.sets = sets;
    this.weight = weight;
  }
}
