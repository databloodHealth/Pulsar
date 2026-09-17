import style from './style.module.css'
import { RotateCcw } from 'lucide-react'

export default function ChangePassword() {
    return (
        <>
            <div className={style.alterarSenha}>
                <h1><span><RotateCcw color='#b41b0f' size={30}/></span> Alterar Senha</h1>

                <form action="">

                    <div className={style.inputContainer}>
                        <label htmlFor="">  Senha Atual</label>
                        <input type="text" />
                    </div>

                    <div className={style.inputContainer}>
                        <label htmlFor="">Nova Senha</label>
                        <input type="text" />
                    </div>

                    <div className={style.inputContainer}>
                        <label htmlFor="">Confirmar Nova Senha</label>
                        <input type="text" />
                    </div>

                    <button>Salvar Alterações</button>
                </form>
            </div>
        </>
    )
}