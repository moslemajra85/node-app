import { getMovies, getMovie } from "../controllers/moviesControllers.js";
import express from "express";

const router = express.Router();

router.get("/", getMovies);
router.get("/:id", getMovie);

export default router;
