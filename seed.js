import mongoose from "mongoose";
import { Movie } from "./models/movie.js";
import Genre from "./models/genre.js";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB".green.bold))
  .catch((err) =>
    console.log("Error: We Could not Connect To MongoDB".red.bold, err.message)
  );

//function to create Data

async function createData() {
  try {
    await Genre.deleteMany();
    await Movie.deleteMany();

    const genres = await Genre.insertMany([
      { name: "Science Fiction" },
      { name: "Action" },
      { name: "Crime" },
      { name: "Drama" },
      { name: "Thriller" },
    ]);

    const genreMap = genres.reduce((acc, genre) => {
      acc[genre.name] = genre._id;
      return acc;
    }, {});

    const movies = [
      {
        title: "Inception",
        director: "Christopher Nolan",
        price: 19.99,
        genre: genreMap["Science Fiction"],
      },
      {
        title: "Interstellar",
        director: "Christopher Nolan",
        price: 17.5,
        genre: genreMap["Science Fiction"],
      },
      {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        price: 15.99,
        genre: genreMap["Action"],
      },
      {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        price: 14.0,
        genre: genreMap["Crime"],
      },
      {
        title: "The Matrix",
        director: "Lana Wachowski & Lilly Wachowski",
        price: 18.25,
        genre: genreMap["Science Fiction"],
      },
      {
        title: "The Social Network",
        director: "David Fincher",
        price: 13.5,
        genre: genreMap["Drama"],
      },
      {
        title: "Avatar",
        director: "James Cameron",
        price: 20.0,
        genre: genreMap["Science Fiction"],
      },
      {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        price: 16.75,
        genre: genreMap["Crime"],
      },
      {
        title: "Whiplash",
        director: "Damien Chazelle",
        price: 12.99,
        genre: genreMap["Drama"],
      },
      {
        title: "Parasite",
        director: "Bong Joon-ho",
        price: 15.0,
        genre: genreMap["Thriller"],
      },
    ];

    await Movie.insertMany(movies);

    mongoose.disconnect();

    console.log("Data Created Successfully".green.bold);
  } catch (error) {
    console.log("Problem While inserting data: ".red.bold, error);
  }
}

// function to destroy Data

async function destroyData() {
  try {
    await Genre.deleteMany();
    await Movie.deleteMany();
    mongoose.disconnect();
    console.log("Data Destroyed Successfully".green.bold);
  } catch (error) {
    console.log("Problem While destroying data: ".red.bold, error);
  }
}

const options = process.argv[2];

if (options === "--create") {
  createData();
} else if (options === "--destroy") {
  destroyData();
} else {
  console.log("Invalid Option");
}
