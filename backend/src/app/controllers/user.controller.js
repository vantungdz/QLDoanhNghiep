const userModel = require("../Model/user.model");

const fetchList = async (req, res) => {
  const users = await userModel.find();
  res.json({
    data: users,
  });
};

const create = async (req, res) => {
  const users = await userModel.create({
    employee_id: req.body.employee_id,
    email: req.body.email,
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    domicile: req.body.domicile,
    nationality: req.body.nationality,
    nation: req.body.nation,
    religion: req.body.religion,
    marital: req.body.marital,
    MST: req.body.MST,
    CCCD: req.body.CCCD,
    phone: req.body.phone,
    image: "https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-1.jpg",
  });
  res.json({
    data: users,
  });
};

module.exports = {
  fetchList,
  create,
};
