import api from "./api";

export const registrar = (dados) => api.post("/api/auth/register", dados);

export const logar = (email, senha) => api.post("/api/auth/login", { email, senha });
