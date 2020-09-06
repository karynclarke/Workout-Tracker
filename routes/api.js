const router = require("express").Router();
const Workout = require("../models/workout.js");

// add api routes
// gets all workouts
router.get("/", (req, res) => {
    Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put(":id/api/workouts", (req, res) => {
    Workout.update({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// adds new workout
router.post("/api/workouts", ({
    body
}, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// updates workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// controls number of workouts
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkouts => {
            console.log(dbWorkouts)
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});
module.exports = router;