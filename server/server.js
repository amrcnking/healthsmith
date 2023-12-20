const express = require('express');
const app = express();
const mongoose = require('mongoose');

const studentController = require('./StudentController');

const PORT = 8080;

mongoose.connect(
  'mongodb+srv://student:ilovetesting@database-assessment.6vall.mongodb.net/week-4-assessment?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const studentRouter = express.Router();
app.use('/student', studentRouter);

app.use('/dist', express.static(path.join(__dirname, '../dist')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
app.get('/login', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});



app.listen(PORT);
