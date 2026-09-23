import style from './style.module.css'
import { useState } from 'react'

export default function OptionFonte() {
    const [prop, setProp] = useState(1)
    function aumentar() {
        setProp(prev => Math.min(prev + 0.1, 2))
    }
    function diminuir() {
        setProp(prev => Math.max(prev - 0.1, 0.5))
    }

    return (
        <>
            <div className={style.settingBox}>
                <h2>Tamanho da fonte</h2>
                <div className={style.controleFonte}>
                    <button id={style.diminuirFonte} onClick={diminuir}>-</button>
                    <h3>{Math.round(100 * prop)}%</h3>
                    <button id={style.aumentarFonte} onClick={aumentar}>+</button>
                </div>
            </div>
        </>
    )
}