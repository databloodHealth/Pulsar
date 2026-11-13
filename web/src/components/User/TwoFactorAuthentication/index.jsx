import { useState } from 'react'
import style from './style.module.css'
import { ShieldCheck } from 'lucide-react';

export default function TwoFactorAuthentication(){
    const[ativado,setAtivado]=useState(false);
    return(
        <>
         <div className={style.dfa}>
            <h1><span><ShieldCheck color='#00513A' size={30}/></span>Autenticação 2FA</h1>
            <p>A autenticação em dois fatores adiciona uma camada extra de proteção à sua conta, exigindo um código do seu dispositivo móvel além da sua senha.</p>
            <div className={style.botoes}>
                <button onClick={()=>setAtivado(true)} className={ativado ? style.active : style.inactive}>Ativado</button>
                <button onClick={()=>setAtivado(false)} className={!ativado ? style.active : style.inactive}>Desativado</button>
            </div>
         </div>
        </>
    )
}