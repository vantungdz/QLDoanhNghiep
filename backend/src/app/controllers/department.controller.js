const departmentModel = require("../model/department.model");

const fetchList = async (req, res) => {
  const department = await departmentModel.find({});
  res.json({
    data: department,
  });
};

const create = async (req, res) => {
  const users = await userModel.create({});
  res.json({
    data: users,
  });
};

module.exports = {
  fetchList,
  create,
};
