const express = require("express");
const newsRoute = express.Router();

const newsController = require("../app/controllers/news.controller");

newsRoute.use("/", newsController.index);

module.exports = newsRoute;
