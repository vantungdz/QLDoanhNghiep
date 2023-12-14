const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("hi, fr"));

app.listen(port, () => console.log(`dang o port:${port}`));
