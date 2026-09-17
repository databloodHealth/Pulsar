export default function OptionContraste() {
    return (
        <div className={style.settingBox}>
            <h2>alto contraste</h2>
            <div className={style.buttonContainer}>
                <button id={style.contrasteAtivado}>Ativado</button>
                <button id={style.contrasteDesativado}>Desativado</button>
            </div>
        </div>
    )
}