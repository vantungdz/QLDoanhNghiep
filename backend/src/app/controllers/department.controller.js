const departmentModel = require("../model/department.model");

const fetchList = async (req, res) => {
  const department = await departmentModel.find({});
  res.json({
    data: department,
  });
};

const create = async (req, res) => {
  const users = await departmentModel.create({});
  res.json({
    data: users,
  });
};

const deleted = async (req, res) => {
  try {
    const deleted = await departmentModel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      res.status(404).json({ message: "Item not found" });
    } else {
      res.json({ message: "Item deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  fetchList,
  create,
  deleted,
};
