import style from "./style.module.css";
import iconePulsar from "@/assets/images/IconePulsar.webp";

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