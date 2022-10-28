const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: "",
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
