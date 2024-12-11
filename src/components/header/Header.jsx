import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/header/header.module.css";

export const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["content-logo"]}>
        <div className={styles["logo"]}></div>
      </div>

      <div className={styles["nav-header"]}>
        <nav>
          <ul>
            <div className={styles["nav-link-header"]}>
              <Link to={"/"} className={styles["link-header"]}>
                Home
              </Link>
            </div>

            <div className={styles["nav-link-header"]}>
              <Link to={"/"} className={styles["link-header"]}>
                Services <div className={styles["flag-down"]}></div>
              </Link>
            </div>

            <div className={styles["nav-link-header"]}>
              <Link to={"/portfolio"} className={styles["link-header"]}>
                Portfolio
              </Link>
            </div>
          </ul>
        </nav>
      </div>
      <div className={styles["info-header"]}>
        <div className={styles["redes"]}>
          <ul>
            <li className={styles["red-ig"]}></li>
            <li className={styles["red-lkd"]}></li>
            <li className={styles["red-x"]}></li>
          </ul>
        </div>
        
        <div className={styles["btn-header"]}>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};