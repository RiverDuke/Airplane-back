// const path = require("path");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const knexSessionStore = require("connect-session-knex")(session);
const knex = require("./db/connection");
const loginRouter = require("./login/login.router");
const PORT = process.env.PORT || 3001;
const app = express();
const corsOptions = {
  origin: ["https://airplane-front.uk.r.appspot.com", "http://localhost:3000"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const sessionOptions = {
  secret: "some secret",
  resave: false,
  saveUninitialized: true,
  store: new knexSessionStore({
    knex: require("./db/connection.js"),
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

app.get("/api", async (req, res) => {
  const data = await knex("testing").select("*");

  if (req.session.viewCount) {
    req.session.viewCount++;
  } else {
    req.session.viewCount = 1;
  }

  console.log(data);
  console.log(req.session.viewCount);

  res.json({
    data,
  });
});

app.use("/login", loginRouter);

app.get("/test", (req, res) => {
  res.send("HELLO");
});

app.get("*", (req, res) => {
  res.json({ message: "Path not found" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
