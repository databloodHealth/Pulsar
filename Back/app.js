import express from "express";
import cors from "cors";
import "dotenv/config";
import morgan from 'morgan';

import AuthRoutes from "./src/routes/AuthRoutes.js";
import AdminRoutes from "./src/routes/AdminRoutes.js";
import UserRoutes from "./src/routes/UserRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan('dev'));

app.get("/health", (req, res) => {
    return res.status(200).json({ status: "ok" });
});

app.use("/api/auth", AuthRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/", UserRoutes);

const port = Number(process.env.PORT || 3333);

app.listen(port, "0.0.0.0", () => {
    console.log(`Servidor rodando na porta ${port}`);
});