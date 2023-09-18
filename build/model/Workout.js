"use strict";
/*

Workout Model
- a workout consist of a name, and a list of exercises
- a workout can be saved to a file
- there should be a method for determining the reps, weights, sets for a given workout
- this method should take in 'workout model', and 'week number' and return the reps, weights, sets for that workout

*/
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise_1 = require("./Exercise");
class Workout {
    constructor(name, progressionModel, exercises = []) {
        this.name = name;
        this.progressionModel = progressionModel;
        this.exercises = exercises;
    }
    // define method to add ExcerciseForWorkout, to an array of exercises
    addExercise(exercise) {
        // testing
        if (exercise.exerciseId === 1) {
            const { sets, reps, weight } = this.progressionModel.calculateExcerciseRepsSetsWeight(exercise.weekNumber);
            const inclineBench = new Exercise_1.ExerciseForWorkout({
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
        }
        else if (exercise.exerciseId == 2) {
            const { sets, reps, weight } = this.progressionModel.calculateExcerciseRepsSetsWeight(exercise.weekNumber);
            const ohp = new Exercise_1.ExerciseForWorkout({
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
    getWorkoutForWeek(weekNumber) {
        return {
            name: this.name,
            exercises: this.exercises,
        };
    }
}
exports.default = Workout;
class WorkoutComponent {
    constructor() {
        this.exercises = [];
    }
    addExercise(exercise) {
        this.exercises.push(exercise);
    }
}
