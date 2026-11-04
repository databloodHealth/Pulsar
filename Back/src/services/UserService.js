import db from "../config/database.js";
import { usuario } from "../db/schema.js";

class UserService {
  async listarTodos() {
    return await db
      .select({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        tipoUsuario: usuario.tipoUsuario,
        createdAt: usuario.createdAt
      })
      .from(usuario);
  }
}

export default new UserService();