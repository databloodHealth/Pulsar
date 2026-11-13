import style from './style.module.css'

export default function StockCard ({type, quantity, badge, min, variant ='normal'}){

const themes = {
        normal: {
            badgeBg: 'var(--verde-100)',
            badgeText: 'Normal',
            badgeColor: 'var(--verde-icone)',
            barColor: 'var(--verde-icone)',
        },
        warning: {
            badgeBg: 'var(--laranja-100)',
            badgeText: 'Atenção',
            badgeColor: 'var(--laranja-bg)',
            barColor: 'var(--laranja-bg)',
        },
        critical: {
            badgeBg: 'var(--vermelho-badge)',
            badgeText: 'Crítico',
            badgeColor: 'var(--vermelho-fonte)',
            barColor: 'var(--vermelho-fonte)',
        }
    }

    const currentTheme = themes[variant] || themes.normal;

    const progressPercentage = Math.min(Math.max((quantity / (min * 2)) * 100, 5), 100);

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
                    <div className={style.bar} style={{ backgroundColor: currentTheme.barColor, width: `${progressPercentage}%` }}></div>
                </div>
            </div>
            <div className={style.foot}>
                <p>Mínimo: {min} bolsas</p>
            </div>

            <div className={style.badge} style={{ backgroundColor: currentTheme.badgeBg, color: currentTheme.badgeColor }}>
                {currentTheme.badgeText}
            </div>
        </div>
    )

}