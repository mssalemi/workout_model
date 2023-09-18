console.log("mehdi");

import { Exercise } from "./model/now/Exercise";
import { WorkoutComponent } from "./model/now/WorkoutComponent";
import { Workout } from "./model/now/Workout";

// Define Exercises
// Day 1
// Superset
const OHP = new Exercise("OHP");
const ChinUps = new Exercise("Chin Ups");
// Superset
const LeaningLateralRaise = new Exercise("Leaning Lateral Raise");
const OverheadTricepExtension = new Exercise(
  "One Arm Overhead Tricep Extension",
  {
    variation: "One Arm",
  }
);

// Day 2
// Superset
const SLDL = new Exercise("Deadlift", { variation: "Single Leg" });
const BulgarianSplitSquat = new Exercise("Bulgarian Split Squat");
// Superset
const Shrugs = new Exercise("Shrugs");
const SingleLegHipThrust = new Exercise("Single Leg Hip Thrust");

// Day 3
const InclineBench = new Exercise("Incline Bench");
// Superset
const BicepCurls = new Exercise("Bicep Curls");
const BentOverFly = new Exercise("Bent Over Fly");
const HangingKneeRaise = new Exercise("Hanging Knee Raise");

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
