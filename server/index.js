// const path = require("path");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [process.env.ALLOWED_ORIGIN, "http://localhost:3000"],
  })
);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("*", (req, res) => {
  res.json({ message: "Path not found" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
