const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
    },
    skills: {
      type: Array,
      required: true,
    },
    gitHub: {
      type: String,
      required: true,
    },
    live: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "projects",
  }
);

module.exports = mongoose.model("Projects", projectSchema);
