import UserService from "../services/UserService.js";

class UserController {
  async listarTodos(req, res) {
    try {
      const usuarios = await UserService.listarTodos();

      return res.status(200).json(usuarios);
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message: "Erro ao listar usuários."
      });
    }
  }

  async atualizar(req, res) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "ID de usuário inválido."
      });
    }

    if (req.usuario.tipoUsuario !== "admin" && req.usuario.id !== id) {
      return res.status(403).json({
        message: "Você não possui permissão para atualizar este usuário."
      });
    }

    const camposPermitidos = [
      "nome",
      "email",
      "cpf",
      "senha",
      "telefone",
      "cidade",
      "peso",
      "sexo"
    ];
    const camposRecebidos = Object.keys(req.body ?? {});

    if (
      camposRecebidos.length === 0 ||
      camposRecebidos.some((campo) => !camposPermitidos.includes(campo))
    ) {
      return res.status(400).json({
        message: "Informe campos válidos para atualização."
      });
    }

    const { nome, email, cpf, senha, telefone, cidade, peso, sexo } = req.body;

    const nomeNormalizado =
      nome !== undefined ? String(nome).trim() : undefined;
    const emailNormalizado =
      email !== undefined ? String(email).trim().toLowerCase() : undefined;
    const cpfNormalizado =
      cpf !== undefined ? String(cpf).replace(/\D/g, "") : undefined;
    const telefoneNormalizado =
      telefone !== undefined ? String(telefone).replace(/\D/g, "") : undefined;
    const cidadeNormalizada =
      cidade !== undefined ? String(cidade).trim() : undefined;

    if (
      (nomeNormalizado !== undefined &&
        (!nomeNormalizado || nomeNormalizado.length > 100)) ||
      (emailNormalizado !== undefined &&
        (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalizado) ||
          emailNormalizado.length > 255)) ||
      (cpfNormalizado !== undefined && !/^\d{11}$/.test(cpfNormalizado)) ||
      (telefoneNormalizado !== undefined &&
        !/^\d{10,11}$/.test(telefoneNormalizado)) ||
      (cidadeNormalizada !== undefined &&
        (!cidadeNormalizada || cidadeNormalizada.length > 100)) ||
      (senha !== undefined &&
        (typeof senha !== "string" || senha.length < 6)) ||
      (peso !== undefined &&
        ((typeof peso !== "number" && typeof peso !== "string") ||
          !Number.isFinite(Number(peso)) ||
          Number(peso) <= 0 ||
          Number(peso) > 999.99)) ||
      (sexo !== undefined &&
        sexo !== null &&
        !["masculino", "feminino"].includes(sexo))
    ) {
      return res.status(400).json({
        message: "Um ou mais campos possuem valores inválidos."
      });
    }

    try {
      const resultado = await UserService.atualizar(id, {
        nome: nomeNormalizado,
        email: emailNormalizado,
        cpf: cpfNormalizado,
        senha,
        telefone: telefoneNormalizado,
        cidade: cidadeNormalizada,
        peso,
        sexo
      });

      if (resultado === "USER_NOT_FOUND") {
        return res.status(404).json({
          message: "Usuário não encontrado."
        });
      }

      if (resultado === "DONOR_NOT_FOUND") {
        return res.status(404).json({
          message: "Dados de doador não encontrados para este usuário."
        });
      }

      if (resultado === "EMAIL_IN_USE") {
        return res.status(409).json({
          message: "Este e-mail já está em uso."
        });
      }

      if (resultado === "CPF_IN_USE") {
        return res.status(409).json({
          message: "Este CPF já está cadastrado."
        });
      }

      return res.status(200).json({
        message: "Usuário atualizado com sucesso."
      });
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);

      return res.status(500).json({
        message: "Erro ao atualizar usuário."
      });
    }
  }

  async deletar(req, res) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "ID de usuário inválido."
      });
    }

    if (req.usuario.id === id) {
      return res.status(400).json({
        message: "Você não pode excluir o próprio usuário."
      });
    }

    try {
      const resultado = await UserService.delete(id);

      if (resultado === "USER_NOT_FOUND") {
        return res.status(404).json({
          message: "Usuário não encontrado."
        });
      }

      return res.status(200).json({
        message: "Usuário excluído com sucesso."
      });
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);

      return res.status(500).json({
        message: "Erro ao excluir usuário."
      });
    }
  }
}

export default new UserController();
