import { Router } from "express";

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

export default router;