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
  image: {
    type: String,
  },
});

module.exports = mongoose.model("users", userSchema);
