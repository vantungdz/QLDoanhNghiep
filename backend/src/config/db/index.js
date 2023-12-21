const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dvtung7f6:Tung12345@cluster0.6desfmr.mongodb.net/Demo?retryWrites=true&w=majority"
    );
  } catch (err) {
    throw err;
  }
};
module.exports = dbConnect;
