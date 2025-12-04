import {
  getGenres,
  getGenre,
  createGenre,
  updateGenre,
  deleteGenre,
} from "../controllers/genresControllers.js";
import express from "express";

const router = express.Router();

// /filmMaker/api/genres
router.get("/", getGenres);
router.get("/:id", getGenre);
router.post("/", createGenre);
router.put("/:id", updateGenre);
router.delete("/:id", deleteGenre);

export default router;
