const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const route = require("./routes");
const app = express();
const port = 3000;

route(app);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

app.listen(port, () => console.log(`dang o port:${port}`));
