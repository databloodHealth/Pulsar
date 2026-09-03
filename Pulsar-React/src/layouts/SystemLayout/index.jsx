import styles from './style.module.css';
import whiteLogo from '@/assets/images/WhiteLogo.png';
import blackLogo from '@/assets/images/BlackLogo.png';
import userAvatar from '@/assets/images/DoctorTech.jpg';

export default function SystemLayout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={blackLogo} alt="Logo Pulsar" />
        </div>

        <div className={styles.boxUsuario}>
          <img src={userAvatar} alt="userFoto" className={styles.fotoUser} />
          <div className={styles.infoUsuario}>
            <p id={styles.statusUsuario}>Doador Inapto</p>
            <p id={styles.nomeUsuario}>João Silva</p>
          </div>
          <i className={`fa-solid fa-arrow-right-from-bracket ${styles.exitIcon}`}></i>
        </div>
      </header>

      <aside className={styles.sidebar}>
        <div className={styles.roleGroup}>
          <div className={styles.navigationIconContainer}>
            <i className="fa-solid fa-dice-d6"></i>
          </div>
          <div className={styles.roleText}>
            <h3>Gestão central</h3>
            <span>DOADOR</span>
          </div>
        </div>

        <nav className={styles.anchorContainer}>
          <a href="#" className={`${styles.link} ${styles.activeLink}`}>
            <i className="fa-solid fa-house"></i>Início
          </a>
          <a href="#" className={styles.link}>
            <i className="fa-solid fa-droplet"></i>Minhas doações
          </a>
          <a href="#" className={styles.link}>
            <i className="fa-solid fa-bell"></i>Notificações
          </a>
          <a href="#" className={styles.link}>
            <i className="fa-solid fa-user"></i>Perfil
          </a>
        </nav>

        <div className={styles.buttonContainer}>
          <button className={styles.navButton}>
            <i className="fa-solid fa-gear"></i>Configurações
          </button>
          <a href="#" className={styles.buttonLink}>
            <i className="fa-solid fa-circle-info"></i>Central de ajuda
          </a>
        </div>
      </aside>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
