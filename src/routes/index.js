const newsRouter = require("./news.route");
const searchRouter = require("./search.route");

function route(app) {
  app.use("/news", newsRouter);

  app.use("/search", searchRouter);
}
module.exports = route;
