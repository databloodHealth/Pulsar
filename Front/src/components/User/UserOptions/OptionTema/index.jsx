import { useState } from "react"
import style from './style.module.css'
import { Sun, Moon } from "lucide-react";

export default function OptionTema() {
    const [claro, setClaro] = useState(true);

    return (
        <div className={style.settingBox}>
            <h2>Tema</h2>

            <div className={style.buttonContainer}>
                <button
                    id={style.temaClaro}
                    className={claro ? style.active : style.inactive}
                    onClick={() => setClaro(true)}
                >
                    <Sun />
                    Claro
                </button>

                <button
                    id={style.temaEscuro}
                    className={!claro ? style.active : style.inactive}
                    onClick={() => setClaro(false)}
                >
                    <Moon />
                    Escuro
                </button>
            </div>
        </div>
    )
}
