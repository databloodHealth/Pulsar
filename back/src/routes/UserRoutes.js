import { Router } from "express";
import UserController from "../controllers/UserController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const router = Router();

router.get(
  "/",
  AuthMiddleware.authenticate,
  AuthMiddleware.authorize("admin"),
  (req, res) => UserController.listarTodos(req, res)
);

router.patch(
  "/edit/:id",
  AuthMiddleware.authenticate,
  (req, res) => UserController.atualizar(req, res)
);

export default router;