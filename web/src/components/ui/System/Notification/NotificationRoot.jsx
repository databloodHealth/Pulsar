import style from './style.module.css'

export function NotificationRoot ({children}){
    return(
        <div className={style.notification}>
            {children}
        </div>
    )
}