const API = {
    async getLastWorkout() {
        console.log(" API.js, get last workout");
        let res;
        try {
            res = await fetch("/api/workouts");
        } catch (err) {
            console.log(err)
        }
        const json = await res.json();

        return json[json.length - 1];
    },
    async addExercise(data) {
        console.log(" API.js, add exercise");
        const id = location.search.split("=")[1];

        const res = await fetch("/api/workouts/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const json = await res.json();

        return json;
    },
    async createWorkout(data = {}) {
        console.log(" API.js, create workout");
        const res = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });

        const json = await res.json();

        return json;
    },

    async getWorkoutsInRange() {
        console.log("getWorkoutsInRange line 42");
        const res = await fetch(`/api/workouts/range`);
        const json = await res.json();

        return json;
    },
};