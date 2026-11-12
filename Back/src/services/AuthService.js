
import db from "../config/database.js";
import { usuario, doador } from "../db/schema.js";

import { eq, or } from "drizzle-orm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthService {

    // CADASTRO
    async register(dados) {

        const {
            nome,
            email,
            senha,
            cpf,
            telefone,
            dataNascimento,
            cidade,
            // tipoSanguineo,
            // peso,
            // sexo
        } = dados;

        // 1. Validar campos obrigatórios
        if (
            !nome || !email || !senha ||
            !cpf || !telefone || !cidade ||!dataNascimento 
            // !tipoSanguineo || peso === undefined || peso === null
        ) {
            throw new Error("Preencha todos os campos obrigatórios.");
        }

        const emailNormalizado = email.trim().toLowerCase();

        // 2. Verificar se o e-mail já existe
        const [emailExistente] = await db
            .select()
            .from(usuario)
            .where(eq(usuario.email, emailNormalizado));

        if (emailExistente) {
            throw new Error("Este e-mail já está cadastrado.");
        }

        // 3. Verificar se o CPF já existe
        const [cpfExistente] = await db
            .select()
            .from(doador)
            .where(eq(doador.cpf, cpf));

        if (cpfExistente) {
            throw new Error("Este CPF já está cadastrado.");
        }

        // 4. Criptografar senha
        const senhaHash = await bcrypt.hash(senha, 10);

        // 5. Criar usuário e doador em uma transação
        const resultado = await db.transaction(async (tx) => {

            const [novoUsuario] = await tx
                .insert(usuario)
                .values({
                    nome,
                    email: emailNormalizado,
                    senha: senhaHash,
                    tipoUsuario: "doador"
                })
                .$returningId();

            await tx.insert(doador).values({
                usuarioId: novoUsuario.id,
                cpf,
                telefone,
                dataNascimento,
                cidade,
                tipoSanguineo: null,
                peso: null,
                sexo: null
            });

            return novoUsuario;
        });

        return {
            message: "Cadastro realizado com sucesso!",
            usuarioId: resultado.id
        };
    }


    // LOGIN
    async login(email, senha) {

        // 1. Procurar usuário pelo e-mail
        const [user] = await db
            .select()
            .from(usuario)
            .where(eq(usuario.email, email.trim().toLowerCase()));

        if (!user) {
            throw new Error("E-mail ou senha inválidos.");
        }

        // 2. Comparar senha informada com hash do banco
        const senhaValida = await bcrypt.compare(
            senha,
            user.senha
        );

        if (!senhaValida) {
            throw new Error("E-mail ou senha inválidos.");
        }

        // 3. Gerar JWT
        const token = jwt.sign(
            {
                tipoUsuario: user.tipoUsuario
            },
            process.env.JWT_SECRET,
            {
                subject: String(user.id),
                expiresIn: "1d"
            }
        );

        // 4. Retornar dados
        return {
            message: "Login realizado com sucesso!",
            token,
            usuario: {
                id: user.id,
                nome: user.nome,
                email: user.email,
                tipoUsuario: user.tipoUsuario
            }
        };
    }
}

export default new AuthService();
