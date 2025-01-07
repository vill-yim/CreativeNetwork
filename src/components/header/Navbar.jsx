import React from 'react'
import styles from '../../styles/header/desktopmenu.module.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className={styles["nav-header"]}>
    <nav>
      <ul>
          <Link  to={"/"} className={styles["link-header"]}>
            Home
          </Link>

          <Link to={"/services"} className={styles["link-header"]}>
            Services <div className={styles["flag-down"]}></div>
          </Link>

          <Link  to={"/portfolio"} className={styles["link-header"]}>
            Portfolio
          </Link>
      </ul>
    </nav>
  </div>    
)
}
