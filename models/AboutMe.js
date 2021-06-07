const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aboutmeSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "aboutme",
  }
);

module.exports = mongoose.model("AboutMe", aboutmeSchema);
