import { Router } from "express";

import login from "./login.routes";

const routes = Router();

routes.use("/Login", login);

export default routes;
