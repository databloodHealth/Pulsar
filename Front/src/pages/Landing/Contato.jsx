import style from '@/styles/contato.module.css'
import FooterLanding from '@/components/ui/LandingPage/FooterLanding'
import MeioDeContato from '@/components/ui/MeiosContato'
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import Header from '@/components/ui/LandingPage/Header';
import { IoIosArrowDown } from "react-icons/io";


export default function Contato() {
    return (
        <>
            <Header />
            <main className={style.contatoMain}>

                <section className={style.meiosContatoContainer}>

                    <div className={style.title}>
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
                            desc={"+55 12 99999-0000"}
                        />

                        <MeioDeContato
                            meio={"Whatsapp"}
                            icone={<FaWhatsapp size={25} />}
                            desc={"19 11111-7777"}
                        />
                    </div>

                    <div className={style.midiasSociais}>
                        <h2>Nossas Mídias</h2>
                        <div>
                            <span><FaInstagram size={26} /></span>
                            <span><FaXTwitter size={26} /></span>
                            <span><FaFacebookF size={26} /></span>
                            <span><FaYoutube size={26} /></span>
                        </div>
                    </div>
                </section>

                <div className={style.mensagemContainer}>
                    <h1>Envie sua mensagem</h1>

                    <form action="" method='post'>

                        <div className={style.inputContainer}>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name='nome' id='nome' required autoComplete='name' />
                        </div>

                        <div className={style.inputContainer}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" required autoComplete='email' />
                        </div>

                        <div className={style.inputContainer}>
                            <label htmlFor="assunto">Assunto</label>
                            <select name="assunto" id='assunto' require>
                                <option value="outro">Outro...</option>
                                <option value="a">a</option>
                                <option value="b">b</option>
                                <option value="c">c</option>
                            </select>
                            <IoIosArrowDown className={style.selectArrow} size={20} />
                        </div>

                        <div className={style.inputContainer}>
                            <label htmlFor="mensagem">Conte-nos sobre o que você deseja</label>
                            <textarea name='mensagem' id='mensagem' rows={5} required />
                        </div>

                        <button id={style.sendButton}>
                            Enviar
                        </button>
                    </form>

                </div>
            </main>
            <FooterLanding />
        </>
    )
}