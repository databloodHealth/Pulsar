import { CardAlerta, CardDashboard } from "@/components/Cards";
import SystemLayout from "@/layouts/SystemLayout";
import style from "@/styles/System/adminDashboard.module.css";
import { IoMdPersonAdd } from "react-icons/io";
import {  IoWarningOutline } from "react-icons/io5";
import { BsHourglassSplit } from "react-icons/bs";
import { PiCellSignalHighBold } from "react-icons/pi";

export default function AdminDashboard() {
    return (
        <SystemLayout>

            <div className={style.containerPage}>

                <div className={style.containerCards}>
                    <CardDashboard icone={IoMdPersonAdd} porcentagem="15%" titulo="Total de Leads" valor="12.234" />
                    <CardDashboard icone={PiCellSignalHighBold} porcentagem="25%" titulo="Total de Clientes" valor="567" />
                    <CardDashboard icone={IoWarningOutline} porcentagem="35%" titulo="Total de Vendas" valor="890" class="vermelhoFundo" />
                    <CardDashboard icone={BsHourglassSplit} porcentagem="45%" titulo="Total de Retornos" valor="234" />
                </div>
                <div className={style.gridMid}>


                    <section className={style.container}>

                        <header className={style.header}>
                            <h3>Nível de Estoque de Sangue</h3>

                            <div className={style.legenda}>
                                <span>
                                    <i className={style.seguro}></i>
                                    SEGURO
                                </span>

                                <span>
                                    <i className={style.alerta}></i>
                                    ALERTA
                                </span>

                                <span>
                                    <i className={style.critico}></i>
                                    CRÍTICO
                                </span>
                            </div>
                        </header>

                        <div className={style.lista}>

                            <div className={style.item}>
                                <strong>A+</strong>
                                <div className={style.barra}>
                                    <div className={`${style.progresso} ${style.seguro}`} style={{ width: '85%' }}></div>
                                </div>
                                <strong>85%</strong>
                            </div>

                            <div className={style.item}>
                                <strong>A-</strong>
                                <div className={style.barra}>
                                    <div className={`${style.progresso} ${style.critico}`} style={{ width: '15%' }}></div>
                                </div>
                                <strong className={style.valorCritico}>15%</strong>
                            </div>

                            <div className={style.item}>
                                <strong>B+</strong>
                                <div className={style.barra}>
                                    <div className={`${style.progresso} ${style.seguro}`} style={{ width: '68%' }}></div>
                                </div>
                                <strong>68%</strong>
                            </div>

                            <div className={style.item}>
                                <strong>B-</strong>
                                <div className={style.barra}>
                                    <div className={`${style.progresso} ${style.alerta}`} style={{ width: '42%' }}></div>
                                </div>
                                <strong>42%</strong>
                            </div>

                            <div className={style.item}>
                                <strong>AB+</strong>
                                <div className={style.barra}>
                                    <div className={`${style.progresso} ${style.seguro}`} style={{ width: '95%' }}></div>
                                </div>
                                <strong>95%</strong>
                            </div>

                            <div className={style.item}>
                                <strong>AB-</strong>
                                <div className={style.barra}>
                                    <div className={`${style.progresso} ${style.alerta}`} style={{ width: '38%' }}></div>
                                </div>
                                <strong>38%</strong>
                            </div>

                            <div className={style.item}>
                                <strong>O+</strong>
                                <div className={style.barra}>
                                    <div className={`${style.progresso} ${style.seguro}`} style={{ width: '65%' }}></div>
                                </div>
                                <strong>65%</strong>
                            </div>

                            <div className={style.item}>
                                <strong>O-</strong>
                                <div className={style.barra}>
                                    <div className={`${style.progresso} ${style.critico}`} style={{ width: '8%' }}></div>
                                </div>
                                <strong className={style.valorCritico}>08%</strong>
                            </div>

                        </div>
                    </section>

                    <div className={style.containerAlertas}>
                        <h2 id={style.tituloAlerta}>Alertas do Sistema</h2>
                        <div className={style.cards}>
                            <CardAlerta nivel="CRÍTICO" titulo="Estoque de O- abaixo de 10%" description="Solicitar reposição urgente ao hemocentro regional." class="critico" />
                            <CardAlerta nivel="AVISO" titulo="Estoque de A+ abaixo de 20%" description="A campanha de doação na USP Leste foi confirmada para amanhã." class="aviso" />
                            <CardAlerta nivel="ALERTA" titulo="Estoque de B+ abaixo de 15%" description="Recomendado iniciar campanha segmentada para doadores B-." class="alerta" />
                        </div>
                    </div>
                </div>
            </div>
        </SystemLayout>
    )
}