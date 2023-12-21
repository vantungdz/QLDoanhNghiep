const userModel = require("../Model/user.model");

const fetchList = async (req, res) => {
  const users = await userModel.find();
  res.json({
    data: users,
  });
};

const create = async (req, res) => {
  const users = await userModel.create({
    employee_id: "MS005",
    email: "dovantung@gmail.com",
    name: "Name so 5",
    age: 24,
    sex: "1",
    domicile: "Hai Duong",
    nationality: "Viet Nam",
    nation: "Kinh",
    religion: "Khong",
    marital: "1",
    MST: "123123",
    CCCD: "066098018468",
    phone: "0379399512",
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
