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
import { NavLink, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function SystemLayout({ children }) {

  const [searchParams] = useSearchParams();

  const isAdmin = searchParams.get('mode') === 'admin'


  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={blackLogo} alt="Logo Pulsar" />
        </div>

       {isAdmin ? (
         <div className={styles.boxUsuario}>
          <img src={userAdminAvatar} alt="userFoto" className={styles.fotoUser} />
          <div className={styles.infoUsuario}>
            <p id={styles.statusUsuario}>Administrador</p>
            <p id={styles.nomeUsuario}>João Silva</p>
          </div>
          <i className={`fa-solid fa-arrow-right-from-bracket ${styles.exitIcon}`}></i>
        </div>
       ) : (
         <div className={styles.boxUsuario}>
          <img src={userAvatar} alt="userFoto" className={styles.fotoUser} />
          <div className={styles.infoUsuario}>
            <p id={styles.statusUsuario}>Doador Inapto</p>
            <p id={styles.nomeUsuario}>João Silva</p>
          </div>
          <i className={`fa-solid fa-arrow-right-from-bracket ${styles.exitIcon}`}></i>
        </div>
       )}
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
          <NavLink to="/admin/adminDashboard" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>
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
           <NavLink to="/admin/campanhas" className={({isActive}) => `${styles.link} ${isActive ? styles.activeLink : ""} `}>
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

      )}

      <main className={styles.main}>{children}</main>
    </div>
  );
}
