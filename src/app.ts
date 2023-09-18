console.log("mehdi");

import { Exercise } from "./model/now/Exercise";

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
