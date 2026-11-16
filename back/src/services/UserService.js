import db from "../config/database.js";
import { doador, usuario } from "../db/schema.js";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

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

  async atualizar(id, dados) {
    const { senha, telefone, cidade, peso, sexo } = dados;
    const camposDoador = { telefone, cidade, peso, sexo };
    const atualizacaoDoador = Object.fromEntries(
      Object.entries(camposDoador).filter(([, valor]) => valor !== undefined)
    );

    return db.transaction(async (tx) => {
      const [usuarioExistente] = await tx
        .select({ id: usuario.id })
        .from(usuario)
        .where(eq(usuario.id, id));

      if (!usuarioExistente) {
        return "USER_NOT_FOUND";
      }

      if (Object.keys(atualizacaoDoador).length > 0) {
        const [doadorExistente] = await tx
          .select({ id: doador.id })
          .from(doador)
          .where(eq(doador.usuarioId, id));

        if (!doadorExistente) {
          return "DONOR_NOT_FOUND";
        }

        await tx
          .update(doador)
          .set({
            ...atualizacaoDoador,
            ...(peso !== undefined ? { peso: String(peso) } : {})
          })
          .where(eq(doador.usuarioId, id));
      }

      if (senha !== undefined) {
        const senhaHash = await bcrypt.hash(senha, 10);
        await tx
          .update(usuario)
          .set({ senha: senhaHash })
          .where(eq(usuario.id, id));
      }

      return "UPDATED";
    });
  }

  async delete(id) {
    return db.transaction(async (tx) => {
      const [usuarioExistente] = await tx
        .select({ id: usuario.id })
        .from(usuario)
        .where(eq(usuario.id, id));

      if (!usuarioExistente) {
        return "USER_NOT_FOUND";
      }

      await tx.delete(doador).where(eq(doador.usuarioId, id));
      await tx.delete(usuario).where(eq(usuario.id, id));

      return "DELETED";
    });
  }
}

export default new UserService();