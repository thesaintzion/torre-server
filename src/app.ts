import express from "express";
import globalMiddleware from "./middleware/global";
import logger from './utils/logger.util';
import routes from "./routes/routes";
import configUtil from "./utils/config.util";

const app = express();

// global Middleware configs...
globalMiddleware(app);

const port = configUtil.port;
app.listen(port, async () => {
  logger.info(`App running on http://localhost:${port}`);
  routes(app);
});
