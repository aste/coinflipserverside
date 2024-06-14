const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
let coin;

let coinFlipper = () => (Math.round(Math.random()) ? "Tails" : "Heads");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(coin);
});

app.get("/flip", (req, res) => {
  coin = coinFlipper();
  res.send(coin);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
