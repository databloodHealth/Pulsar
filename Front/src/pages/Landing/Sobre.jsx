import { Link } from 'react-router-dom';
import style from '@/styles/about.module.css';

import blackLogo from '@/assets/images/BlackLogo.png';
import heroImage from '@/assets/images/heroImg.png';
import Header from '@/components/ui/LandingPage/Header';

export default function Sobre() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <section className={style.hero}>
          <div className={style.heroContent}>
            <span className={style.badge}>Quem somos</span>
            <h1>
              A Pulsar nasceu para <span> tornar a doação de sangue</span> mais acessível,
              urgente e humana.
            </h1>
            <p>
              Conectamos doadores, pacientes e instituições em uma experiência moderna,
              segura e inspirada em empatia. Nossa missão é reduzir barreiras para que cada
              gesto de solidariedade vire uma resposta rápida a quem precisa.
            </p>
            <div className={style.heroActions}>
              <Link className={style.primary} to="/cadastro">Seja doador</Link>
              <Link className={style.secondary} to="/login">Acessar conta</Link>
            </div>
            <div className={style.stats}>
              <div>
                <strong>4.5k+</strong>
                <span>doações apoiadas</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>triagem e agendamento</span>
              </div>
              <div>
                <strong>12+</strong>
                <span>parceiros ativos</span>
              </div>
            </div>
          </div>

          <div className={style.heroVisual}>
            
          </div>
        </section>

        <section className={style.story}>
          <div className={style.sectionTitle}>
            <span className={style.kicker}>Nossa essência</span>
            <h2>Mais do que tecnologia, uma rede de cuidado.</h2>
          </div>
          <div className={style.storyGrid}>
            <div className={style.storyText}>
              <p>
                A Pulsar foi criada para transformar a experiência de doação em um processo
                mais simples, transparente e acolhedor. Entendemos que doar sangue é um ato de
                coragem, mas também que ele precisa ser organizado para atender à necessidade de
                forma real e eficiente.
              </p>
              <p>
                Por isso, unimos processos de agendamento, triagem e gestão de doações em uma
                plataforma pensada para auxiliar profissionais, instituições e pessoas que querem
                fazer a diferença, com menos barreiras e mais confiança.
              </p>
            </div>
            <div className={style.valueList}>
              <div className={style.valueItem}>
                <span>01</span>
                <div>
                  <h3>Humanização</h3>
                  <p>Colocamos o acolhimento e a empatia no centro da experiência.</p>
                </div>
              </div>
              <div className={style.valueItem}>
                <span>02</span>
                <div>
                  <h3>Precisão</h3>
                  <p>Dados e processo organizados para otimizar a resposta da rede.</p>
                </div>
              </div>
              <div className={style.valueItem}>
                <span>03</span>
                <div>
                  <h3>Impacto</h3>
                  <p>Cada doação vira um passo concreto na proteção da vida coletiva.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={style.features}>
          <div className={style.sectionTitle}>
            <span className={style.kicker}>Como a Pulsar ajuda</span>
            <h2>Soluções pensadas para o ciclo completo da doação.</h2>
          </div>

          <div className={style.featureGrid}>
            <article className={style.featureCard}>
              <div className={style.iconWrap}>✓</div>
              <h3>Triagem inteligente</h3>
              <p>Fluxos rápidos e seguros para avaliar a condição do doador antes da coleta.</p>
            </article>
            <article className={style.featureCard}>
              <div className={style.iconWrap}>✦</div>
              <h3>Agendamento simples</h3>
              <p>Mais praticidade para quem quer doar em horários que se encaixem na rotina.</p>
            </article>
            <article className={style.featureCard}>
              <div className={style.iconWrap}>◎</div>
              <h3>Histórico transparente</h3>
              <p>Consulta e acompanhamento do processo de doação com mais clareza e segurança.</p>
            </article>
          </div>
        </section>

        <section className={style.process}>
          <div className={style.sectionTitle}>
            <span className={style.kicker}>Nosso processo</span>
            <h2>Uma jornada construída para facilitar cada etapa.</h2>
          </div>

          <div className={style.timeline}>
            <div className={style.timelineItem}>
              <span>01</span>
              <h3>Cadastro</h3>
              <p>Crie seu perfil e registre suas informações básicas em poucos minutos.</p>
            </div>
            <div className={style.timelineItem}>
              <span>02</span>
              <h3>Triagem</h3>
              <p>Validação com orientação e perguntas essenciais para segurança do doador.</p>
            </div>
            <div className={style.timelineItem}>
              <span>03</span>
              <h3>Coleta</h3>
              <p>Ambiente acolhedor com profissionais preparados para apoiar cada doação.</p>
            </div>
            <div className={style.timelineItem}>
              <span>04</span>
              <h3>Seguimento</h3>
              <p>Orientações pós-doação para manter a saúde e continuar incentivando a ação.</p>
            </div>
          </div>
        </section>

        <section className={style.ctaSection}>
          <div>
            <span className={style.kicker}>Faça parte</span>
            <h2>Doe, compartilhe e ajude a salvar vidas.</h2>
          </div>
          <div className={style.ctaActions}>
            <Link className={style.primary} to="/cadastro">Quero doar</Link>
            <Link className={style.secondary} to="/login">Ir para login</Link>
          </div>
        </section>
      </main>
    </>
  );
}
