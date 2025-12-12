import Joi from "joi";

export const validateMovie = (movie) => {};

export const validateGenre = (genre) => {
  const genreSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });

  return genreSchema.validate(genre);
};

export const validateUser = (user) => {
  const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      .required(),
    password: Joi.string().min(6).required(),
  });

  return userSchema.validate(user);
};
