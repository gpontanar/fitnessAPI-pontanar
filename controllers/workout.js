const Workout = require('../models/Workout');

// Add a new workout
module.exports.addWorkout = (req, res) => {
    const newWorkout = new Workout({
        userId: req.user.id,
        name: req.body.name,
        duration: req.body.duration,
        status: req.body.status || 'pending'
    });

    newWorkout.save()
        .then(workout => res.status(201).json(workout))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Retrieve all workouts for the logged-in user
module.exports.getMyWorkouts = (req, res) => {
    Workout.find({ userId: req.user.id })
        .then(workouts => res.status(200).json({ workouts }))
        .catch(err => res.status(500).json({ error: err.message }));
};

// Update a workout
module.exports.updateWorkout = (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id, userId: req.user.id },
        req.body,
        { new: true }
    )
        .then(updatedWorkout => {
            if (!updatedWorkout) return res.status(404).json({ message: 'Workout not found' });
            res.status(200).json({ message: 'Workout updated successfully', updatedWorkout });
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

// Delete a workout
module.exports.deleteWorkout = (req, res) => {
    Workout.findOneAndDelete({ _id: req.params.id, userId: req.user.id })
        .then(deletedWorkout => {
            if (!deletedWorkout) return res.status(404).json({ message: 'Workout not found' });
            res.status(200).json({ message: 'Workout deleted successfully' });
        })
        .catch(err => res.status(500).json({ error: err.message }));
};