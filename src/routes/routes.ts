import { Express, Request, Response } from "express";
import { createSessionController } from "../controllers/session.controller";
import createUserController from "../controllers/user.controller";
import validateResource from "../middleware/validateResource";
import { createSessionSchema } from "../schemas/session.schema";
import { createUserSchema } from "../schemas/user.schema";

const routes = (app: Express) => {
  app.get("/api/health-status", (req: Request, res: Response) =>
    res.sendStatus(200)
  );
  app.post("/api/user", validateResource(createUserSchema), createUserController);
  app.post("/api/session", validateResource(createSessionSchema), createSessionController);

  app.use("**", (req: Request, res: Response) =>
    res.status(404).send("Silence is golden!")
  );
};

export default routes;
