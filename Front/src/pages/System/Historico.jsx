import SystemLayout from "@/layouts/SystemLayout";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



import style from '../../styles/historico.module.css'
import { CardDoisVermelho, CardTres } from "@/components/Cards";

export default function Historico() {

    return (
        <SystemLayout>
            <div className={style.containerHistorico}>
                <div className={style.tituloPage}>
                    <h1>Histórico de Doações</h1>
                    <h4>Acompanhe seu histórico de soliedariedade e o impacto causado</h4>
                </div>
                <div className={style.gridCards}>
                    <CardDoisVermelho title="Tipo Sanguíneo" description="O+" />
                    <CardTres cor="vermelho" title="Próxima doação" dado="69 OUT, 2026" description="Agendado para 08:30 AM" />
                    <CardTres cor="verde" fontCor="fontVerde" title="Total de doações" description="Cada doação sua salva até 4 vidas" dado="34" />

                </div>
                <div className={style.containerDashboard}>

                    <div className={style.dashboardHistorico}>
                        <div className={style.tituloDashboard}>
                            <h3>Suas doações</h3>
                            <p>Histórico completo das suas contribuições</p>
                        </div>
                        {/* <div className={style.containerTabela}> */}
                            <div className={style.gridTabela}>
                                <div className={style.categoriasTabela}>
                                    <p id={style.idColeta}>ID DA COLETA</p>
                                    <p>DATA</p>
                                    <p>LOCAL</p>
                                    <p>VOLUME</p>
                                    <p>STATUS</p>
                                    <p>AÇÕES</p>
                                </div>
                                <div className={style.campoDoacao}>
                                    <p>id</p>
                                    <p>12/12/2101</p>
                                    <p>Centro hapvida matriz</p>
                                    <p> 450ml</p>
                                    <p>status</p>
                                    <IoDocumentTextOutline />

                                </div>
                                <div className={style.campoDoacao}>
                                    <p>id</p>
                                    <p>12/12/2101</p>
                                    <p>Centro hapvida matriz</p>
                                    <p> 450ml</p>
                                    <p>status</p>
                                    <IoDocumentTextOutline />

                                </div>
                                <div className={style.campoDoacao}>
                                    <p>id</p>
                                    <p>12/12/2101</p>
                                    <p>Centro hapvida matriz</p>
                                    <p> 450ml</p>
                                    <p>status</p>
                                    <IoDocumentTextOutline />

                                </div>
                            </div>
                        {/* </div> */}
                        <div className={style.botoomTabela}>
                            <div id={style.baixar}><p>Baixar Histórico Completo (PDF)</p>
                                <FiDownload />
                            </div>
                            <div className={style.selecaoNumeros}>
                                <IoIosArrowBack />
                                <p className={style.boxNumber}>1</p>
                                <p className={style.boxNumber}>2</p>
                                <p className={style.boxNumber}>3</p>
                                <p className={style.boxNumber}>4</p>
                                <IoIosArrowForward />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SystemLayout>
    )
}