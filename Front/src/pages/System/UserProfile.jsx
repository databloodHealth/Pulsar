import SystemLayout from "@/layouts/SystemLayout";
import style from "@/styles/profile.module.css"

export default function UserProfile() {
    return (
        <SystemLayout>
            <div className={style.content}>

                <div className={style.profileContainer}>
                    <div className={style.personalInfo}>

                        <div className={style.doador}>

                            <div>
                                <img src="" alt="Foto de perfil do usuário" />
                                <div>
                                    <h2 id={style.username}>username</h2>
                                    <p id={style.tipoSanguineo}>tipoSanguineo</p>
                                    <p id={style.apto}>doadorApto</p>
                                </div>
                            </div>

                            <span>Editar Perfil</span>
                        </div>

                        <div style={{ width: '100%', height: '1px', background: '#94A3B8' }}></div>


                    </div>

                    <div className={style.security}>

                    </div>
                </div>

                <div className={style.options}>

                </div>

            </div>
        </SystemLayout>
    )
}