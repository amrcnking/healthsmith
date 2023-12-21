const User = require('../models/userModel');
const Session = require('../models/sessionModel');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;
    console.log(username);
    console.log(password);
    const newUser = await User.create({ username, password });
    console.log('user created');
    res.locals.id = newUser._id.toString();
    //   const newSession = await Session.create({ cookieId: res.locals.id });
    return next();
  } catch (err) {
    return next({ error: 'please enter a valid username and password' });
  }
};

userController.verifyUser = async (req, res, next) => {
  // write code here
  const { username, password } = req.body;
  const check = await User.findOne({ username, password });

  if (check === null) {
    return res.redirect('/');
  } else {
    res.locals.id = check._id.toString();
    return next();
  }
};

module.exports = userController;
