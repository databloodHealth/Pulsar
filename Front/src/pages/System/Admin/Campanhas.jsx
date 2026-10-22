import { IoMdArrowUp } from "react-icons/io";

import imagemCard from "@/assets/images/DoctorTech.jpg"
import LogoPulsar from "@/assets/images/Iconepulsar.webp"
import PageTitle from "@/components/ui/PageTitle"
import SystemLayout from "@/layouts/SystemLayout"
import style from "@/styles/campanhas.module.css"
import { Link } from "react-router-dom";
import { CardCampanha } from "@/components/Cards";
import { IoLocationOutline } from "react-icons/io5";

export default function Campanhas() {
    return (
        <SystemLayout>

            <div className={style.containerCampanha}>
                <PageTitle title={'Campanhas de Doação'} subtitle={'Gerencie iniciativas ativas e mobilize doadores para manter os níveis críticos de estoque sob controle.'} />
                <div className={style.cardsInfo}>
                    <div className={`${style.card} ${style.cardBranco} ${style.vermelhoBorda}`}>
                        <h6 className={style.titleCard}>TOTAL DE DOAÇÕES</h6>
                        <span id={style.quantDoacoes}>1.284</span>
                        <p id={style.porcentagemDoacoes}><IoMdArrowUp /> 12% este mês</p>
                    </div>
                    <div className={`${style.card} ${style.cardBranco}`}>
                        <h6 className={style.titleCard}>CAMPANHAS ATIVAS</h6>
                        <span id={style.quantCampanhas}>06</span>
                        <p id={style.textoCampnha}>02 finalizaram em breve</p>
                    </div>
                    <div className={`${style.card} ${style.cardAzul}`}>
                        <h6 className={style.titleCard}>URGÊNCIA DO SISTEMA</h6>
                        <span id={style.tipoUrgencia}>O- e AB- em alerta crítico</span>
                        <Link className={style.linkDetalhes} to={""}>Ver detalhes do estoque</Link>
                        <img className={style.logo} src={LogoPulsar} alt="Logo" />
                    </div>
                </div>
                <div className={style.gridCampanhas}>
                    <CardCampanha imagem={imagemCard} titulo={"Junho Vermelho 2024"}
                        descricao={"Foco em conscientização nacional para o período de inverno."} meta={"500"}
                        numeroColeta={330} prazoTitle={"TÉRMINO"} dataPrazo={"30 jun"} iconeComplementar={IoLocationOutline}
                        titleComplementar={"LOCAL"} descricaoComplementar={"Hemocentro Sul"} />
                    <CardCampanha imagem={imagemCard} titulo={"Junho Vermelho 2024"}
                        descricao={"Foco em conscientização nacional para o período de inverno."} meta={"500"}
                        numeroColeta={330} prazoTitle={"TÉRMINO"} dataPrazo={"30 jun"} iconeComplementar={IoLocationOutline}
                        titleComplementar={"LOCAL"} descricaoComplementar={"Hemocentro Sul"} />
                    <CardCampanha imagem={imagemCard} titulo={"Junho Vermelho 2024"}
                        descricao={"Foco em conscientização nacional para o período de inverno."} meta={"500"}
                        numeroColeta={330} prazoTitle={"TÉRMINO"} dataPrazo={"30 jun"} iconeComplementar={IoLocationOutline}
                        titleComplementar={"LOCAL"} descricaoComplementar={"Hemocentro Sul"} />
                </div>
            </div>
        </SystemLayout>

    )
}
