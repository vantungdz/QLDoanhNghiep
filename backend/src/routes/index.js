const departmentRouter = require("./department.route");
const userRouter = require("./user.route");

function route(app) {
  app.use("/departments", departmentRouter);

  app.use("/employees", userRouter);
}
module.exports = route;
