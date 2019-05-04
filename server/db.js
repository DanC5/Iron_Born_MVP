const mongoose = require('mongoose');

const mongoURI = process.env.DB_URI || 'mongodb://localhost/ironborn';
mongoose.connect(mongoURI);

const db = mongoose.connection;

db.on('error', () => console.log('Iron Born connection error...'));

db.on('open', () => console.log('Successfully connected to Iron Born database...'));

// const itemSchema = mongoose.Schema({
//   quantity: Number,
//   description: String
// });

// const Item = mongoose.model('Item', itemSchema);

module.exports = {
  db,
}