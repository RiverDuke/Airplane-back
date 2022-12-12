// const knex = require("./db/connection");

const PORT = process.env.PORT || 3001;
const express = require("express");
const session = require("express-session");
const knexSessionStore = require("connect-session-knex")(session);
const passport = require("passport");
const crypto = require("crypto");
const app = express();
require("dotenv").config();
require("./config/passport");
const cors = require("cors");
const loginRouter = require("./routes/login/login.router");
const registerRouter = require("./routes/login/register.router");

const corsOptions = {
  origin: ["https://airplane-front.uk.r.appspot.com", "http://localhost:3000"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

const sessionOptions = {
  secret: "some secret",
  resave: false,
  saveUninitialized: true,
  store: new knexSessionStore({
    knex: require("./config/database.js"),
    tablename: "sessions",
    // sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 60,
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

app.use("/login", loginRouter);
app.use("/register", registerRouter);

app.get("*", (req, res) => {
  res.json({ message: "Path not found" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
