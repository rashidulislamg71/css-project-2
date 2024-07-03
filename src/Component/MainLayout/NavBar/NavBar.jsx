import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useRef } from "react";
import { useState } from "react";

import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { TbHeartbeat } from "react-icons/tb";
import { FaMosque } from "react-icons/fa";

const NavBar = () => {
  const navRef = useRef();
  const [showMenu, SetShowMenu] = useState(false);

  const showMenuHandler = () => {
    SetShowMenu(!showMenu);
  };

  const closeMenu = () => {
    SetShowMenu(false);
  };

  return (
    <section id="NavBar_section">
      <div className={styles.NavBar_container}>
        <div className={styles.NavBar_inner_container}>
          <div className={styles.NavBar_inner_content}>
            <div className={styles.logo}>
              <h2> <FaMosque /> CSS-2</h2>
            </div>
            {/* <div className={styles.nav_menu}> */}
            <nav
              ref={navRef}
              className={`${styles.nav_menu} ${
                showMenu ? styles.navResponsive : ""
              }`}
            >
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/" onClick={closeMenu}>
                About
              </NavLink>
              <NavLink to="/" onClick={closeMenu}>
                Service
              </NavLink>
              <NavLink to="/" onClick={closeMenu}>
                Shop
              </NavLink>
              <NavLink to="/" onClick={closeMenu}>
                Blog
              </NavLink>
              <NavLink to="/" onClick={closeMenu}>
                Contact
              </NavLink>
            </nav>
            {/* </div> */}
            <div className={styles.nav_donation_btn}>
              <a href="#">
                <span>
                  {" "}
                  <TbHeartbeat />
                </span>
                <button> Donation</button>
              </a>
              <button onClick={showMenuHandler} className={styles.menu_btn}>
                {showMenu ? <IoCloseSharp /> : <IoMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
