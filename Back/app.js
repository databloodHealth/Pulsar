import express from "express";
import cors from "cors";
import "dotenv/config";

import AuthRoutes from "./src/routes/AuthRoutes.js";
import AdminRoutes from "./src/routes/AdminRoutes.js";
import UserRoutes from "./src/routes/UserRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", AuthRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/", UserRoutes);


    
app.listen(process.env.PORT || 3333, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3333}`);
});