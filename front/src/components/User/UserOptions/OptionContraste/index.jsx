import { useState } from 'react'
import style from './style.module.css'

export default function OptionContraste() {
    const[highContrast, setHighContrast] = useState(false);
    return (
        <>
            <div className={style.settingBox}>
                <h2>alto contraste</h2>
                <div className={style.buttonContainer}>
                    <button id={style.contrasteAtivado} className={highContrast ? style.active : style.inactive} onClick={() => setHighContrast(true)}>Ativado</button>
                    <button id={style.contrasteDesativado} className={!highContrast ? style.active : style.inactive} onClick={() => setHighContrast(false)}>Desativado</button>
                </div>
            </div>
        </>
    )
}