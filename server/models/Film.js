const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const filmSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  rated: {
    type: String,
    required: true,
  },
  release: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  actors: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

const Film = model("Film", filmSchema);

module.exports = Film;
