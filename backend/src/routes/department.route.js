const express = require("express");
const departmentRouter = express.Router();

const departmentController = require("../app/controllers/department.controller");

departmentRouter
  .route("/")
  .get(departmentController.fetchList)
  .post(departmentController.create);

departmentRouter.delete("/:id", departmentController.deleted);

module.exports = departmentRouter;
