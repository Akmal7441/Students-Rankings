const { Schema, model } = require("mongoose");

const studentSchema = {
  FirstName: {
    type: String,
    require: true,
  },
  LastName: {
    type: String,
    require: true,
  },
  Number: {
    type: Number,
    require: true,
  },
  Group: {
    type: String,
    require: true,
  },
  Month: {
    type: Number,
    require: true,
  },
  Score: {
    type: Number,
    require: true,
  },
  No: {
    type: Number,
  },
};

module.exports = model("clothe", studentSchema);
