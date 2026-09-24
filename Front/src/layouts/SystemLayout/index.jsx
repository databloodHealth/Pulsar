import styles from './style.module.css';
import whiteLogo from '@/assets/images/WhiteLogo.png';
import blackLogo from '@/assets/images/BlackLogo.png';
import userAvatar from '@/assets/images/DoctorTech.jpg';
import { NavLink } from 'react-router-dom';

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
          <NavLink to="/Donnordashboard" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>
            <i className="fa-solid fa-house"></i>Início
          </NavLink>
          <NavLink to="/historico" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""} `}>
            <i className="fa-solid fa-droplet"></i>Minhas doações
          </NavLink>
          <NavLink to="/notificacoes" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""} `}>
            <i className="fa-solid fa-bell"></i>Notificações
          </NavLink>
           <NavLink to="/profile" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""} `}>
            <i className="fa-solid fa-user"></i>Perfil
          </NavLink>
        </nav>

        <div className={styles.buttonContainer}>
          <a href="#" className={styles.buttonLink}>
            <i className="fa-solid fa-circle-info"></i>Central de ajuda
          </a>
        </div>
      </aside>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
