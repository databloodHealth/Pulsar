import style from './style.module.css'
import { ChevronRight } from 'lucide-react'
export default function MeioDeContato({meio, icone, desc}) {
    return(
    <>
        <div className={style.meioContato}>
            <h1>{meio}</h1>
            <div>
                <span>{icone}</span>
                <p>{desc}</p>
            </div>
        <ChevronRight className={style.rightArrow} color='#8b8b8b' size={30}/>
        </div>
    </>
    )
}