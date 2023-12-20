const express = require("express");
const searchRoute = express.Router();

const searchController = require("../app/controllers/search.controller");

searchRoute.use("/", searchController.index);

module.exports = searchRoute;
