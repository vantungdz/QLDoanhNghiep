const departmentRouter = require("./department.route");
const userRouter = require("./user.route");

function route(app) {
  app.use("/department", departmentRouter);

  app.use("/user", userRouter);
}
module.exports = route;
