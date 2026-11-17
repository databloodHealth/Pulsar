import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { maskCPF, maskPhone } from "@/utils/masks";
import { atualizarUsuario } from "@/services/users";
import style from "./style.module.css";

export default function EditarUsuario({ usuario, onClose, onSaved }) {
  const ehDoador = usuario.tipoUsuario === "doador";

  const [form, setForm] = useState({
    nome: usuario.nome ?? "",
    email: usuario.email ?? "",
    cpf: String(usuario.cpf ?? "").replace(/\D/g, ""),
    telefone: String(usuario.telefone ?? "").replace(/\D/g, ""),
    cidade: usuario.cidade ?? "",
    peso: usuario.peso ?? "",
    sexo: usuario.sexo ?? "",
    senha: ""
  });
  const [erro, setErro] = useState("");
  const [salvando, setSalvando] = useState(false);

  function alterar(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function alterarNumerico(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value.replace(/\D/g, "") }));
  }

  async function salvar(e) {
    e.preventDefault();
    setErro("");

    const dados = {
      nome: form.nome.trim(),
      email: form.email.trim()
    };

    if (form.senha.trim()) {
      dados.senha = form.senha;
    }

    if (ehDoador) {
      dados.cpf = form.cpf;
      dados.telefone = form.telefone;
      dados.cidade = form.cidade.trim();

      if (form.peso !== "") {
        dados.peso = Number(form.peso);
      }

      if (form.sexo) {
        dados.sexo = form.sexo;
      }
    }

    setSalvando(true);

    try {
      await atualizarUsuario(usuario.id, dados);
      onSaved?.();
    } catch (error) {
      setErro(
        error.response?.data?.message || "Erro ao atualizar usuário."
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div
      className={style.fundoModal}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <form
        className={style.modal}
        onSubmit={salvar}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={style.title}>
          <div>
            <h1>Editar usuário</h1>
            <h2>Atualize as informações cadastrais do usuário.</h2>
          </div>

          <button
            type="button"
            className={style.fecharBotao}
            onClick={onClose}
            aria-label="Fechar modal"
          >
            <IoIosClose />
          </button>
        </div>

        <div className={style.grid}>
          <div className={`${style.campo} ${style.campoLargo}`}>
            <label htmlFor="editNome">Nome completo</label>
            <input
              id="editNome"
              name="nome"
              type="text"
              value={form.nome}
              onChange={alterar}
              required
            />
          </div>

          <div className={`${style.campo} ${style.campoLargo}`}>
            <label htmlFor="editEmail">E-mail</label>
            <input
              id="editEmail"
              name="email"
              type="email"
              value={form.email}
              onChange={alterar}
              required
            />
          </div>

          {ehDoador && (
            <>
              <div className={style.campo}>
                <label htmlFor="editCpf">CPF</label>
                <input
                  id="editCpf"
                  name="cpf"
                  type="text"
                  inputMode="numeric"
                  value={maskCPF(form.cpf)}
                  onChange={alterarNumerico}
                  placeholder="000.000.000-00"
                  required
                />
              </div>

              <div className={style.campo}>
                <label htmlFor="editTelefone">Telefone</label>
                <input
                  id="editTelefone"
                  name="telefone"
                  type="tel"
                  inputMode="numeric"
                  value={maskPhone(form.telefone)}
                  onChange={alterarNumerico}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div className={style.campo}>
                <label htmlFor="editCidade">Cidade</label>
                <input
                  id="editCidade"
                  name="cidade"
                  type="text"
                  value={form.cidade}
                  onChange={alterar}
                  required
                />
              </div>

              <div className={style.campo}>
                <label htmlFor="editPeso">Peso (kg)</label>
                <input
                  id="editPeso"
                  name="peso"
                  type="number"
                  min="1"
                  step="0.01"
                  value={form.peso}
                  onChange={alterar}
                />
              </div>

              <div className={style.campo}>
                <label htmlFor="editSexo">Sexo</label>
                <select
                  id="editSexo"
                  name="sexo"
                  value={form.sexo}
                  onChange={alterar}
                >
                  <option value="">Não informado</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
              </div>
            </>
          )}

          <div className={`${style.campo} ${style.campoLargo}`}>
            <label htmlFor="editSenha">Nova senha (opcional)</label>
            <input
              id="editSenha"
              name="senha"
              type="password"
              value={form.senha}
              onChange={alterar}
              placeholder="Mínimo 6 caracteres"
              minLength={6}
            />
          </div>
        </div>

        {erro && <p className={style.erro}>{erro}</p>}

        <div className={style.botoes}>
          <button
            type="button"
            className={style.cancelarBotao}
            onClick={onClose}
            disabled={salvando}
          >
            Cancelar
          </button>

          <button
            type="submit"
            className={style.salvarBotao}
            disabled={salvando}
          >
            {salvando ? "Salvando..." : "Salvar alterações"}
          </button>
        </div>
      </form>
    </div>
  );
}
