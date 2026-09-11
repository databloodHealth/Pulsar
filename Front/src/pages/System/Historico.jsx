import SystemLayout from "@/layouts/SystemLayout";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



import sty from '../../styles/historico.module.css'

export default function Historico() {

    return (
        <SystemLayout>
            <div className={sty.containerHistorico}>
                <div className={sty.tituloPage}>
                    <h1>Histórico de Doações</h1>
                </div>
                <div className={sty.gridCards}>
                    <div className={`${sty.card} ${sty.cardFirst}`}>
                        <h4>Tipo Sanguineo</h4>
                        <h1>O+</h1>
                    </div>
                    <div className={sty.cardSecond}>
                        <h4>Proxima doação</h4>
                        <p>69 OUT, 2026</p>
                        <span>Agendado para 08:30 AM</span>
                    </div>
                    <div className={sty.cardThird}>
                        <h4>Total de doações</h4>
                        <p>34</p>
                        <span>Cada doação sua salva até 4 vidas</span>
                    </div>
                </div>
                <div className={sty.containerDashboard}>

                    <div className={sty.dashboardHistorico}>
                        <div className={sty.tituloDashboard}>
                            <h3>Suas doações</h3>
                            <p>Histórico completo das suas contribuições</p>
                        </div>
                        <div className={sty.gridTabela}>
                            <div className={sty.categoriasTabela}>
                                <p>ID DA COLETA</p>
                                <p>DATA</p>
                                <p>LOCAL</p>
                                <p>VOLUME</p>
                                <p>STATUS</p>
                                <p>AÇÕES</p>
                            </div>
                            <div className={sty.campoDoacao}>
                                <p>id</p>
                                <p>12/12/2101</p>
                                <p>Centro hapvida matriz</p>
                                <p> 450ml</p>
                                <p>status</p>
                                <IoDocumentTextOutline />

                            </div>
                            <div className={sty.campoDoacao}>
                                <p>id</p>
                                <p>12/12/2101</p>
                                <p>Centro hapvida matriz</p>
                                <p> 450ml</p>
                                <p>status</p>
                                <IoDocumentTextOutline />

                            </div>
                            <div className={sty.campoDoacao}>
                                <p>id</p>
                                <p>12/12/2101</p>
                                <p>Centro hapvida matriz</p>
                                <p> 450ml</p>
                                <p>status</p>
                                <IoDocumentTextOutline />

                            </div>
                        </div>
                        <div className={sty.botoomTabela}>
                            <div id={sty.baixar}><p>Baixar Histórico Completo (PDF)</p>
                                <FiDownload />
                            </div>
                            <div className={sty.selecaoNumeros}>
                                <IoIosArrowBack />
                                <p className={sty.boxNumber}>1</p>
                                <p className={sty.boxNumber}>2</p>
                                <p className={sty.boxNumber}>3</p>
                                <p className={sty.boxNumber}>4</p>
                                <IoIosArrowForward />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SystemLayout>
    )
}