import Genre from "../models/genre.js";

export const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find();

    res.status(200).send(genres);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getGenre = async (req, res) => {};

export const createGenre = async (req, res) => {};

export const updateGenre = async (req, res) => {};

export const deleteGenre = async (req, res) => {};
