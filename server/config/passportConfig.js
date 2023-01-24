const bcrypt = require("bcryptjs");
const User = require("../models/user");
const localStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");

module.exports = (passport) => {

  try {
    passport.use(
      new localStrategy(async (username, password, done) => {
        const user = await User.findOne({ where: { username: username } });
        if (!user) return done(null, false);
        const isEqual = await bcrypt.compare(password, user.password);
        if (isEqual) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
    );

    passport.serializeUser((user, cb) => {
      const accessToken = jwt.sign(
        {
          id: user.id,
          fullname: user.fullname,
          username: user.username,
        },
        user.salt,
        { algorithm: "HS256", expiresIn: "10h" }
      );
      cb(null, {id:user.id,accessToken});
    });
    passport.deserializeUser(async (id, cb) => {
      const user = await User.findOne({ where: { id:id } });
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  } catch (err) {
    next(err);
  }
};
