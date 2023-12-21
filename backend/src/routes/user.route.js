const express = require("express");
const userRouter = express.Router();

const userController = require("../app/controllers/user.controller");

userRouter.use("/", userController.fetchList);

module.exports = userRouter;
