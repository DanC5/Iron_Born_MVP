const mongoose = require('mongoose');

const mongoURI = process.env.DB_URI || 'mongodb://localhost/ironborn';
mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('error', () => console.log('Iron Born connection error...'));

db.on('open', () => console.log('Successfully connected to Iron Born database...'));

const workoutSchema = mongoose.Schema({
  date: String,
  workout: Array,
});

const Workout = mongoose.model('Workout', workoutSchema);

// const getWorkouts = Workout.find().exec();

const getWorkouts = () => {
  return new Promise((resolve, reject) => {
    Workout.find({}, (err, results) => {
      err ? reject(err) : resolve(results);
    })
  })
}

const addWorkout = (workout) => {
  return new Promise((resolve, reject) => {
    const workoutToAdd = new Workout ({
      date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
      workout: workout
    });
    workoutToAdd.save({}, (err, results) => {
      err ? reject(err) : resolve(results);
    });
  })
}

const deleteWorkout = (id) => {
  return new Promise((resolve, reject) => {
    Workout.remove({_id: id}, (err, results) => {
      err ? reject(err) : resolve(results);
    })
  })
}

module.exports = {
  db,
  getWorkouts,
  addWorkout,
  deleteWorkout,
}