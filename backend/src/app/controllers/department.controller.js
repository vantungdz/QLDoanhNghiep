const departmentModel = require("../model/department.model");
const fetchList = async (req, res) => {
  const department = await departmentModel.find({});
  res.json({
    data: department,
  });
};

module.exports = {
  fetchList,
};
