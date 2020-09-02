const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter Excercise Type",
        },
        name: {
            type: String,
            trim: true,
            required: "Enter Excercise Name",
        },
        duration: {
            type: Number,
            required: "Enter Excercise Duration in Minutes",
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }

    }]

});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;