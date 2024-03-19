const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { engine } = require("express-handlebars");
const dbConnect = require("./config/db");
const path = require("path");
const route = require("./routes");
const app = express();
const port = 3001;
app.use(cors());

route(app);
dbConnect();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB");
  app.listen(port, () => console.log(`dang o port:${port}`));
});

mongoose.connection.on("error", (err) => {
  console.log({ errorMongoose: err });
});
