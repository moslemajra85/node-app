import express from "express";
import colors from "colors";
// import movies from "./movies.js";

let movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    price: 12.99,
    releaseDate: "1994-10-14",
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    price: 11.99,
    releaseDate: "1972-03-24",
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    price: 14.99,
    releaseDate: "2008-07-18",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    price: 10.99,
    releaseDate: "1994-10-14",
  },
  {
    id: 5,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    price: 9.99,
    releaseDate: "1994-07-06",
  },
];

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello From Our Server!");
});

app.get("/filmMaker/api/movies", (req, res) => {
  res.send(movies);
});

app.get("/filmMaker/api/movies/:id", (req, res) => {
  const { id } = req.params;

  const movie = movies.find((movie) => movie.id === +id);

  if (!movie) {
    return res.status(404).send(`Movie with id ${id} not found.`);
  }

  res.send(movie);
});

app.post("/filmMaker/api/movies", (req, res) => {
  const data = req.body;

  movies.push({
    id: movies.length + 1,
    ...data,
  });

  res.send(movies[movies.length - 1]);
});

app.put("/filmMaker/api/movies/:id", (req, res) => {
  const { id } = req.params;

  let movie = movies.find((movie) => movie.id === +id);

  if (!movie) {
    return res.status(404).send(`Movie with id ${id} not found.`);
  }

  movies = movies.map((movie) =>
    movie.id === +id ? { ...movie, ...req.body } : movie
  );

  movie = movies.find((movie) => movie.id === +id);
  res.send(movie);
});

app.delete("/filmMaker/api/movies/:id", (req, res) => {
  const { id } = req.params;

  let movie = movies.find((movie) => movie.id === +id);

  if (!movie) {
    return res.status(404).send(`Movie with id ${id} not found.`);
  }

  const result = movies.splice(movies.indexOf(movie), 1)[0];

  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.bgBlue.bold);
});
