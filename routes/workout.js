const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workout');
const auth = require('../auth');

router.post('/addWorkout', auth.verify, workoutController.addWorkout);
router.get('/getMyWorkouts', auth.verify, workoutController.getMyWorkouts);
router.patch('/updateWorkout/:id', auth.verify, workoutController.updateWorkout);
router.delete('/deleteWorkout/:id', auth.verify, workoutController.deleteWorkout);
router.patch('/completeWorkoutStatus/:id', auth.verify, workoutController.completeWorkoutStatus);

module.exports = router;