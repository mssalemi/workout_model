// Progression
// This model describes how the reps sets weight should be calculated for a given workout.
// Write this for me

type ProgressionType = "linear" | "reverse-pyramid";

export abstract class ProgressionModel {
  constructor(
    public type: ProgressionType,
    public baseWeight: number,
    public baseReps: number
  ) {}
  abstract calculateExcerciseRepsSetsWeight(weekNumber: number): {
    reps: number[];
    sets: number;
    weight: number;
  };
}

export class ReversePyramindProgression extends ProgressionModel {
  oneRepMax: number;
  constructor(baseWeight: number, baseReps: number) {
    super("reverse-pyramid", baseWeight, baseReps);
    this.oneRepMax = baseWeight / 0.85;
  }
  calculateExcerciseRepsSetsWeight(weekNumber: number): {
    reps: number[];
    sets: number;
    weight: number;
  } {
    const minReps = 5 + (weekNumber - 1);
    return {
      reps: [minReps, minReps + 2],
      sets: 3,
      weight: this.oneRepMax * 0.85,
    };
  }
}

// export class LinearProgressionModel extends ProgressionModel {
//   constructor(baseWeight: number, baseReps: number) {
//     super("linear", baseWeight, baseReps);
//   }

//   calculateExcerciseRepsSetsWeight(
//     weekNumber: number
//   ): ExerciseForWorkoutPayload {
//     return {
//       name: "Squat",
//       description: "Squat",
//       type: "compound",
//       reps: this.calculateReps(weekNumber),
//       sets: this.calculateSets(weekNumber),
//       weight: this.calculateWeight(weekNumber),
//     };
//   }

//   calculateMetadataForWorkout(weekNumber: number): {
//     reps: number;
//     weight: number;
//     sets: number;
//   } {
//     return {
//       reps: 5,
//       sets: 3,
//       weight: 155,
//     };
//   }

//   private calculateReps(weekNumber: number): number {
//     if (weekNumber % 3 == 1) {
//       return this.baseReps;
//     } else if (weekNumber % 3 < 7) {
//       return this.baseReps + 1;
//     } else {
//       return this.baseWeight + 2;
//     }
//   }
//   private calculateSets(weekNumber: number): number {
//     if (weekNumber % 12 < 7) {
//       return 3;
//     } else {
//       return 4;
//     }
//   }
//   private calculateWeight(weekNumber: number): number {
//     if (weekNumber < 4) {
//       return this.baseWeight;
//     } else if (weekNumber % 12 < 7) {
//       return this.baseWeight + 5;
//     } else {
//       return this.baseWeight + 10;
//     }
//   }
// }
