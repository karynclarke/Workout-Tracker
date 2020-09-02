const router = require("express").Router();
const Workout = require("../models/workout.js");

// add api routes
router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err)
})






module.exports = router;