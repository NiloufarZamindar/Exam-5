const bcrypt = require("bcryptjs");
const User = require("../models/user");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const login = async (req, res, next) => {
  passport.authenticate("local", (err, user  , info) => {
    if (err) return next(err);
    if (!user){
      let error = new Error("Email not Exists!");
      error.statusCode = 422;
      next(error);
    }
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.json({accessToken: req.session.passport.user.accessToken});
      });
    }
  })(req, res, next);
};

const signup = async (req, res, next) => {
  let { fullname, username, password } = req.body;
  try {
    let _password = await bcrypt.hash(password, 12);
    var salt = crypto.randomBytes(64).toString('hex');
    const user = await User.create({ fullname, username, password:_password,salt });
    return res.json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  signup
};
