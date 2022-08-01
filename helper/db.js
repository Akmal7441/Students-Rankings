const url =
  "mongodb+srv://Alimov_1:PCNHrcIKi1Wxufg6@cluster0.qa2s8y6.mongodb.net/Student-level";
const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("mongdb is connected");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
