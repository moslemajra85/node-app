import express from "express";
import colors from "colors";
import { authUser } from "./middlewares/auth.js";
import { logger } from "./middlewares/log.js";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectDB } from "./db/connect.js";
import { Movie } from "./models/movie.js";
import MoviesRouter from "./routes/moviesRoutes.js";
import GenreRouter from "./routes/genreRoutes.js";
import AuthRouter from "./routes/authRoutes.js";

dotenv.config();
ConnectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(authUser);
app.use("/filmMaker/api/movies", MoviesRouter);
app.use("/filmMaker/api/genres", GenreRouter);
app.use("/filmMaker/api/users", AuthRouter);

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port} in ${process.env.NODE_ENV} mode`
      .bgBlue.bold
  );
});
