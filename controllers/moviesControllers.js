import { Movie } from "../models/movie.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).send(movies);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).send("Movie Not Found");
    }

    res.send(movie);

    res.send(id);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const result = await movie.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!movie) {
      return res.status(404).send("Movie Not Found");
    }

    res.send(movie);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Movie.findByIdAndDelete(id);
    if (!result) return res.status(404).send("Movie Not Found");

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
