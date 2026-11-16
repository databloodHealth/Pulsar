import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import styles from "@/styles/Auth/stepSenha.module.css";
import HeaderAuth from "@/components/ui/HeaderAuth/index";
import { registrar } from "@/services/auth";

export default function Password() {
  const navigate = useNavigate();
  const location = useLocation();
  const cadastro = location.state?.cadastro;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    senha: "",
    verificarSenha: "",
  });

  useEffect(() => {
    if (!cadastro) {
      navigate("/cadastro", { replace: true });
    }
  }, [cadastro, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErr("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cadastro) return;
    if (!acceptedTerms) {
      setErr("Você precisa aceitar os termos de uso para continuar.");
      return;
    }
    if (formData.senha !== formData.verificarSenha) {
      setErr("As senhas não coincidem.");
      return;
    }
    if (formData.senha.length < 6) {
      setErr("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setLoading(true);
    try {
      await registrar({ ...cadastro, senha: formData.senha });
      navigate("/login");
    } catch (error) {
      setErr(error.response?.data?.message || "Erro ao realizar cadastro.");
    } finally {
      setLoading(false);
    }
  };

  if (!cadastro) return null;

  return (
    <>
      <HeaderAuth />
      <main className={styles.main}>
        <div className={styles.content}>
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
                      aria-label="Mostrar senha"
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
                      aria-label="Mostrar confirmação de senha"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {err && <p className={styles.errorMessage}>{err}</p>}

                <div className={styles.termosCheckbox}>
                  <button
                    type="button"
                    className={`${styles.checkbox} ${acceptedTerms ? styles.checked : ""}`}
                    onClick={() => setAcceptedTerms((prev) => !prev)}
                    aria-checked={acceptedTerms}
                    role="checkbox"
                    aria-label="Aceitar termos de uso"
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
                  <button
                    type="button"
                    onClick={() => navigate("/cadastro", { state: { cadastro } })}
                    className={styles.btnVoltar}
                  >
                    Voltar
                  </button>
                  <button type="submit" id="finalizarCadastro" disabled={loading}>
                    {loading ? "Cadastrando..." : "Finalizar Cadastro"}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
    </>

);
}