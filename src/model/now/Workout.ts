import { WorkoutComponent } from "./WorkoutComponent";
import { Progression } from "./Progression";

export class Workout {
  constructor(public workoutComponents: WorkoutComponent[]) {}
}
