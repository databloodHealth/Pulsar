import style from './style.module.css'
import OptionContraste from '@/components/ui/UserOptions/OptionContraste'
import OptionTema from '@/components/ui/UserOptions/OptionTema'


export default function UserOptions() {
    return (
        <div className={style.options}>
            <h1>Configurações</h1>

            <div className={style.settingsContainer}>

                <div className={style.settingBox}>
                    <label htmlFor="idioma">idioma</label>
                    <select name="idioma" id={style.idioma}>
                        <option value="">Português BR</option>
                        <option value="">English US</option>
                    </select>
                </div>

                <OptionContraste />

                <OptionTema />

                <div className={style.settingBox}>
                    <h2>Tamanho da fonte</h2>
                    <div className={style.controleFonte}>
                        <button id={style.diminuirFonte}>-</button>
                        <h3>100%</h3>
                        <button id={style.aumentarFonte}>+</button>
                    </div>
                </div>

            </div>
        </div>
    )
}