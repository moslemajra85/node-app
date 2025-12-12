import express from "express";
import { register } from "../controllers/usersControllers.js";

const router = express.Router();

router.post("/register", register);

export default router;
