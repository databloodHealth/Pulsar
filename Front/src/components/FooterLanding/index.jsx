import style from './style.module.css'
import whiteLogo from '@/assets/images/WhiteLogo.png'

export default function FooterLanding (){
    return (
        <footer className={style.footer}>
        <div className={style.containerFooter}>
          <div className={style.pulsar}>
            <img src={whiteLogo} alt="Logo Pulsar" />
            <p>
              Comprometidos com a excelência clínica e a preservação da vida
              através da tecnologia e do humanismo.
            </p>
          </div>
          <div className={style.links}>
            <div className={style.institutional}>
              <h3>Institucional</h3>
              <a href="/sobre">Sobre nós</a>
              <a href="#">Unidades</a>
              <a href="#">Transparência</a>
            </div>
            <div className={style.contact}>
              <h3>Contato</h3>
              <a href="#">Central: 0800 700 400</a>
              <a href="#">Email: suporte@pulsar.com.br</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className={style.footerBottom}>
          <div className={style.divisor}></div>
          <div className={style.finalTexts}>
            <span>&copy; 2026 Pulsar - Banco de Sangue. Todos os direitos reservados</span>
            <div className={style.finalList}>
              <a href="#">Termos de Uso</a>
              <a href="#">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    )
}