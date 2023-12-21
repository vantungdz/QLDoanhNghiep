const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("department", departmentSchema);
