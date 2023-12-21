const userModel = require("../Model/user.model");

const fetchList = async (req, res) => {
  const users = await userModel.find();
  res.json({
    data: users,
  });
};

module.exports = {
  fetchList,
};
