import AvatarComNumero from "../GeradorAvatar";
import style from "./style.module.css";

export default function Doador({ nome, email, documento, tipo, data, status }) {
    return (
        <div className={style.containerDoador}>
            <div className={style.containerConteudo}>

                <ul>
                    <AvatarComNumero nome={nome} sobrenome={email.split(' ')[1]} />
                    <li>
                        <div className={`${style.infoUser} ${style.campoInfo}`}>
                            <h4 className={`${style.nome} ${style.campoInfo}`}>{nome}</h4>
                            <p className={`${style.email} ${style.campoInfo}`}>{email}</p>
                        </div>

                        <p className={`${style.documento} ${style.campoInfo}`}>{documento}</p>

                        <p className={`${style.tipo} ${style.campoInfo}`}>{tipo}</p>

                        <p className={`${style.data} ${style.campoInfo}`}>{data}</p>

                        <div className={`${style.statusBox} ${style.campoInfo}`}>
                            <div className={`${style.bolinha} ${style.campoInfo}`}>•</div>
                            <span className={`${style.status} ${style.campoInfo}`}>{status}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}