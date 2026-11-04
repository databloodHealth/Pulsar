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
}

export default new UserController();