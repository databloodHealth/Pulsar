import style from './style.module.css'

export default function StockCard ({type, quantity, badge, min}){


    return(
        <div className={style.card}>
            <div className={style.type}>
                <h1>{type}</h1>
            </div>
            <div className={style.quantity}>
                <div className={style.quantityText}>
                <h2>{quantity}</h2>
                <span>bolsas</span>
                </div>
                <div className={style.barProgress}>
                    <div className={style.bar}></div>
                </div>
            </div>
            <div className={style.foot}>
                <p>Mínimo: {min} bolsas</p>
            </div>

            <div className={style.badge}>
                {badge}
            </div>
        </div>
    )

}