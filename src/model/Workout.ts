/*

Workout Model
- a workout consist of a name, and a list of exercises
- a workout can be saved to a file
- there should be a method for determining the reps, weights, sets for a given workout
- this method should take in 'workout model', and 'week number' and return the reps, weights, sets for that workout

*/

import { Exercise, ExerciseForWorkout } from "./Exercise";
import { ProgressionModel } from "./Progression";

interface WorkoutInformation {
  name: string;
  exercises: WorkoutComponent[];
}

export default class Workout {
  constructor(
    public name: string,
    public progressionModel: ProgressionModel,
    public exercises: WorkoutComponent[] = []
  ) {}

  // define method to add ExcerciseForWorkout, to an array of exercises
  addExercise(exercise: { exerciseId: number; weekNumber: number }): void {
    // testing
    if (exercise.exerciseId === 1) {
      const { sets, reps, weight } =
        this.progressionModel.calculateExcerciseRepsSetsWeight(
          exercise.weekNumber
        );
      const inclineBench = new ExerciseForWorkout({
        name: "Incline Bench",
        description: "Mr.Hollywood's favorite exercise.",
        type: "compound",
        reps,
        sets,
        weight,
      });
      const workoutComponent = new WorkoutComponent();
      workoutComponent.addExercise(inclineBench);
      this.exercises.push(workoutComponent);
    } else if (exercise.exerciseId == 2) {
      const { sets, reps, weight } =
        this.progressionModel.calculateExcerciseRepsSetsWeight(
          exercise.weekNumber
        );
      const ohp = new ExerciseForWorkout({
        name: "OHP",
        description: "Mr.Hollywood's peacokcin'.",
        type: "compound",
        reps,
        sets,
        weight,
      });
      const workoutComponent = new WorkoutComponent();
      workoutComponent.addExercise(ohp);
      this.exercises.push(workoutComponent);
    }
  }
  getWorkoutForWeek(weekNumber: number): WorkoutInformation {
    return {
      name: this.name,
      exercises: this.exercises,
    };
  }
}

class WorkoutComponent {
  exercises: ExerciseForWorkout[];
  constructor() {
    this.exercises = [];
  }
  addExercise(exercise: ExerciseForWorkout): void {
    this.exercises.push(exercise);
  }
}
