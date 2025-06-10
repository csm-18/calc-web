const express = require("express");
const app = express();
const port = 3000;
const host = "0.0.0.0"; // Bind to all interfaces

app.use(express.static("frontend/dist"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
