const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const PORT = 3000;

// mongoose.connect(
//   'mongodb+srv://student:ilovetesting@database-assessment.6vall.mongodb.net/week-4-assessment?retryWrites=true&w=majority',
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
// mongoose.connection.once('open', () => {
//   console.log('Connected to Database');
// });
const mongoURI =
  process.env.NODE_ENV === 'test'
    ? 'mongodb://localhost/unit11test'
    : 'mongodb://localhost/unit11dev';
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const userController = require('./controllers/userController');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => res.sendFile(path.resolve('./dist/index.html')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});
app.get('/secret', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});
app.get('/login', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});
app.post('/register', userController.createUser, (req, res) => {
  return res.status(200).redirect('/');
});
app.post('/login', userController.verifyUser, (req, res) => {
  return res.status(200).redirect('/eat');
});

/**
 * 404 handler
 */
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ message: err });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
