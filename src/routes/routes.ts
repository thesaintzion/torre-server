import { Express, Request, Response } from "express";
import searchPeopleController from "../controllers/searchPeople.controller";
import searchPeopleBySkill from "../controllers/searchPeopleBySkill.controller";

const routes = (app: Express) => {
  app.get("/api/health-status", (req: Request, res: Response) =>
    res.sendStatus(200)
  );

  app.post("/api/people/search", searchPeopleController);
  app.post("/api/skill/search", searchPeopleBySkill);
  
  app.use("**", (req: Request, res: Response) =>
    res.status(404).send("Sorry, there is nothing here!")
  );
};

export default routes;
