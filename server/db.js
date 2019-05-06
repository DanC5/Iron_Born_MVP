const mongoose = require('mongoose');

const mongoURI = process.env.DB_URI || 'mongodb://localhost/ironborn';
mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('error', () => console.log('Iron Born connection error...'));

db.on('open', () => console.log('Successfully connected to Iron Born database...'));

const workoutSchema = mongoose.Schema({
  workout: Array,
});

const Workout = mongoose.model('Workout', workoutSchema);

const getWorkouts = () => Workout.find().exec();

const addWorkout = (workout) => {
  return new Promise((resolve, reject) => {
    const workoutToAdd = new Workout ({
      workout: workout
    });
    workoutToAdd.save({}, (err, results) => {
      err ? reject(err) : resolve(results);
    });
  })
}

module.exports = {
  db,
  getWorkouts,
  addWorkout,
}