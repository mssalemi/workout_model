console.log("mehdi");

import { Exercise } from "./model/now/Exercise";
import { WorkoutComponent } from "./model/now/WorkoutComponent";
import { Workout } from "./model/now/Workout";
import { LinearProgression, RepProgression } from "./model/now/Progression";

// Define Exercises
// Day 1
// Superset
const OHP = new Exercise("OHP", new LinearProgression("OHP", 125));
const ChinUps = new Exercise("Chin Ups", new LinearProgression("Chin Ups", 30));
// Superset
const LeaningLateralRaise = new Exercise(
  "Leaning Lateral Raise",
  new RepProgression("Leaning Lateral Raise", 25)
);
const OverheadTricepExtension = new Exercise(
  "One Arm Overhead Tricep Extension",
  new RepProgression("One Arm Overhead Tricep Extension", 35)
);

// Day 2
// Superset
const SLDL = new Exercise("Deadlift", new LinearProgression("Deadlift", 100));
const BulgarianSplitSquat = new Exercise(
  "Bulgarian Split Squat",
  new LinearProgression("Bulgarian Split Squat", 100)
);
// Superset
const Shrugs = new Exercise("Shrugs", new RepProgression("Shrugs", 100));
const SingleLegHipThrust = new Exercise(
  "Single Leg Hip Thrust",
  new RepProgression("Single Leg Hip Thrust", 0)
);

// Day 3
const InclineBench = new Exercise(
  "Incline Bench",
  new LinearProgression("Incline Bench", 185)
);
// Superset
const BicepCurls = new Exercise(
  "Bicep Curls",
  new RepProgression("Bicep Curls", 35)
);
const BentOverFly = new Exercise(
  "Bent Over Fly",
  new RepProgression("Bent Over Fly", 25)
);
const HangingKneeRaise = new Exercise(
  "Hanging Knee Raise",
  new RepProgression("Hanging Knee Raise", 0)
);

// Define Workout Components
// Day 1
/// 1
const dayOneMainExercise = [OHP, ChinUps];
const dayOneAccessoryExercise = [LeaningLateralRaise, OverheadTricepExtension];

/// 2
const dayTwoMainExercise = [SLDL, BulgarianSplitSquat];
const dayTwoAccessoryExercise = [Shrugs, SingleLegHipThrust];

/// 3
const dayThreeMainExercise = [InclineBench];
const dayThreeAccessoryExercise = [BicepCurls, BentOverFly, HangingKneeRaise];

// Workout Components
// 1
const dayOneMain = new WorkoutComponent(dayOneMainExercise);
const dayOneAccessory = new WorkoutComponent(dayOneAccessoryExercise);
// 2
const dayTwoMain = new WorkoutComponent(dayTwoMainExercise);
const dayTwoAccessory = new WorkoutComponent(dayTwoAccessoryExercise);
// 3
const dayThreeMain = new WorkoutComponent(dayThreeMainExercise);
const dayThreeAccessory = new WorkoutComponent(dayThreeAccessoryExercise);

// Workout
const dayOneWorkout = new Workout([dayOneMain, dayOneAccessory]);
const dayTwoWorkout = new Workout([dayTwoMain, dayTwoAccessory]);
const dayThreeWorkout = new Workout([dayThreeMain, dayThreeAccessory]);

console.dir(dayOneWorkout, { depth: 10 });
