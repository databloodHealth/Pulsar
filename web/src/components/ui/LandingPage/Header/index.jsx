import { Link, NavLink } from "react-router-dom";
import style from "./style.module.css";
import blackLogo from "@/assets/images/BlackLogo.png";
import {
  IoIosMenu,
  IoIosClose,
  IoMdHome,
  IoIosInformationCircleOutline,
}
  from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { MdAddChart } from "react-icons/md";
import { useState } from "react";

export default function Header() {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>


      {/* {sidebar header} */}

      <div className={`${style.sideBarContainer} ${sideBar ? style.open : ""}`}>
        <div className={style.sideBarTransparent}
          onClick={() => setSideBar(false)}
        >
        </div>

        <div className={style.headerSideBar}>

          <div className={style.mainSideBarContent}>
            <div className={style.topSideBar}>
              <NavLink
                className={style.logo}
                to='/'
                end
              >
                <img src={blackLogo} alt="Pulsar" />
              </NavLink>

              <button
                className={style.closeSideBarButton}
                onClick={() => setSideBar(false)}
              >
                <IoIosClose size={50}/>
              </button>
            </div>
            <div className={style.traco}></div>
            <nav className={style.navSideBar}>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${style.navLinkSide} ${isActive ? style.active : ""}`
                }
              >
                <IoMdHome size={22}/>
                Inicio
              </NavLink>
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  `${style.navLinkSide} ${isActive ? style.active : ""}`
                }
              >
                <IoIosInformationCircleOutline size={22}/>
                Sobre
              </NavLink>
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  `${style.navLinkSide} ${isActive ? style.active : ""}`
                }
              >
                <FiMessageCircle size={22}/>
                Contato
              </NavLink>
              <NavLink
                to="/triagem"
                className={({ isActive }) =>
                  `${style.navLinkSide} ${isActive ? style.active : ""}`
                }
              >
                <MdAddChart size={22}/>
                Triagem Online
              </NavLink>
            </nav>


          </div>

          <div className={style.botSideBar}>
            <div className={style.actionsSideBar}>
              <a className={`${style.secondary} ${style.login}`} href="/login">
                Entrar
              </a>
              <Link className={`${style.primary} ${style.register}`} to="/cadastro">
                Cadastrar
              </Link>
            </div>
            <div className={style.direitos}>
              <span>&copy; 2026 Pulsar - Banco de Sangue. Todos os direitos reservados</span>
            </div>
          </div>
        </div>

      </div>


      <header className={style.header}>
        <NavLink
          className={style.logo}
          to='/'
          end
        >
          <img src={blackLogo} alt="Pulsar" />
        </NavLink>

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



        {/* menu da sidebar */}
        <button className={style.buttonMenu} onClick={() => setSideBar(true)}>
          <IoIosMenu size={40} />
        </button>



      </header>


    </>
  );
}
