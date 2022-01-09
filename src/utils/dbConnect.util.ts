import mongoose from "mongoose";
import configUtil from "./config.util";
import logger from "./logger.util";

const dbConnect = async () => {
  const dbUri = configUtil.dbUri;

  try {
    const result = await mongoose.connect(dbUri);
    logger.info(`DB: ${result.connections[0].name}, DB Port: ${result.connections[0].port}`);
  } catch (error) {
    console.error("Could not connect to db");
    process.exit(1);
  }
}

export default dbConnect;