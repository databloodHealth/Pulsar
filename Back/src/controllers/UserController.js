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

    const camposPermitidos = ["senha", "telefone", "cidade", "peso", "sexo"];
    const camposRecebidos = Object.keys(req.body ?? {});

    if (
      camposRecebidos.length === 0 ||
      camposRecebidos.some((campo) => !camposPermitidos.includes(campo))
    ) {
      return res.status(400).json({
        message: "Informe campos válidos para atualização."
      });
    }

    const { senha, telefone, cidade, peso, sexo } = req.body;

    if (
      (senha !== undefined && (typeof senha !== "string" || !senha.trim())) ||
      (telefone !== undefined &&
        (typeof telefone !== "string" || !telefone.trim() || telefone.length > 20)) ||
      (cidade !== undefined &&
        (typeof cidade !== "string" || !cidade.trim() || cidade.length > 100)) ||
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
        senha,
        telefone,
        cidade,
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
}

export default new UserController();