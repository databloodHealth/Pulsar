import { Link, NavLink } from "react-router-dom";
import style from "./style.module.css";
import blackLogo from "@/assets/images/BlackLogo.png";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={blackLogo} alt="Pulsar" />
      </div>
      <nav className={style.nav}>
        <NavLink
          to="/"
          end
           className={({ isActive }) =>
            `${style.navLink} ${isActive ? style.active : ""}`
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/sobre"
           className={({ isActive }) =>
            `${style.navLink} ${isActive ? style.active : ""}`
          }
        >
          Sobre
        </NavLink>
        <NavLink
          to="/contato"
           className={({ isActive }) =>
            `${style.navLink} ${isActive ? style.active : ""}`
          }
        >
          Contato
        </NavLink>
        <NavLink
          to="/triagem"
          className={({ isActive }) =>
            `${style.navLink} ${isActive ? style.active : ""}`
          }
        >
          Triagem Online
        </NavLink>
      </nav>
      <div className={style.actions}>
        <a className={`${style.secondary} ${style.login}`} href="/login">
          Entrar
        </a>
        <Link className={`${style.primary} ${style.register}`} to="/cadastro">
          Cadastrar
        </Link>
      </div>
    </header>
  );
}
