console.log("mehdi");

import { Exercise } from "./model/Exercise";
import { ReversePyramindProgression } from "./model/Progression";
import Workout from "./model/Workout";

const inclineBench = new Exercise(
  "Incline Bench",
  "Mr.Hollywood's favorite exercise.",
  "compound"
);

const reversePyramidTrainingInclineBench = new ReversePyramindProgression(
  155,
  5
);

const reversePyramidTrainingOhp = new ReversePyramindProgression(90, 5);

const workoutInclineBenchRPT = new Workout(
  "Mr.Hollywood Incline Bench",
  reversePyramidTrainingInclineBench
);

workoutInclineBenchRPT.addExercise({ exerciseId: 1, weekNumber: 2 });

console.dir(workoutInclineBenchRPT.getWorkoutForWeek(2), { depth: 20 });

const workoutOhpRpt = new Workout(
  "Mr.Hollywood OHP",
  reversePyramidTrainingOhp
);

workoutOhpRpt.addExercise({ exerciseId: 2, weekNumber: 2 });

console.dir(workoutOhpRpt.getWorkoutForWeek(2), { depth: 20 });
