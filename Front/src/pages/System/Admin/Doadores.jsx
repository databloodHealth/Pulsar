import SystemLayout from "@/layouts/SystemLayout";
import style from "@/styles/System/doadores.module.css"

export default function Doadores() {
    return (
        <SystemLayout>
            <div className={style.containerDoadores}>
                <div className={style.containerCampanha}>
                    <h2 id={style.title}>Campanha Mensal de Captação</h2>
                    <p id={style.descCampanha}>O estoque de tipos O- e A- está abaixo do nível de segurança.
                        Inicie uma campanha de conscientização direcionada para estes
                        doadores.</p>
                    <div className={style.boxLinks}>
                        <button className={style.buttonNotificação}>Criar Notificação</button>
                        <a className={style.linkAnalise} href="#">Ver análise de estoque</a>
                    </div>
                </div>
            </div>
        </SystemLayout>
    );
}