import { Movie } from "../models/movie.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).send(movies);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovie = async (req, res) => {};
