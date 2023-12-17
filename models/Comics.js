const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comicSchema = new Schema(
    {
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true
  }
}
);

const Comic = mongoose.model(("Comic", comicSchema));

module.exports = Comic;
