const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.static(path.resolve("./dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.get("/", (req, res) => {
  res.end(`Server working in port - ${PORT}`);
});

app.listen(PORT, console.log(`Server working in port - ${PORT}`));
