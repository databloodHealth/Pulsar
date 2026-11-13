import style from './style.module.css'
import OptionTema from './OptionTema'
import OptionContraste from './OptionContraste'
import OptionFonte from './OptionFonte'
import OptionLanguage from './OptionLanguage'

export default function UserOptions() {
    return (
        <>
            <div className={style.options}>
                <h1>Configurações</h1>
                <div className={style.settingsContainer}>
                    <OptionLanguage />
                    <OptionTema />
                    <OptionContraste />
                    <OptionFonte />
                </div>
            </div>
        </>
    )
}