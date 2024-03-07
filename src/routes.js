import { Router } from "express";

import {
  createTeam,
  listTeams,
  getTeamByUser,
} from "./controllers/TeamController.js";

const routes = Router();

routes.post("/api/teams", createTeam);
routes.get("/api/teams/:user", getTeamByUser);
routes.get("/api/teams", listTeams);

export default routes;
