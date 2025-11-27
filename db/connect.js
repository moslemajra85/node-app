import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Successfully Connect To MongoDB...`.bgGreen.bold);
  } catch (error) {
    console.log(`We Could Not Connect to MongoDB: `.bgRed.bold, error.message);
  }
};
