const express = require('express');
const morgan = require('morgan');
const { db } = require('./db');
const PORT = process.env.PORT || 5555;

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/../client/dist`));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.listen(PORT, (err) => {
  if (err) console.log('Error connecting to server...');
  else {
    console.log(`Iron Born running on PORT: ${PORT}...`);
  }
});

