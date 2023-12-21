const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  position: {
    type: mongoose.Schema.Types.ObjectId,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  sex: {
    type: String,
  },
  domicile: {
    type: String,
  },
  nationality: {
    type: String,
  },
  nation: {
    type: String,
  },
  religion: {
    type: String,
  },
  marital: {
    type: String,
  },
  MST: {
    type: String,
  },
  CCCD: {
    type: String,
  },
  phone: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
