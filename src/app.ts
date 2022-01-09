import express, { Request, Response } from "express";
import globalMiddleware from "./middleware/global";
// import dbConnect from "./utils/dbConnect.util";
import logger from './utils/logger.util';
import routes from "./routes/routes";


console.log('yoo========= yoo =========')

const app = express();

// Middleware
globalMiddleware(app);


const port = process.env.PORT || 4000;

app.listen(port, async () => {
  logger.info(`App running on http://localhost:${port}`);
  // await dbConnect();
  routes(app);
});
