import User from "../models/user.js";
import { validateUser } from "../utils/index.js";

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


  


    
  } catch (error) {


  }
};
