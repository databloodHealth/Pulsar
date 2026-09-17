import SystemLayout from "@/layouts/SystemLayout";
import style from "@/styles/profile.module.css"
import { Pencil } from "lucide-react";
import UserOptions from "@/components/User/UserOptions";
import ChangePassword from "@/components/User/ChangePassword";
import { Shield } from 'lucide-react'
import TwoFactorAuthentication from "@/components/User/TwoFactorAuthentication";

export default function UserProfile() {
    return (
        <SystemLayout>
            <div className={style.content}>

                <h1 className={style.title}>Perfil </h1>
                <h2 className={style.subtitle}>Gerencie informações pessoais, segurança e preferências </h2>

                <section>

                    <div className={style.profileMainContent}>
                        <div className={style.profileContainer}>
                            <div className={style.personalInfo}>

                                <div className={style.topText}>

                                    <h2>Informações Pessoais</h2>
                                    <button><Pencil />  Editar Perfil</button>

                                </div>

                                <div className={style.doador}>

                                    <div>
                                        <img src="" alt="Foto de perfil do usuário" />
                                        <div>
                                            <h1 className={style.username}>Otávio Palese</h1>

                                            <div>
                                                <p className={style.tipoSanguineo}>O+</p>
                                                <p className={style.apto}>Doador Apto</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>



                                <div style={{ width: '100%', height: '1px', background: '#94A3B8' }}></div>

                                <div className={style.dataFlexContainer}>

                                    <div className={style.indContainer}>
                                        <h1 className={style.dataTitle}>
                                            email
                                        </h1>
                                        <h2 className={style.infoData}>
                                            otavio@gmail.com
                                        </h2>
                                    </div>

                                    <div className={style.indContainer}>
                                        <h1 className={style.dataTitle}>
                                            email
                                        </h1>
                                        <h2 className={style.infoData}>
                                            otavio@gmail.com
                                        </h2>
                                    </div>

                                    <div className={style.indContainer}>
                                        <h1 className={style.dataTitle}>
                                            email
                                        </h1>
                                        <h2 className={style.infoData}>
                                            otavio@gmail.com
                                        </h2>
                                    </div>

                                    <div className={style.indContainer}>
                                        <h1 className={style.dataTitle}>
                                            TIPO SANGUÍNEO
                                        </h1>
                                        <h2 className={style.infoData}>
                                            O +
                                        </h2>
                                    </div>

                                    <div className={style.indContainer}>
                                        <h1 className={style.dataTitle}>
                                            Endereço
                                        </h1>
                                        <h2 className={style.infoData}>
                                            R. Oliveira Pastos, 289 - Cohab4, Pelourinho - MG - 14876-213
                                        </h2>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className={style.security}>
                    

                                <h1><Shield color='#B41B0F' size={40} strokeWidth={1}/>Senha & Segurança</h1>

                                <div className={style.flexBox}>
                                    <ChangePassword />
                                    <TwoFactorAuthentication />
                                </div>
                            
                        </div>
                    </div>

                    <UserOptions />
                </section>
            </div>
        </SystemLayout>
    )
}