import style from '@/styles/contato.module.css'
import FooterLanding from '@/components/ui/LandingPage/FooterLanding'
import MeioDeContato from '@/components/MeiosDeContato'
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";


export default function Contato() {
    return (
        <>
            <main className={style.contatoMain}>

                <section className={style.meiosContatoContainer}>

                    <div>
                        <h1>Precisa de algo?</h1>
                        <h1>Envie-nos uma mensagem.</h1>
                    </div>
                    
                    <p>
                        Se você tem alguma dúvida, proposta ou feedback, nos envie uma mensagem explicando
                        detalhadamente sua situação.
                    </p>

                    <div className={style.meioWrapper}>
                        <MeioDeContato
                            meio={"E-mail de contato"}
                            icone={<FiMail size={25} />}
                            desc={"contato@pulsar.com"}
                        />

                        <MeioDeContato
                            meio={"Telefone"}
                            icone={<FiPhone size={25} />}
                            desc={"contato@pulsar.com"}
                        />

                        <MeioDeContato
                            meio={"Whatsapp"}
                            icone={<FaWhatsapp size={25} />}
                            desc={"contato@pulsar.com"}
                        />
                    </div>

                    <div className="midiasSociais">
                        <h2>Nossas Mídias</h2>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </section>

                <div className={style.mensagemContainer}></div>
            </main>
            <FooterLanding />
        </>
    )
}