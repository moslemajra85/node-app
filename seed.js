import mongoose from "mongoose";
import { Movie } from "./models/movie.js";
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
    await Movie.deleteMany();

    const movies = [
      { title: "Inception", director: "Christopher Nolan", price: 19.99 },
      { title: "Interstellar", director: "Christopher Nolan", price: 17.5 },
      { title: "The Dark Knight", director: "Christopher Nolan", price: 15.99 },
      { title: "Pulp Fiction", director: "Quentin Tarantino", price: 14.0 },
      {
        title: "The Matrix",
        director: "Lana Wachowski & Lilly Wachowski",
        price: 18.25,
      },
      { title: "The Social Network", director: "David Fincher", price: 13.5 },
      { title: "Avatar", director: "James Cameron", price: 20.0 },
      {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        price: 16.75,
      },
      { title: "Whiplash", director: "Damien Chazelle", price: 12.99 },
      { title: "Parasite", director: "Bong Joon-ho", price: 15.0 },
    ];

    Movie.insertMany(movies);

    mongoose.disconnect();

    console.log("Data Created Successfully".green.bold);
  } catch (error) {
    console.log("Priblem While inserting data: ".red.bold, err);
  }
}

// function to destroy Data

async function destroyData() {
  try {
    await Movie.deleteMany();
    mongoose.disconnect();
    console.log("Data Destroyed Successfully".green.bold);
  } catch (error) {
    console.log("Problem While destroying data: ".red.bold, err);
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
