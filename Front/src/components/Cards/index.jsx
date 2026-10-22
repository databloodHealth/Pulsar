import style from "./style.module.css";
import iconePulsar from "../../assets/images/IconePulsar.webp";
import { IoCalendarClearOutline } from "react-icons/io5";

export function CardDoisVermelho({ title, description }) {
    return (
        <div className={`${style.cardDois} ${style.vermelhoBackground}`}>
            <h4>{title}</h4>
            <p>{description}</p>
            <img className={style.icone} src={iconePulsar} alt="Ícone Pulsar" />
        </div>
    )
}
export function CardDois({ title, description }) {
    return (
        <div className={style.cardDois}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}
export function CardTres({ title, dado, description, cor, fontCor }) {

    return (
        <div className={`${style.cardTres} ${style[cor]} ${style[fontCor]}`} >
            <h4>{title}</h4>
            <p>{dado}</p>
            <span>{description}</span>
        </div>
    )
}
export function CardCampanha({imagem, titulo, descricao,meta, numeroColeta,prazoTitle, dataPrazo,
     iconeComplementar: IconeComplementar,titleComplementar, descricaoComplementar}) {
    return (
        <section className={style.campanha}>
            <img className={style.imagem} src={imagem} alt="Imagem Campanha" />
            <div className={style.containerConteudo}>
                <div className={style.conteudoCampanha}>
                    <h4>{titulo}</h4>
                    <p>{descricao}</p>
                </div>
                <div className={style.containerInfo}>
                    <div className={style.infoTop}>
                        <p id={style.meta}>Meta: {meta}</p>
                        <span id={style.numeroColeta}>{numeroColeta} 76%</span>
                    </div>
                    <div className={style.barra}>

                    </div>

                </div>
                <div className={style.caixaInfo}>
                    <div className={style.prazo}>
                        <IoCalendarClearOutline />
                        <div className={style.box}>
                            <h6>{prazoTitle}</h6>
                            <p>{dataPrazo}</p>
                        </div>
                    </div>
                    <div className={styl.infoComplementar}>
                            <IconeComplementar />
                        <div className={style.box}>
                            <h6>{titleComplementar}</h6>
                            <p>{descricaoComplementar}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}