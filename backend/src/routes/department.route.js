const express = require("express");
const departmentRouter = express.Router();

const departmentController = require("../app/controllers/department.controller");

departmentRouter.use("/", departmentController.fetchList);

module.exports = departmentRouter;
