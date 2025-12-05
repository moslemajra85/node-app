import Genre from "../models/genre.js";
import { validateGenre } from "../utils/index.js";
export const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find();

    res.status(200).send(genres);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getGenre = async (req, res) => {
  try {
    const { id } = req.params;

    const genre = await Genre.findById(id);

    if (!genre) {
      return res.status(404).send("Genre was not found!");
    }

    res.send(genre);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createGenre = async (req, res) => {
  try {
    const { error } = validateGenre(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    const genre = new Genre(req.body);

    const result = await genre.save();

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateGenre = async (req, res) => {
  try {
    const { error } = validateGenre(req.body);
    if (error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    const { id } = req.params;

    const result = await Genre.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Genre.findByIdAndDelete(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
