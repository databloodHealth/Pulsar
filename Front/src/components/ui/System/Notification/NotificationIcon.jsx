import style from './style.module.css'

export function NotificationIcon ({icon: Icon}){
    return(
        <div className={style.iconArea}>
            <div className={style.icon}>
                <Icon  size={30}/>
            </div>
        </div>
    )
}