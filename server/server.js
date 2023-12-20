const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(
  'mongodb+srv://student:ilovetesting@database-assessment.6vall.mongodb.net/week-4-assessment?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});
// serve index.html on the route '/'
if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the build folder on the route '/build'
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
  });
  // app.get('/login', (req, res) => {
  //   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  // });
}

/**
 * 404 handler
 */
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
