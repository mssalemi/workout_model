"use strict";
console.log("[api]");
const progression = {
    id: 1,
    name: "Linear",
    type: "linear",
    getMetadataFor: (weekNumber) => {
        return {
            sets: weekNumber,
            reps: weekNumber * 10,
            weight: 155,
        };
    },
};
const exercise = {
    id: 1,
    name: "Incline Bench",
    description: "Mr.Hollywood's favorite exercise.",
    type: "compound",
};
const workout = {
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
