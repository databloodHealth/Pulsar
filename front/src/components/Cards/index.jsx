import style from "./style.module.css";
import iconePulsar from "../../assets/images/IconePulsar.webp";
import { IoCalendarClearOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";


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
export function CardCampanha({ status, imagem, titulo, descricao, meta, numeroColeta, prazoTitle, dataPrazo,
    iconeComplementar: IconeComplementar, titleComplementar, descricaoComplementar, funcaoConfig }) {
    return (
        <section className={style.campanha}>
            <img className={style.imagem} src={imagem} alt="Imagem Campanha" />
            <div className={style.statusCampanha}>
                <p>{status}</p>
            </div>
            <div className={style.containerConteudo}>
                <div className={style.conteudoCampanha}>
                    <h4>{titulo}</h4>
                    <p>{descricao}</p>
                </div>
                <div className={style.containerInfo}>
                    <div className={style.infoTop}>
                        <p id={style.meta}>Meta: {meta}</p>
                        <span id={style.numeroColeta}>{numeroColeta} Coletadas 76%</span>
                    </div>
                    <div className={style.barra}>

                    </div>

                </div>
                <div className={style.caixaInfo}>
                    <div className={style.prazo}>
                        <IoCalendarClearOutline color={"#416084"} size={20} />
                        <div className={style.box}>
                            <h6>{prazoTitle}</h6>
                            <p>{dataPrazo}</p>
                        </div>
                    </div>
                    <div className={style.infoComplementar}>
                        <IconeComplementar color={"#416084"} size={20} />
                        <div className={style.box}>
                            <h6>{titleComplementar}</h6>
                            <p>{descricaoComplementar}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.configCampanha}>
                <button className={style.nameConfig}>{funcaoConfig}</button>
                <SlOptionsVertical size={20} className={style.iconeConfig} />
            </div>
        </section>
    )
};
export function CardDashboard({ icone: Icone, porcentagem, titulo, valor, class: className = "padrao" }) {
    return (
        <div className={`${style.cardDashboard} ${style[className]}`} >
            <div className={style.boxTop}>
                <Icone size={29} className={style.icone} />
                <p className={style.porcentagem}>{porcentagem}</p>
            </div>
            <div className={style.boxValores}>
                <h6 className={style.titulo}>{titulo}</h6>
                <strong className={style.valor}>{valor}</strong>
            </div>
        </div>
    )
};

export function CardAlerta({ nivel, titulo, description, class: className = "padrao" }) {
    return (
        <div className={`${style.cardAlerta} ${style[className]}`}>
            <h4>{nivel}</h4>
            <h5>{titulo}</h5>
            <p>{description}</p>

        </div>
    );
}
