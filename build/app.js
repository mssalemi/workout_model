"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("mehdi");
const Exercise_1 = require("./model/Exercise");
const Progression_1 = require("./model/Progression");
const Workout_1 = __importDefault(require("./model/Workout"));
const inclineBench = new Exercise_1.Exercise("Incline Bench", "Mr.Hollywood's favorite exercise.", "compound");
const reversePyramidTrainingInclineBench = new Progression_1.ReversePyramindProgression(155, 5);
const reversePyramidTrainingOhp = new Progression_1.ReversePyramindProgression(90, 5);
const workoutInclineBenchRPT = new Workout_1.default("Mr.Hollywood Incline Bench", reversePyramidTrainingInclineBench);
workoutInclineBenchRPT.addExercise({ exerciseId: 1, weekNumber: 2 });
console.dir(workoutInclineBenchRPT.getWorkoutForWeek(2), { depth: 20 });
const workoutOhpRpt = new Workout_1.default("Mr.Hollywood OHP", reversePyramidTrainingOhp);
workoutOhpRpt.addExercise({ exerciseId: 2, weekNumber: 2 });
console.dir(workoutOhpRpt.getWorkoutForWeek(2), { depth: 20 });
