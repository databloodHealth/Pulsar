import { useEffect, useState } from "react";
import { Pencil, Search, Trash2 } from "lucide-react";
import SystemLayout from "@/layouts/SystemLayout";
import PageTitle from "@/components/ui/PageTitle";
import Toast from "@/components/ui/Toast";
import AvatarComNumero from "@/components/GeradorAvatar";
import EditarUsuario from "@/components/Admin/EditarUsuario";
import { useToast } from "@/hooks/useToast";
import { maskCPF, maskPhone } from "@/utils/masks";
import { excluirUsuario, listarUsuarios } from "@/services/users";
import style from "@/styles/System/usuarios.module.css";

function formatarData(valor) {
  if (!valor) return "—";

  const data = new Date(valor);
  if (Number.isNaN(data.getTime())) return "—";

  return data.toLocaleDateString("pt-BR");
}

function formatarCpf(valor) {
  const digitos = String(valor ?? "").replace(/\D/g, "");

  return digitos.length === 11 ? maskCPF(digitos) : valor || "—";
}

function formatarTelefone(valor) {
  const digitos = String(valor ?? "").replace(/\D/g, "");

  return digitos.length >= 10 ? maskPhone(digitos) : valor || "—";
}

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [editando, setEditando] = useState(null);
  const [excluindo, setExcluindo] = useState(null);
  const [removendo, setRemovendo] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  async function carregarUsuarios() {
    setCarregando(true);
    setErro("");

    try {
      const { data } = await listarUsuarios();
      setUsuarios(Array.isArray(data) ? data : []);
    } catch (error) {
      setErro(
        error.response?.data?.message || "Erro ao carregar usuários."
      );
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    let ativo = true;

    async function carregarInicial() {
      try {
        const { data } = await listarUsuarios();
        if (ativo) setUsuarios(Array.isArray(data) ? data : []);
      } catch (error) {
        if (ativo) {
          setErro(
            error.response?.data?.message || "Erro ao carregar usuários."
          );
        }
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    carregarInicial();

    return () => {
      ativo = false;
    };
  }, []);

  async function confirmarExclusao() {
    if (!excluindo) return;

    setRemovendo(true);

    try {
      await excluirUsuario(excluindo.id);
      setUsuarios((prev) => prev.filter((u) => u.id !== excluindo.id));
      showToast({
        type: "delete",
        title: "Usuário excluído",
        message: `${excluindo.nome} foi removido do sistema.`
      });
      setExcluindo(null);
      setErro("");
    } catch (error) {
      setErro(
        error.response?.data?.message || "Erro ao excluir usuário."
      );
    } finally {
      setRemovendo(false);
    }
  }

  const termo = busca.trim().toLowerCase();
  const usuariosFiltrados = usuarios.filter((usuario) => {
    if (!termo) return true;

    return [usuario.nome, usuario.email, usuario.cpf, usuario.telefone]
      .filter(Boolean)
      .some((valor) => String(valor).toLowerCase().includes(termo));
  });

  function handleSalvamento() {
    setEditando(null);
    showToast({
      type: "success",
      title: "Alterações salvas",
      message: "Os dados do usuário foram atualizados com sucesso."
    });
    carregarUsuarios();
  }

  return (
    <SystemLayout>
      <div className={style.containerUsuarios}>
        <div className={style.containerTitulos}>
          <PageTitle
            title={"Usuários"}
            subtitle={"Gerencie todas as contas cadastradas no sistema, edite dados ou remova usuários."}
          />
        </div>

        <div className={style.containerPesquisas}>
          <div className={style.inputWrapper}>
            <Search size={18} className={style.inputIcone} />
            <input
              className={style.inputPesquisa}
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por nome, e-mail, CPF ou telefone..."
            />
          </div>
        </div>

        {erro && <p className={style.erro}>{erro}</p>}

        <div className={style.containerTabela}>
          <table className={style.tabela}>
            <thead>
              <tr>
                <th className={style.thUsuario}>USUÁRIO</th>
                <th>CPF</th>
                <th>TELEFONE</th>
                <th>TIPO</th>
                <th>CIDADE</th>
                <th>CADASTRO</th>
                <th>AÇÕES</th>
              </tr>
            </thead>

            <tbody>
              {carregando ? (
                <tr>
                  <td colSpan={7} className={style.estado}>
                    Carregando usuários...
                  </td>
                </tr>
              ) : usuariosFiltrados.length === 0 ? (
                <tr>
                  <td colSpan={7} className={style.estado}>
                    Nenhum usuário encontrado.
                  </td>
                </tr>
              ) : (
                usuariosFiltrados.map((usuario) => (
                  <tr key={usuario.id} className={style.row}>
                    <td className={style.usuarioCell}>
                      <div className={style.usuarioInfo}>
                        <AvatarComNumero
                          nome={usuario.nome}
                          largura="44px"
                          fontSize="1rem"
                        />

                        <div className={style.infoUser}>
                          <h4 className={style.nome}>{usuario.nome}</h4>
                          <p className={style.email}>{usuario.email}</p>
                        </div>
                      </div>
                    </td>

                    <td className={style.documento}>
                      {formatarCpf(usuario.cpf)}
                    </td>

                    <td className={style.telefone}>
                      {formatarTelefone(usuario.telefone)}
                    </td>

                    <td>
                      <span
                        className={`${style.tipo} ${
                          usuario.tipoUsuario === "admin"
                            ? style.tipoAdmin
                            : style.tipoDoador
                        }`}
                      >
                        {usuario.tipoUsuario === "admin"
                          ? "Administrador"
                          : "Doador"}
                      </span>
                    </td>

                    <td className={style.cidade}>{usuario.cidade || "—"}</td>

                    <td className={style.data}>
                      {formatarData(usuario.createdAt)}
                    </td>

                    <td className={style.acoes}>
                      <button
                        type="button"
                        className={`${style.acaoBotao} ${style.editarBotao}`}
                        onClick={() => setEditando(usuario)}
                        title="Editar usuário"
                        aria-label={`Editar ${usuario.nome}`}
                      >
                        <Pencil size={17} />
                      </button>

                      <button
                        type="button"
                        className={`${style.acaoBotao} ${style.excluirBotao}`}
                        onClick={() => setExcluindo(usuario)}
                        title="Excluir usuário"
                        aria-label={`Excluir ${usuario.nome}`}
                      >
                        <Trash2 size={17} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className={style.rodapeTabela}>
            <span>
              Mostrando <strong>{usuariosFiltrados.length}</strong> de{" "}
              <strong>{usuarios.length}</strong> usuários
            </span>
          </div>
        </div>
      </div>

      {editando && (
        <EditarUsuario
          usuario={editando}
          onClose={() => setEditando(null)}
          onSaved={handleSalvamento}
        />
      )}

      {excluindo && (
        <div
          className={style.fundoModal}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !removendo) {
              setExcluindo(null);
            }
          }}
        >
          <div
            className={style.modalConfirmacao}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className={style.iconeExcluir}>
              <Trash2 size={26} />
            </div>

            <h2>Excluir usuário</h2>

            <p>
              Tem certeza que deseja excluir <strong>{excluindo.nome}</strong>?
              Essa ação não pode ser desfeita.
            </p>

            <div className={style.botoesConfirmacao}>
              <button
                type="button"
                className={style.cancelarBotao}
                onClick={() => setExcluindo(null)}
                disabled={removendo}
              >
                Cancelar
              </button>

              <button
                type="button"
                className={style.confirmarBotao}
                onClick={confirmarExclusao}
                disabled={removendo}
              >
                {removendo ? "Excluindo..." : "Excluir"}
              </button>
            </div>
          </div>
        </div>
      )}

      <Toast key={toast?.id} toast={toast} onClose={hideToast} />
    </SystemLayout>
  );
}
