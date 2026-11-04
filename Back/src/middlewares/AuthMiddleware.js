
import jwt from "jsonwebtoken";

class AuthMiddleware {

    // VERIFICAR AUTENTICAÇÃO
    authenticate(req, res, next) {

        try {

            const authHeader = req.headers.authorization;

            if (!authHeader) {
                return res.status(401).json({
                    message: "Token não informado."
                });
            }

            // Separar Bearer do token
            const [, token] = authHeader.split(" ");

            if (!token) {
                return res.status(401).json({
                    message: "Token inválido."
                });
            }

            // Validar token
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            // Disponibilizar os dados do usuário
            req.usuario = {
                id: Number(decoded.sub),
                tipoUsuario: decoded.tipoUsuario
            };

            return next();

        } catch (error) {

            return res.status(401).json({
                message: "Sessão inválida ou expirada."
            });
        }
    }


    // VERIFICAR PERMISSÃO
    authorize(...tiposPermitidos) {

        return (req, res, next) => {

            if (!tiposPermitidos.includes(req.usuario.tipoUsuario)) {
                return res.status(403).json({
                    message: "Você não possui permissão para acessar este recurso."
                });
            }

            return next();
        };
    }
}

export default new AuthMiddleware();
