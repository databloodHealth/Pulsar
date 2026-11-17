import db from "../config/database.js";
import { doador, usuario } from "../db/schema.js";
import { and, eq, ne } from "drizzle-orm";
import bcrypt from "bcryptjs";

class UserService {
  async listarTodos() {
    return await db
      .select({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        tipoUsuario: usuario.tipoUsuario,
        createdAt: usuario.createdAt,
        cpf: doador.cpf,
        telefone: doador.telefone,
        dataNascimento: doador.dataNascimento,
        cidade: doador.cidade,
        tipoSanguineo: doador.tipoSanguineo
      })
      .from(usuario)
      .leftJoin(doador, eq(usuario.id, doador.usuarioId))
      .orderBy(usuario.id);
  }

  async atualizar(id, dados) {
    const { nome, email, cpf, senha, telefone, cidade, peso, sexo } = dados;
    const camposDoador = { cpf, telefone, cidade, peso, sexo };
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

      if (email !== undefined) {
        const [emailEmUso] = await tx
          .select({ id: usuario.id })
          .from(usuario)
          .where(and(eq(usuario.email, email), ne(usuario.id, id)));

        if (emailEmUso) {
          return "EMAIL_IN_USE";
        }
      }

      if (cpf !== undefined) {
        const [cpfEmUso] = await tx
          .select({ id: doador.id })
          .from(doador)
          .where(and(eq(doador.cpf, cpf), ne(doador.usuarioId, id)));

        if (cpfEmUso) {
          return "CPF_IN_USE";
        }
      }

      const atualizacaoUsuario = {};

      if (nome !== undefined) atualizacaoUsuario.nome = nome;
      if (email !== undefined) atualizacaoUsuario.email = email;

      if (senha !== undefined) {
        atualizacaoUsuario.senha = await bcrypt.hash(senha, 10);
      }

      if (Object.keys(atualizacaoUsuario).length > 0) {
        await tx
          .update(usuario)
          .set(atualizacaoUsuario)
          .where(eq(usuario.id, id));
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
