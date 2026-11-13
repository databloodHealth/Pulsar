import styles from './style.module.css';
import whiteLogo from '@/assets/images/WhiteLogo.png';
import blackLogo from '@/assets/images/BlackLogo.png';
import userAvatar from '@/assets/images/DoctorTech.jpg';
import userAdminAvatar from '@/assets/images/AdminImage.png';
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { TbDropletHalfFilled } from "react-icons/tb";
import { IoMdMegaphone } from "react-icons/io";
import { LuUserCog } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useAuthStore } from '@/stores/auth';
import { useUser } from '@/hooks/useUser';

export default function SystemLayout({ children }) {

  const navigate = useNavigate();

  const {primeiroNome, isAdmin} = useUser()
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => { 
    logout();
    navigate('/login', { replace: true });
  }



  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={blackLogo} alt="Logo Pulsar" />
        </div>

        <div className={styles.boxUsuario}>
          <img src={isAdmin ? userAdminAvatar : userAvatar} alt="userFoto" className={styles.fotoUser} />
          <div className={styles.infoUsuario}>
            <p id={styles.statusUsuario}>{isAdmin ? 'Administrador' : 'Doador'}</p>
            <p id={styles.nomeUsuario}>{primeiroNome}</p>
          </div>
          <i className={`fa-solid fa-arrow-right-from-bracket ${styles.exitIcon}`} onClick={handleLogout} title='Sair'></i>
        </div>
        </header>

      {isAdmin ? (
        <aside className={styles.sidebar}>
        <div className={styles.roleGroup}>
          <div className={styles.navigationIconContainer}>
            <i className="fa-solid fa-dice-d6"></i>
          </div>
          <div className={styles.roleText}>
            <h3>Gestão central</h3>
            <span>Administrador</span>
          </div>
        </div>

        <nav className={styles.anchorContainer}>
          <NavLink to="/admin/dashboard" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>
            <MdOutlineDashboard size={20} /> Dashboard
          </NavLink>
          <NavLink to="/admin/doadores" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""} `}>
            <FaUserGroup size={20} /> Doadores
          </NavLink>
          <NavLink to="/admin/estoque" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""} `}>
            <TbDropletHalfFilled size={20}/> Estoque
          </NavLink>
           <NavLink to="/admin/campanhas" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""} `}>
            <IoMdMegaphone size={20}/> Campanhas
          </NavLink>
           <NavLink to="/admin/usuarios" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""} `}>
            <LuUserCog size={20}/> Usuarios
          </NavLink>
        </nav>

        <div className={styles.buttonContainer}>
          <a href="#" className={styles.buttonLink}>
            <i className="fa-solid fa-circle-info"></i>Central de ajuda
          </a>
        </div>
      </aside>
      ) : (

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
          <NavLink to="/dashboard" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>
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

      )}

      <main className={styles.main}>{children}</main>
    </div>
  );
}
