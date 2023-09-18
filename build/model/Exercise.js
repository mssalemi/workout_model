"use strict";
// I'm looking to defining a new exercise type.
// I want to be able to define a new exercise type with a name and a description.
// Exercise type should be isolation or compount
// define a typescript class for this.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseForWorkout = exports.Exercise = void 0;
class Exercise {
    constructor(name, description, type) {
        this.name = name;
        this.description = description;
        this.type = type;
    }
}
exports.Exercise = Exercise;
class ExerciseForWorkout extends Exercise {
    constructor({ name, description, type = "compound", reps, weight, sets, }) {
        super(name, description, type);
        this.reps = reps;
        this.sets = sets;
        this.weight = weight;
    }
}
exports.ExerciseForWorkout = ExerciseForWorkout;
