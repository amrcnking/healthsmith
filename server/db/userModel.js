const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const Person = mongoose.model('person', personSchema);
module.exports = mongoose.model('User', userSchema);