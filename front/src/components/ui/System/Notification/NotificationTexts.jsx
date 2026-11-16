import { Trash } from 'lucide-react'
import style from './style.module.css'

export function NotificationTexts ({title, subtitle}) {
    return(
        <>
        <div className={style.textArea}>
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </div>
        
        <div className={style.action}>
            <div className={style.date}>
                06/09/206
            </div>
            <div className={style.actionIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </div>
        </div>
        </>
        
    )
}