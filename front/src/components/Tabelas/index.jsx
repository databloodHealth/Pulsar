import AvatarComNumero from "../GeradorAvatar";
import style from "./style.module.css";

export default function Doador({ nome, email, documento, tipo, data, status }) {
    const sobrenome = email?.split("@")[0]?.split(/[._-]/)[1] || "";

    return (
        <tr className={style.row}>
            <td className={style.doadorCell}>
                <div className={style.doadorInfo}>
                    <AvatarComNumero nome={nome} sobrenome={sobrenome} largura="50px" fontSize="18px" />
                    <div className={style.infoUser}>
                        <h4 className={style.nome}>{nome}</h4>
                        <p className={style.email}>{email}</p>
                    </div>
                </div>
            </td>
            <td className={style.documento}>{documento}</td>
            <td>
                <span className={style.tipo}>{tipo}</span>
            </td>
            <td className={style.data}>{data}</td>
            <td>
                <span className={`${style.statusBox} ${status === "Inapto" ? style.statusInapto : style.statusAtivo}`}>
                    <span className={style.bolinha}>•</span>
                    <span className={style.status}>{status}</span>
                </span>
            </td>
            <td className={style.acoes}>⋯</td>
        </tr>
    );
}