import { Router } from "express";

import DonnorController from "../controllers/DonnorController.js";
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

export default router;