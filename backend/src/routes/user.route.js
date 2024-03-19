const express = require("express");
const userRouter = express.Router();

const userController = require("../app/controllers/user.controller");

userRouter.route("/").get(userController.fetchList).post(userController.create);
userRouter.delete("/:id", userController.deleted);

module.exports = userRouter;
