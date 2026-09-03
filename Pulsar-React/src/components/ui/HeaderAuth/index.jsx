import BlackLogo from '@/assets/images/BlackLogo.png'
import style from './style.module.css'


export default function HeaderAuth(){
    return(
        <header className={style.header}>
        <a href='/' className={style.img}><img src={BlackLogo} alt="Logo" /></a>
        </header>
    )
}

