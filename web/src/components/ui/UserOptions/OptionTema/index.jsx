export default function OptionTema() {

    return (
        <div className={style.settingBox}>
            <h2>tema</h2>
            <div className={style.buttonContainer}>
                <button id={style.temaClaro}>Claro</button>
                <button id={style.temaEscuro}>Escuro</button>
            </div>
        </div>
    )
}