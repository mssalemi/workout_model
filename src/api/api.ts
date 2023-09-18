console.log("[api]");

// Front End Stuff To use ....
interface ExerciseForWorkout {
  name: string;
  description: string;
  type: string;
  reps: number;
  sets: number;
  weight: number;
}

interface WorkoutInformation {
  weekNumber: number;
  name: string;
  exercises: ExerciseForWorkout[];
}

// Backend Types

interface Workout {
  // Workout info
  id: number;
  name: string;

  // Progression id is the id of the progression model that should be used for this workout
  // Exercise data like reps, weigts and sets, should be calculated based on the progression model
  progressionId: number;
  exercises: Exercise[];

  // api method that will return data for a given week for the front end to display ...
  // this method should take in a week number and return the data for that week
  getWorkoutForWeek(weekNumber: number): WorkoutInformation;
}

interface SetsRepsWeight {
  sets: number;
  reps: number;
  weight: number;
}

interface Progression {
  id: number;
  name: string;
  type: string;
  getMetadataFor(weekNumber: number): SetsRepsWeight;
}

interface Exercise {
  id: number;
  name: string;
  description: string;
  type: string;
}

const progression: Progression = {
  id: 1,
  name: "Linear",
  type: "linear",
  getMetadataFor: (weekNumber: number) => {
    return {
      sets: weekNumber,
      reps: weekNumber * 10,
      weight: 155,
    };
  },
};

const exercise: Exercise = {
  id: 1,
  name: "Incline Bench",
  description: "Mr.Hollywood's favorite exercise.",
  type: "compound",
};

const workout: WorkoutInformation = {
  weekNumber: 1,
  name: "Mr.Hollywood Incline Bench - Linear Method",
  exercises: [
    {
      name: "Incline Bench",
      description: "Mr.Hollywood's favorite exercise.",
      type: "compound",
      reps: 5,
      sets: 3,
      weight: 155,
    },
  ],
};

console.log(workout);
