import style from './style.module.css'


export default function PageTitle({ title, subtitle }) {
    return (
        <div className={style.pageTitle}>
            <h1 className={style.title}>{title}</h1>
            <h2 className={style.subtitle}>{subtitle}</h2>
        </div>
    )
} 