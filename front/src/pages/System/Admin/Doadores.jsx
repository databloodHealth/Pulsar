import SystemLayout from "@/layouts/SystemLayout";
import style from "@/styles/System/doadores.module.css";
import { FaUserCheck } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { MdFilterList } from "react-icons/md";
import Doador from "@/components/Tabelas";
import doadoresLista from '@/Data/Doadores';
import PageTitle from "@/components/ui/PageTitle";

export default function Doadores() {

    return (
        <SystemLayout>
            <div className={style.containerDoadores}>

                <div className={style.containerTitulos}>
                    <div className={style.titulos}>
                        <PageTitle title={'Doadores'} subtitle="Gerenciamento completo da base de doadores ativos e inaptos." />
                    </div>

                    <div className={style.botoesTitulo}>
                        <button id={style.botaoNovo}>
                            <IoPersonAdd size={18} />
                            Novo Doador
                        </button>

                        <button id={style.botaoExportar}>
                            <GoDownload size={18} style={{ strokeWidth: 1 }} />
                            Exportar
                        </button>
                    </div>
                </div>

                <div className={style.containerPesquisas}>
                    <input
                        className={style.inputPesquisa}
                        type="text"
                        placeholder="Buscar por nome, CPF ou e-mail..."
                    />

                    <div className={style.tipoSanguineoCaixa}>
                        <label htmlFor="tpSanguineo" className={style.labelFiltro}>Tipo sanguíneo</label>
                        <select name="tipoSanguineo" id="tpSanguineo" className={style.selectCampo} defaultValue="">
                            <option value="">Todos</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>

                    <div className={style.filtroContainer}>
                        <MdFilterList size={20} className={style.filtroIcone} />
                        <select name="filtroStatus" id="filtroStatus" className={style.selectCampo} defaultValue="">
                            <option value="">Todos os status</option>
                            <option value="Ativo">Ativos</option>
                            <option value="Inapto">Inaptos</option>
                        </select>
                    </div>
                </div>
                <div className={style.containerTabela}>

                    <table className={style.tabelaDoadores}>

                        <thead>
                            <tr>
                                <th id={style.thDoador}>DOADOR</th>
                                <th>DOCUMENTO</th>
                                <th>TIPO</th>
                                <th>ÚLTIMA DOAÇÃO</th>
                                <th>STATUS</th>
                                <th>AÇÕES</th>
                            </tr>
                        </thead>

                        <tbody>
                            {doadoresLista.map((doador) => (
                                <Doador
                                    key={doador.value}
                                    nome={doador.nome}
                                    email={doador.email}
                                    documento={doador.documento}
                                    tipo={doador.tipo}
                                    data={doador.data}
                                    status={doador.status}
                                />
                            ))}
                        </tbody>

                    </table>

                    <div className={style.rodapeTabela}>
                        <span>
                            Mostrando <strong>1 - 4</strong> de <strong>1.248 doadores</strong>
                        </span>

                        <div className={style.paginacao}>
                            <button disabled>‹</button>
                            <button className={style.paginaAtiva}>1</button>
                            <button>2</button>
                            <button>3</button>
                            <span>...</span>
                            <button>125</button>
                            <button>›</button>
                        </div>
                    </div>

                </div>

                <div className={style.containerCards}>

                    <div className={style.containerCampanha}>
                        <div className={style.conteudoCampanha}>

                            <h2 id={style.title}>
                                Campanha Mensal de Captação
                            </h2>

                            <p id={style.descCampanha}>
                                O estoque de tipos O- e A- está abaixo do nível
                                de segurança. Inicie uma campanha de conscientização
                                direcionada para estes doadores.
                            </p>

                            <div className={style.boxLinks}>
                                <button className={style.buttonNotificação}>
                                    Criar Notificação
                                </button>

                                <a className={style.linkAnalise} href="#">
                                    Ver análise de estoque
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className={style.cardInfo}>

                        <div className={style.topInfo}>
                            <FaUserCheck
                                size={25}
                                color={"var(--vermelho-400)"}
                            />

                            <p className={style.porcentagem}>
                                +12%
                            </p>
                        </div>

                        <h5 id={style.titleCardDoador}>
                            RETENÇÃO DE DOADORES
                        </h5>

                        <span>78.4%</span>

                        <p className={style.descDoador}>
                            Média mensal de doadores que retornam no período
                            de 12 meses.
                        </p>

                    </div>

                </div>

            </div>
        </SystemLayout>
    );
}
