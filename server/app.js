const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");


const sequelize = require("./config/DBConnect");
const User = require("./models/user");
const Order = require("./models/order");
const Bowl = require("./models/bowl");
const api = require("./api/api");
const { errorHandler } = require("./middlewares/errors");
require("dotenv").config();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
//sessions
const _10h = 1000 * 60 * 60 * 10;
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: _10h },
  })
);

app.use(api);
//──── Static Folder
app.use(express.static(path.join(__dirname, "public")));


app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passportConfig")(passport);
//middlewares

app.use(errorHandler);
app.listen(process.env.PORT, async () => {
  /* await Bowl.bulkCreate([
    {
      bowlName: "Regular",
      proteins: 1,
      ingredients: 4,
      price: "9",
      stock: 11,
      img: "regular.png",
    },
    {
      bowlName: "Medium",
      proteins: 2,
      ingredients: 4,
      price: "11",
      stock: 8,
      img: "medium.png",
    },
    {
      bowlName: "Large",
      proteins: 3,
      ingredients: 6,
      price: "14",
      stock: 6,
      img: "large.png",
    },
  ]);*/
  console.log(`Server listening on port ${process.env.PORT}`);
  sequelize
    .sync()
    .then(() => {
      //Option { force: true }
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
});