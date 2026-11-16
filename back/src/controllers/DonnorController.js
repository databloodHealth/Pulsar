import DonnorService from "../services/DonorService.js";
import UserService from "../services/UserService.js";

class DonnorController {
  async listarTodos(req, res) {
    try {
      const doadores = await DonnorService.listarTodos();
      return res.status(200).json(doadores);
    } catch (error) {
      console.error("Erro ao listar doadores:", error);

      return res.status(500).json({
        message: "Erro ao listar doadores."
      });
    }
  }

  async deleteUser(req, res) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        message: "ID de usuário inválido."
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
        message: "Usuário e cadastro de doador excluídos com sucesso."
      });
    } catch (error) {
      console.error("Erro ao excluir usuário e cadastro de doador:", error);
      return res.status(500).json({
        message: "Erro ao excluir usuário."
      });
    }
  }
}

export default new DonnorController();