import { useState } from "react";
import styles from "@/styles/Auth/cadastro.module.css";
import HeaderAuth from "@/components/ui/HeaderAuth/index";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { registrar } from "@/services/auth";

export default function Cadastro() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cidade: "",
    telefone: "",
    dataNascimento: "",
    cpf: "",
    senha: "",
  });

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
    if (!acceptedTerms) {
      setErr("Você precisa aceitar os termos de uso para continuar.");
      return;
    }
    setLoading(true);
    try {
      const { nome, email, cidade, telefone, dataNascimento, cpf, senha } = formData;
      await registrar({ nome, email, cidade, telefone, dataNascimento, cpf, senha });
      navigate("/login");
    } catch (error) {
      setErr(error.response?.data?.message || "Erro ao realizar cadastro.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderAuth />

      <main className={styles.main}>
        <div className={styles.content}>

          {/* Card Principal */}
          <div className={styles.container}>
            <div className={styles.containerTitle}>
              <h1>Criar sua conta</h1>
              <h2>
                Comece sua jornada salvando vidas. Informe seus dados para
                continuar.
              </h2>
            </div>

            <form onSubmit={handleSubmit} className={styles.containerForm}>
              <div className={styles.campoForm}>
                <label htmlFor="nome">Nome completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  placeholder="Ex: João da Silva Santos"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.campoForm}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="nome@exemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.blocoForm}>
                <div className={styles.campoForm}>
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                    placeholder="Monte Alto-SP"
                    value={formData.cidade}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.campoForm}>
                  <label htmlFor="telefone">Celular</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    placeholder="(00) 0000-0000"
                    value={formData.telefone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.blocoForm}>
                <div className={styles.campoForm}>
                  <label htmlFor="dataNascimento">Data de nascimento</label>
                  <input
                    type="date"
                    id="dataNascimento"
                    name="dataNascimento"
                    required
                    value={formData.dataNascimento}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.campoForm}>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    required
                    placeholder="000.000.000-00"
                    value={formData.cpf}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.campoForm}>
                <label htmlFor="senha">Senha</label>
                <div className={styles.inputWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="senha"
                    name="senha"
                    required
                    value={formData.senha}
                    onChange={handleChange}
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
                <a href="/login">Já tenho conta</a>
                <button type="submit" disabled={loading}>
                  {loading ? "Cadastrando..." : "Finalizar Cadastro"}
                </button>
              </div>
            </form>
          </div>

          {/* Rodapé / Informações legais */}
          <div className={styles.info}>
            <div className={styles.lgpd}>
              <p>Seus dados estão protegidos pela LGPD</p>
            </div>
            <div className={styles.termos}>
              <a href="/termos">Termos de uso</a>
              <a href="/privacidade">Privacidade</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
