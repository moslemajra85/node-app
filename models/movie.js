import mongoose from "mongoose";

// create  movie Schema

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  price: Number,
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
  },
  releaseDate: {
    type: Date,
    default: Date.now(),
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

// create and export  Movie class

export const Movie = mongoose.model("Movie", movieSchema);
