import SystemLayout from "@/layouts/SystemLayout";
import style from '@/styles/System/notificacoes.module.css'
import Notification from "@/components/ui/System/Notification";
import { Clock, Droplet } from "lucide-react";

export default function Notificacoes (){
    return(
        <SystemLayout>
            <div className="container">
                <div className="titlePage">
                <h1>Notificações</h1>
                <h4>Gerencie as notificções enviadas pelo sistema</h4>
                </div>
            </div>

            <div className={style.containerNotificacoes}>
                <div className={style.group}>
                    <div className={style.dateTitle}>
                    <span>Recentes</span>
                </div>

                <div className={style.notifications}>
                <Notification.Root>
                    <Notification.Icon icon={Droplet}/>
                    <Notification.Content title={'Sua doação foi utilizada para salvar uma vida 🎉'} subtitle={'Sua doação foi utilizada no dia 05/09/2026'}/>
                </Notification.Root>
                <Notification.Root>
                    <Notification.Icon icon={Droplet}/>
                    <Notification.Content title={'Sua doação foi utilizada para salvar uma vida 🎉'} subtitle={'Sua doação foi utilizada no dia 05/09/2026'}/>
                </Notification.Root>
                <Notification.Root>
                    <Notification.Icon icon={Droplet}/>
                    <Notification.Content title={'Sua doação foi utilizada para salvar uma vida 🎉'} subtitle={'Sua doação foi utilizada no dia 05/09/2026'}/>
                </Notification.Root>
                </div>
                </div>
            </div>

            <div className={style.containerNotificacoes}>
                <div className={style.group}>
                    <div className={style.dateTitle}>
                    <span>3 Mêses atras</span>
                </div>

                <div className={style.notifications}>
                <Notification.Root>
                    <Notification.Icon icon={Droplet}/>
                    <Notification.Content title={'Sua doação foi utilizada para salvar uma vida 🎉'} subtitle={'Sua doação foi utilizada no dia 05/09/2026'}/>
                </Notification.Root>
                <Notification.Root>
                    <Notification.Icon icon={Droplet}/>
                    <Notification.Content title={'Sua doação foi utilizada para salvar uma vida 🎉'} subtitle={'Sua doação foi utilizada no dia 05/09/2026'}/>
                </Notification.Root>
                <Notification.Root>
                    <Notification.Icon icon={Droplet}/>
                    <Notification.Content title={'Sua doação foi utilizada para salvar uma vida 🎉'} subtitle={'Sua doação foi utilizada no dia 05/09/2026'}/>
                </Notification.Root>
                </div>
                </div>
            </div>
        </SystemLayout>
    )
}