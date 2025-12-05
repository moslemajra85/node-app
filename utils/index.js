import Joi from "joi";

export const validateMovie = (movie) => {};

export const validateGenre = (genre) => {
  const genreSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });

  return genreSchema.validate(genre);
};
