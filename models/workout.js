const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: {
        type: {
            type: String,
            trim: true,
            required: "Type of exercise is required"
        },

        name: {
            type: String,
            trim: true,
            required: "Name of exercise is required"
        },

        duration: {
            type: Number,
            required: "Duration amount is required"
        },

        weight: {
            type: Number,
        },
        
        reps: {
            type: Number,
        },

        sets: {
            type: Number,
        }
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;