import style from './style.module.css'
import { RotateCcw } from 'lucide-react'

export default function ChangePassword() {
    return (
        <>
            <div className={style.alterarSenha}>
                <h1><span><RotateCcw color='#b41b0f' size={30}/></span> Alterar Senha</h1>

                <form action="" method='post'>

                    <div className={style.inputContainer}>
                        <label htmlFor="senhaAtual">Senha Atual</label>
                        <input type="text" id='senhaAtual' required/>
                    </div>

                    <div className={style.inputContainer}>
                        <label htmlFor="novaSenha">Nova Senha</label>
                        <input type="text" id='novaSenha' required/>
                    </div>

                    <div className={style.inputContainer}>
                        <label htmlFor="confNovaSenha">Confirmar Nova Senha</label>
                        <input type="text" id='confNovaSenha' required/>
                    </div>

                    <button>Salvar Alterações</button>
                </form>
            </div>
        </>
    )
}