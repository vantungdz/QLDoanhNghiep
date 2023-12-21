const express = require("express");
const departmentRouter = express.Router();

const departmentController = require("../app/controllers/department.controller");

departmentRouter.route("/").get(departmentController.fetchList);

module.exports = departmentRouter;
