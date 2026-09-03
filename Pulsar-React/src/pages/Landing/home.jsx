import style from '@/styles/home.module.css'; 
import {Link} from 'react-router-dom'


import blackLogo from '@/assets/images/BlackLogo.png';
import heroImg from '@/assets/images/heroImg.png';
import sectionImage from '@/assets/images/SectionImage.png';
import doctorTech from '@/assets/images/DoctorTech.jpg';
import whiteLogo from '@/assets/images/WhiteLogo.png';
import { Faq } from '@/components/ui/FAQ';
import Header from '@/components/ui/LandingPage/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main className={style.main}>
        {/* HERO SECTION */}
        <section className={style.hero}>
          <div className={style.heroContent}>
            <div className={style.title}>
              <h1 className={`${style.title} ${style.heroTitle}`}>Doe sangue.</h1>
              <h1 className={`${style.redTitle} ${style.heroTitle}`}>Salve vidas.</h1>
            </div>
            <p>
              Seu gesto pode ser a esperança de alguém. Gerencie suas doações e
              ajude a manter os estoques vitais da nossa região sempre
              abastecidos.
            </p>
            <div className={style.buttons}>
              <a className={`${style.heroButton} ${style.primary}`} href="/login">Quero ser doador</a>
              <a className={`${style.heroButton} ${style.secondary}`} href="#">Saiba Mais</a>
            </div>
          </div>
          <div className={style.heroImage}>
            <img src={heroImg} alt="Hero Image" />
          </div>
          <div className={style.shape}></div>
        </section>

        {/* WHY DONATE SECTION */}
        <section className={style.whyDonate}>
          <div className={style.sectionTitle}>
            <h2>Por que doar ?</h2>
            <div className={style.underline}></div>
          </div>
          <div className={style.reasons}>
            <article className={style.image}>
              <img src={sectionImage} alt="Section Image" />
            </article>
            <div className={style.listReasons}>
              <ul>
                <li className={style.reason}>
                  <span className={style.iconReason}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                  </span>
                  <div className={style.reasonContent}>
                    <h3>Impacto coletivo</h3>
                    <p>Uma única doação pode salvar até <span className={style.red}>4 vidas</span></p>
                  </div>
                </li>
                <li className={style.reason}>
                  <span className={style.iconReason}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
                  </span>
                  <div className={style.reasonContent}>
                    <h3>Fonte Insubstituivel</h3>
                    <p>O sangue depende exclusivamente da <span className={style.red}>generosidade humana</span></p>
                  </div>
                </li>
                <li className={style.reason}>
                  <span className={style.iconReason}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                  </span>
                  <div className={style.reasonContent}>
                    <h3>Necessidade urgente</h3>
                    <p>Apenas <span className={style.red}>1,8%</span> da população brasileira doam sangue regularmente</p>
                  </div>
                </li>
                <li className={style.reason}>
                  <span className={style.iconReason}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
                  </span>
                  <div className={style.reasonContent}>
                    <h3>Experiência ágil</h3>
                    <p>O processo é rápido seguro e indolor, levando <span className={style.red}>menos de 60 minutos</span></p>
                  </div>
                </li>
              </ul>
              <a className={`${style.donateButton} ${style.primary}`} href="/login">Quero doar sangue</a>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className={style.process}>
          <div className={style.sectionTitle}>
            <h2>O processo de doação</h2>
            <p>Um caminho simples, seguro e acompanhado por profissionais altamente qualificados.</p>
          </div>
          <div className={style.steps}>
            <div className={style.step}>
              <div className={style.stepNumber}><span>1</span></div>
              <h3>Cadastro</h3>
              <p>Crie seu perfil, agende suas doações e acompanhe seu histórico de doações.</p>
            </div>
            <div className={style.line}></div>
            <div className={style.step}>
              <div className={style.stepNumber}><span>2</span></div>
              <h3>Triagem</h3>
              <p>Entrevista rápida e sigilosa para garantir a segurança de todos.</p>
            </div>
            <div className={style.line}></div>
            <div className={style.step}>
              <div className={style.stepNumber}><span>3</span></div>
              <h3>Coleta</h3>
              <p>O processo dura cerca de 10-15 minutos em ambiente confortável.</p>
            </div>
            <div className={style.line}></div>
            <div className={style.step}>
              <div className={style.stepNumber}><span>4</span></div>
              <h3>Lanche</h3>
              <p>Recupere suas energias com um lanche especial pós-doação.</p>
            </div>
          </div>
          <div className={style.buttonCTA}>
            <a className={`${style.primary} ${style.processSection}`} href="/login">Quero ser doador</a>
          </div>
        </section>

        {/* COMPATIBILITY SECTION */}
        <section className={style.compatibility}>
          <div className={style.sectionTitle}>
            <h2>Matriz de Compatibilidade</h2>
            <p>Descubra quem você pode ajudar e quem pode te ajudar</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Tipo Sanguíneo</th>
                <th>Pode Doar Para</th>
                <th>Pode Receber De</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>A+</td><td>A+ / AB+</td><td>A+ / A- / O+ / O-</td></tr>
              <tr><td>A-</td><td>A+ / A- / AB+ / AB-</td><td>A- / O-</td></tr>
              <tr><td>B+</td><td>B+ / AB+</td><td>B+ / B- / O+ / O-</td></tr>
              <tr><td>B-</td><td>B+ / B- / AB+ / AB-</td><td>B- / O-</td></tr>
              <tr><td>AB+</td><td>AB+</td><td>Todos os tipos</td></tr>
              <tr><td>AB-</td><td>AB+ / AB-</td><td>A- / B- / AB- / O-</td></tr>
              <tr><td>O+</td><td>A+ / B+ / AB+ / O+</td><td>O+ / O-</td></tr>
              <tr><td>O-</td><td>Todos os tipos</td><td>O-</td></tr>
            </tbody>
          </table>

          <div className={style.cardsInfos}>
            <div className={`${style.cardType} ${style.card}`}>
              <div className={style.cardHead}>
                <h2>Tipo O Negativo (O-)</h2>
                <span className={`${style.badgeCard} ${style.badge}`}>Doador universal</span>
              </div>
              <p className={style.text}>
                Apenas 7% da população possui este tipo sanguíneo, mas ele é usado
                em quase todas as emergências onde não há tempo para testes de
                tipagem. Sua doação é vital.
              </p>
              <ul>
                <li>Essencial em traumas e recém nascidos</li>
                <li>Frequentemente em estoque crítico</li>
              </ul>
            </div>
            <div className={`${style.cardCuriosity} ${style.card}`}>
              <div className={style.cardHead}>
                <h2>O fator RH</h2>
                <span className={`${style.badgeCard} ${style.badge}`}>Curiosidade</span>
              </div>
              <p className={`${style.text} ${style.dark}`}>
                O fator RH é uma proteína (antígeno D) que pode estar presente ou não nas hemácias. Se presente, o sangue é
                Positivo (+); se ausente, é Negativo (-). Doadores RH- podem salvar pessoas tanto RH+ quanto RH-, dependendo
                do tipo sanguíneo.
              </p>
              <ul>
                <li>Funciona como um marcador genético herdado</li>
              </ul>
            </div>
          </div>

          <div className={style.donate}>
            <div className={style.colLeft}>
              <div className={style.titleCard}>
                <h2>Posso doar Hoje?</h2>
                <h2>Faça uma triagem rápida e descubra imediatamente!</h2>
              </div>
              <a className={style.primary} href="/login">Começar triagem Online</a>
            </div>
            <div className={style.colRight}>
              <div className={style.listCont}>
                <div className={style.listItem}>
                  <span className={style.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
                  </span>
                  <p>Formulário rápido e objetivo</p>
                </div>
                <div className={style.listItem}>
                  <span className={`${style.icon} ${style.check}`}></span>
                  <p>Resultado Imediato</p>
                </div>
                <div className={style.listItem}>
                  <span className={style.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                  </span>
                  <p>Ação solidária</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SYSTEM SECTION */}
        <section className={style.system}>
          <div className={style.colLeft}>
            <img src={doctorTech} alt="Doctor Tech" />
          </div>
          <div className={style.colRight}>
            <div className={style.title}>
              <h2>Cuidado que salva, tecnologia que conecta.</h2>
              <p>
                Nossa plataforma utiliza os mais modernos protocolos de segurança
                para gerenciar o ciclo do sangue, desde a triagem do doador até a
                entrega nos centros cirúrgicos.
              </p>
            </div>
            <div className={style.list}>
              <div className={style.item}>
                <span className={style.icon}>✓</span>
                <div className={style.itemContent}>
                  <h3>Agendamento Online 24/7</h3>
                  <p>Evite filas e escolha o melhor horário para a sua doação.</p>
                </div>
              </div>
              <div className={style.item}>
                <span className={style.icon}>✓</span>
                <div className={style.itemContent}>
                  <h3>Histórico de exames</h3>
                  <p>Acesse seus resultados laboratoriais diretamente pelo portal.</p>
                </div>
              </div>
              <div className={style.item}>
                <span className={style.icon}>✓</span>
                <div className={style.itemContent}>
                  <h3>Gestão completa de processos</h3>
                  <p>Gerencie a situação de suas doações em tempo real.</p>
                </div>
              </div>
            </div>
            <div className={style.button}>
              <a className={style.primary} href="/login">Comece agora a salvar vidas -{'>'}</a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className={style.FAQ}>
          <div className={style.sectionTitle}>
            <h2>Dúvidas Frequentes</h2>
          </div>

          <div className={style.questionsContainer}>
            <Faq.Root>
              <Faq.Question question={"Quem pode doar Sangue?"} />
              <Faq.Answer answer={"Pessoas entre 16 e 69 anos, com peso acima de 50kg e boas condições de saúde. Menores de 18 anos precisam de autorização dos pais ou responsáveis."} />
            </Faq.Root>
            <Faq.Root>
              <Faq.Question question={"Com qual frequência posso doar?"} />
              <Faq.Answer answer={"Homens podem doar a cada 60 dias, com no máximo 4 doações por ano. Mulheres a cada 90 dias, com no máximo 3 doações por ano."} />
            </Faq.Root>
            <Faq.Root>
              <Faq.Question question={"O que não devo fazer na semana da doação?"} />
              <Faq.Answer answer={"Evite bebidas alcoólicas nas 12 horas anteriores, alimentos gordurosos nas 4 horas antes da doação e atividades físicas intensas no dia. Durma bem na noite anterior e chegue bem hidratado."} />
            </Faq.Root>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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
              <a href="#">Sobre nós</a>
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
    </>
  );
}