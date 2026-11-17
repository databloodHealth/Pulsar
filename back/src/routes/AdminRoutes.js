import { Router } from "express";

import DonnorController from "../controllers/DonnorController.js";
import UserController from "../controllers/UserController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const router = Router();

router.get(
    "/estoque",
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize("admin"),
    (req, res) => {

        return res.json({
            message: "Acesso autorizado ao estoque!",
            usuario: req.usuario
        });

    }
);

router.get(
    "/doadores",
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize("admin"),
    (req, res) => DonnorController.listarTodos(req, res)
);

router.delete(
    "/doadores/:id",
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize("admin"),
    (req, res) => DonnorController.deleteUser(req, res)
);

router.get(
    "/usuarios",
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize("admin"),
    (req, res) => UserController.listarTodos(req, res)
);

router.patch(
    "/usuarios/:id",
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize("admin"),
    (req, res) => UserController.atualizar(req, res)
);

router.delete(
    "/usuarios/:id",
    AuthMiddleware.authenticate,
    AuthMiddleware.authorize("admin"),
    (req, res) => UserController.deletar(req, res)
);

export default router;