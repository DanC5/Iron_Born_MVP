const express = require('express');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const PORT = process.env.PORT || 5555;
const { getWorkouts, addWorkout, addUser, deleteWorkout } = require('./db');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/workouts', (req, res) => {
  getWorkouts()
    .then(results => res.json(results))
    .catch('Server-side error getting workouts from DB...')
});

app.post('/workouts', (req, res) => {
  const workout = req.body;
  addWorkout(workout)
    .then(results => res.json(results))
    .catch('Server-side error adding workout to DB...')
});

app.post('/signup', (req, res) => {
  const user = req.body;

  if (user.password1 === user.password2) {
    bcrypt.hash(user.password1, saltRounds)
      .then(hash => {
        user.password1 = hash
        addUser(user)
          .then(results => res.json(results))
          .catch('Server-side error adding workout to DB...')
      })
  } else {
    res.send('Passwords do not match');
  }
});

app.delete('/workouts/:id', (req, res) => {
  const { id } = req.params;
  deleteWorkout(id)
    .then(results => res.json(results))
    .catch('Server-side error deleting workout from DB...')
});

app.listen(PORT, (err) => {
  if (err) console.log('Error connecting to server...');
  else {
    console.log(`Iron Born running on PORT: ${PORT}...`);
  }
});

