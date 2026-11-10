
import SystemLayout from "@/layouts/SystemLayout";
import style from "@/styles/System/doadores.module.css";
import { FaUserCheck } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { MdFilterList } from "react-icons/md";
import Doador from "@/components/Tabelas";


export default function Doadores() {
    return (
        <SystemLayout>
            <div className={style.containerDoadores}>

                <div className={style.containerTitulos}>
                    <div className={style.titulos}>
                        <h1>Doadores</h1>
                        <p>
                            Gerenciamento completo da base de doadores ativos e inaptos.
                        </p></div>

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
                        <label id={style.labelSelect}>
                            Tipo Sanguíneo
                        </label>

                        <select name="Tipo Sanguíneo" id={style.tpSanguineo}>
                            <option value="">O-</option>
                            <option value="">A+</option>
                            <option value="">A-</option>
                            <option value="">AB-</option>
                        </select>
                    </div>

                    <div className={style.filtroContainer}>
                        <MdFilterList size={20} />

                        <select name="Filtro" id={style.filtro}>
                            <option value="">Selecione</option>
                            <option value="teste1">Teste 1</option>
                            <option value="teste2">Teste 2</option>
                            <option value="teste3">Teste 3</option>
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
                            <Doador
                                nome="Ricardo Cavalcanti"
                                email="ricardo.c@email.com"
                                documento="054.***.***-89"
                                tipo="O-"
                                data="12 Mar 2024"
                                status="Ativo"
                            />

                            <Doador
                                nome="Ana Martins"
                                email="ana.m@email.com"
                                documento="412.***.***-45"
                                tipo="A+"
                                data="05 Jan 2024"
                                status="Ativo"
                            />

                            <Doador
                                nome="Gabriel Santos"
                                email="g.santos@email.com"
                                documento="112.***.***-23"
                                tipo="B+"
                                data="--"
                                status="Inapto"
                            />

                            <Doador
                                nome="Lúcia Oliveira"
                                email="lucia.o@email.com"
                                documento="789.***.***-12"
                                tipo="AB-"
                                data="18 Abr 2024"
                                status="Ativo"
                            />
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
