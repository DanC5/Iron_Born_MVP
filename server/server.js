const express = require('express');
const morgan = require('morgan');
const { getWorkouts, addWorkout, deleteWorkout } = require('./db');
const PORT = process.env.PORT || 5555;

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

