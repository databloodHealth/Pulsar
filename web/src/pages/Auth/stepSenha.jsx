import { useState } from "react";
import styles from "@/styles/Auth/stepSenha.module.css";
import logoImg from "@/assets/images/BlackLogo.png";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPassword({ formData, setFormData, onPrev, onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert("Você precisa aceitar os termos de uso para continuar.");
      return;
    }
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
      <main className={styles.main}>
        <div className={styles.content}>
          {/* Conteúdo Principal */}
          <div className={styles.container}>
            <section className={styles.jornada}>
              <h1>
                Sua jornada de <span>doador</span> <br /> começa <br /> com segurança.
              </h1>
              <p>
                Estamos quase lá. Defina uma senha forte para proteger seus dados de saúde e histórico de doações.
              </p>
            </section>

            <section className={styles.senhaContainer}>
              <div className={styles.title}>
                <h1>Segurança da Conta</h1>
              </div>

              <form className={styles.createSenhaForm} onSubmit={handleSubmit}>
                <div className={styles.senhaFill}>
                  <label htmlFor="senha">Senha</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="senha"
                      id="senha"
                      value={formData.senha}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className={styles.eyeBtn}
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className={styles.senhaFill}>
                  <label htmlFor="verificarSenha">Confirmar senha</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="verificarSenha"
                      id="verificarSenha"
                      value={formData.verificarSenha}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className={styles.eyeBtn}
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className={styles.termosCheckbox}>
                  <button
                    type="button"
                    className={`${styles.checkbox} ${acceptedTerms ? styles.checked : ""}`}
                    onClick={() => setAcceptedTerms((prev) => !prev)}
                    aria-checked={acceptedTerms}
                    role="checkbox"
                  >
                    {acceptedTerms && <div className={styles.checkmark} />}
                  </button>
                  <p>
                    Li e concordo com os{" "}
                    <a href="/termos" className={styles.termosLink}>
                      Termos de Uso
                    </a>{" "}
                    e a{" "}
                    <a href="/privacidade" className={styles.termosLink}>
                      Política de Privacidade
                    </a>{" "}
                    para o tratamento de dados sensíveis.
                  </p>
                </div>

                <div className={styles.botForm}>
                  <button type="button" onClick={onPrev} className={styles.btnVoltar}>
                    Voltar
                  </button>
                  <button type="submit" id="finalizarCadastro">
                    Finalizar Cadastro
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
  );
}