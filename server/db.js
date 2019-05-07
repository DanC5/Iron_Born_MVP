const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

userSchema.pre('save', async function(next) {
  bcrypt.hash(this.password, saltRounds)
    .then(hash => {
      this.password = hash;
      next();
    })
});

const User = mongoose.model('User', userSchema);

// const getWorkouts = Workout.find().exec();

const getWorkouts = () => {
  return new Promise((resolve, reject) => {
    Workout.find({}, (err, results) => {
      err ? reject(err) : resolve(results);
    })
  })
}

const getUser = (email) => {
  return new Promise((resolve, reject) => {
    User.find({email: email}, (err, results) => {
      err ? reject(err) : resolve(results);
    })
  });
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

const addUser = (user) => {
  return new Promise((resolve, reject) => {
    const userToAdd = new User ({
      email: user.email,
      password: user.password1,
    });
    userToAdd.save({}, (err, results) => {
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
  getUser,
  addWorkout,
  addUser,
  deleteWorkout,
}