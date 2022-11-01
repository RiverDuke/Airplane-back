const path = require("path");
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://airplane-front.uk.r.appspot.com/",
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
