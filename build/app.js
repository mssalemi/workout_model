"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("mehdi");
const Exercise_1 = require("./model/now/Exercise");
// Define Exercises
// Day 1
// Superset
const OHP = new Exercise_1.Exercise("OHP");
const ChinUps = new Exercise_1.Exercise("Chin Ups");
// Superset
const LeaningLateralRaise = new Exercise_1.Exercise("Leaning Lateral Raise");
const OverheadTricepExtension = new Exercise_1.Exercise("One Arm Overhead Tricep Extension", {
    variation: "One Arm",
});
// Day 2
// Superset
const SLDL = new Exercise_1.Exercise("Deadlift", { variation: "Single Leg" });
const BulgarianSplitSquat = new Exercise_1.Exercise("Bulgarian Split Squat");
// Superset
const Shrugs = new Exercise_1.Exercise("Shrugs");
const SingleLegHipThrust = new Exercise_1.Exercise("Single Leg Hip Thrust");
// Day 3
const InclineBench = new Exercise_1.Exercise("Incline Bench");
// Superset
const BicepCurls = new Exercise_1.Exercise("Bicep Curls");
const BentOverFly = new Exercise_1.Exercise("Bent Over Fly");
const HangingKneeRaise = new Exercise_1.Exercise("Hanging Knee Raise");
