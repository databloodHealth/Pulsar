import db from "../config/database.js";
import { doador, usuario } from "../db/schema.js";
import { eq } from "drizzle-orm";

class DonorService {
  async listarTodos() {
    return db.select({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      cpf: doador.cpf,
      telefone: doador.telefone,
      cidade: doador.cidade,
      tipoSanguineo: doador.tipoSanguineo,
      peso: doador.peso,
      sexo: doador.sexo,
    }).from(usuario).innerJoin(doador, eq(usuario.id, doador.usuarioId));
  }
}

export default new DonorService();