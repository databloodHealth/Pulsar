import api from "./api";

export const listarUsuarios = () => api.get("/api/admin/usuarios");

export const atualizarUsuario = (id, dados) =>
    api.patch(`/api/admin/usuarios/${id}`, dados);

export const excluirUsuario = (id) => api.delete(`/api/admin/usuarios/${id}`);
