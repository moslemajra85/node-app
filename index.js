import express from "express";
import colors from "colors";
import { authUser } from "./middlewares/auth.js";
import { logger } from "./middlewares/log.js";
import dotenv from "dotenv";
import { ConnectDB } from "./db/connect.js";
import { Movie } from "./models/movie.js";
import MoviesRouter from "./routes/moviesRoutes.js";
dotenv.config();
ConnectDB();

const app = express();

app.use(express.json());
app.use(logger);
app.use(authUser);
app.use("/filmMaker/api/movies", MoviesRouter);

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port} in ${process.env.NODE_ENV} mode`
      .bgBlue.bold
  );
});
