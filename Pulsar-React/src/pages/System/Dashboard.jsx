import SystemLayout from '@/layouts/SystemLayout';
import style from '@/styles/dashboard.module.css';
import { Calendar, Droplet, Lightbulb } from 'lucide-react';

export default function DonnorDashboard() {
  return (
    <SystemLayout>
        <main className={style.dashboard}>
      <div className={style.userDonateWrapper}>
        <div className={style.userInfoContainer}>
          <div className={style.greetings}>
            <h1>Olá João!</h1>
            <h1>Você está apto para doar!</h1>
          </div>

          <div className={style.userInfo}>
            <div className={style.info}>
              <p>TIPO SANGUÍNEO</p>
              <span>O+ Positivo</span>
            </div>

            <div className={style.info}>
              <p>ÚLTIMA DOAÇÃO</p>
              <span>15 de Julho, 2024</span>
            </div>
          </div>

          <a href="#" className={style.scheduleButton}>
            <Calendar/>
            Agendar doação
          </a>
        </div>

        <div className={style.tipsCardContainer}>
          <ul className={style.tipsCard}>
            <li className={style.tipsCardTitle}>
             <Lightbulb/>
              Dicas de Doador
            </li>
            <li>
              <Droplet/>
              Beba pelo menos 500ml de água antes da sua doação agendada.
            </li>
            <li>
              <i className="fa-solid fa-burger"></i>
              Evite alimentos gordurosos 3 horas antes da coleta.
            </li>
            <li>
              <i className="fa-solid fa-moon"></i>
              Tenha uma boa noite de sono antes da doação para evitar tontura ou mal-estar.
            </li>
          </ul>
        </div>
      </div>

      <section className={style.campaignSection}>
        <div className={style.campaignTexts}>
          <h1>Próximas Campanhas</h1>
          <h2>Veja as próximas campanhas de doação que irão acontecer próximo de você.</h2>
        </div>

        <div className={style.campaignCardsContainer}>
          <div className={style.campaignCard}>
            <span className={style.CampaignDate}>12 de Junho | 08:00 - 17:00</span>
            <h1 className={style.campaignName}>Unidade móvel Pulsar</h1>
            <div className={style.campaignLocal}>
              <i className="fa-solid fa-location-dot"></i>
              <span>Lago Municipal - Jaboticabal, SP</span>
            </div>
            <button type="button" className={style.campaignDetails}>Ver detalhes</button>
          </div>

          <div className={style.campaignCard}>
            <span className={style.CampaignDate}>18 de Junho | 09:00 - 15:00</span>
            <h1 className={style.campaignName}>Campanha Saúde em Ação</h1>
            <div className={style.campaignLocal}>
              <i className="fa-solid fa-location-dot"></i>
              <span>Praça Dom Assis - Jaboticabal, SP</span>
            </div>
            <button type="button" className={style.campaignDetails}>Ver detalhes</button>
          </div>

          <div className={style.campaignCard}>
            <span className={style.CampaignDate}>25 de Junho | 07:30 - 16:30</span>
            <h1 className={style.campaignName}>Atendimento itinerante Vida+</h1>
            <div className={style.campaignLocal}>
              <i className="fa-solid fa-location-dot"></i>
              <span>Terminal Rodoviário - Jaboticabal, SP</span>
            </div>
            <button type="button" className={style.campaignDetails}>Ver detalhes</button>
          </div>
        </div>
      </section>

      <section className={style.donateTable}>
        <div className={style.donateTableTop}>
          <div className={style.tableTexts}>
            <h1>Suas Doações</h1>
            <h2>Histórico completo das suas contribuições</h2>
          </div>

          <div className={style.tableTopButton}>
            <a href="#">
              Ver tudo <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>

        <table>
          <thead>
            <tr className={style.columnName}>
              <th>ID da coleta</th>
              <th>Data</th>
              <th>Local</th>
              <th>Volume</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#BS-9921</td>
              <td className={style.tableData}>12/03/2024</td>
              <td>Centro de Hemoterapia Matriz</td>
              <td>450ml</td>
              <td className={style.tableStatus}>Utilizada</td>
              <td className={style.tableIcon}><i className="fa-regular fa-file"></i></td>
            </tr>

            <tr>
              <td>#BS-8412</td>
              <td className={style.tableData}>10/11/2023</td>
              <td>Unidade Móvel Praça da Sé</td>
              <td>450ml</td>
              <td className={`${style.tableStatus} ${style.tableStatusCollected}`}>Coletada</td>
              <td className={style.tableIcon}><i className="fa-regular fa-file"></i></td>
            </tr>

            <tr>
              <td>#BS-7710</td>
              <td className={style.tableData}>15/07/2023</td>
              <td>Centro de Hemoterapia Matriz</td>
              <td>450ml</td>
              <td className={style.tableStatus}>Utilizada</td>
              <td className={style.tableIcon}><i className="fa-regular fa-file"></i></td>
            </tr>

            <tr>
              <td>#BS-6534</td>
              <td className={style.tableData}>22/01/2023</td>
              <td>Hospital São Lucas</td>
              <td>450ml</td>
              <td className={`${style.tableStatus} ${style.tableStatusCollected}`}>Coletada</td>
              <td className={style.tableIcon}><i className="fa-regular fa-file"></i></td>
            </tr>

            <tr>
              <td>#BS-5982</td>
              <td className={style.tableData}>09/09/2022</td>
              <td>Unidade Móvel Centro</td>
              <td>450ml</td>
              <td className={style.tableStatus}>Utilizada</td>
              <td className={style.tableIcon}><i className="fa-regular fa-file"></i></td>
            </tr>

            <tr>
              <td>#BS-4821</td>
              <td className={style.tableData}>17/04/2022</td>
              <td>Hemocentro Regional</td>
              <td>450ml</td>
              <td className={`${style.tableStatus} ${style.tableStatusCollected}`}>Coletada</td>
              <td className={style.tableIcon}><i className="fa-regular fa-file"></i></td>
            </tr>
          </tbody>
        </table>

        <div className={style.donateTableBottom}>
          <button type="button">
            Baixar Histórico Completo (PDF) <i className="fa-solid fa-download"></i>
          </button>
        </div>
      </section>
    </main>
    </SystemLayout>
  );
}
