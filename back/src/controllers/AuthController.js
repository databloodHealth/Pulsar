
import AuthService from "../services/AuthService.js";

class AuthController {

    // CADASTRO
    async register(req, res) {

        try {

            const resultado = await AuthService.register(req.body);

            return res.status(201).json(resultado);

        } catch (error) {

            console.error("Erro no cadastro:", error);

            return res.status(400).json({
                message: error.message || "Erro ao realizar cadastro."
            });
        }
    }


    // LOGIN
    async login(req, res) {

        try {

            const { email, senha } = req.body;

            const resultado = await AuthService.login(
                email,
                senha
            );

            return res.status(200).json(resultado);

        } catch (error) {

            console.error("Erro no login:", error);

            return res.status(401).json({
                message: error.message || "Erro ao realizar login."
            });
        }
    }
}

export default new AuthController();
