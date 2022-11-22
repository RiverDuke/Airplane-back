// const path = require("path");
const express = require("express");
const cors = require("cors");
const knex = require("./db/connection");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();
console.log("testing:", process.env.TEST);
app.use(express.json());

let corsOptions = {
  origin: [process.env.ALLOWED_ORIGIN, "http://localhost:3000"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// app.use(
//   cors({
//     origin: [process.env.ALLOWED_ORIGIN, "http://localhost:3000"],
//   })
// );

app.use(cors(corsOptions));

app.get("/api", async (req, res) => {
  const data = await knex("testing").select("*");
  // const info = await data.json();
  console.log(data);

  res.json({
    data,
  });
});

app.get("/test", (req, res) => {
  res.send("HELLO");
});

app.get("*", (req, res) => {
  res.json({ message: "Path not found" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
