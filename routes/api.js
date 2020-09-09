const router = require("express").Router();
const Workout = require("../models/workout.js");

// add api routes
// gets all workouts
router.get("/api/workouts", (req, res) => {

    Workout.find()
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// edits details of existing workout ?
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
            $push: { exercises: req.body }
        }, { new: true, runValidators: true }).then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
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

            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;