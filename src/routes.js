import { Router } from "express";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

// Test route
routes.get("/", (req, res) => {
  return res.send("All is working here");
});

// Create and log user in
routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

// Authenticated routes
routes.use(authMiddleware);
routes.put("/users", UserController.update);

export default routes;
