import React, { useState } from "react";
import styles from "@/styles/Auth/login.module.css";
import logoImg from "@/assets/images/BlackLogo.png";
import HeaderAuth from "@/components/ui/HeaderAuth/index";
import { Check, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados de login:", formData);
  };

  return (
    <>
   <HeaderAuth/>

      <main className={styles.main}>
        <div className={styles.loginGrupo}>
          <div className={styles.tituloLoginGrupo}>
            <h1>Bem-Vindo de volta!</h1>
            <p>Acesse sua conta para gerenciar suas doações ou estoque.</p>
          </div>

          <form id="loginUsuario" onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGrupo}>
              <label htmlFor="email">E-mail</label>
              <div className={styles.inputIcone}>
                <Mail size={25}/>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="exemplo@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.inputGrupo}>
              <div className={styles.senhaGrupo}>
                <label htmlFor="senha">Senha</label>
                <a href="/recuperar-senha">Esqueci minha senha</a>
              </div>
              <div className={styles.inputIcone}>
                <LockKeyhole size={25} />
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button className={styles.entrarBotao} type="submit">
              Entrar
            </button>

            <div className={styles.cadastroLinha}>
              <div></div>
              <span>OU</span>
              <div></div>
            </div>

            <p>
              Novo por aqui? <a href="/cadastro">Cadastre-se</a>
            </p>
          </form>
        </div>

        <div className={styles.direitosGrupo}>
          <div className={styles.dadosGrupo}>
            <i className="fa-solid fa-lock"></i>
            <p>Seus dados estão protegidos pela LGPD</p>
          </div>

          <div className={styles.termosGrupo}>
            <p>Termos de Uso</p>
            <p>Privacidade</p>
          </div>
        </div>
      </main>
    </>
  );
}