import User from "../models/user.js";
import { validateUser } from "../utils/index.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).send({
        message: "Invalid User",
        error: error.message,
      });
    }

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        error: "Invalid Email, user already exist",
      });
    }

    // hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    const result = await user.save();
    res.json(result);
  } catch (error) {}
};
