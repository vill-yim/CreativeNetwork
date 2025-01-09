import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/header/header.module.css";
import { BtnHeader } from "../buttons/BtnHeader";
import { Navbar } from "./Navbar";
import { sidebarStore } from "../../utils/sidebarstore";

export const Header = () => {
  const navigate = useNavigate();
  const setSideBar = sidebarStore((state) => state.setSideBar)
  return (
    <div className={styles["header"]}>
      <div
        className={styles["menu-mobile"]}
        onClick={() => setSideBar()}
      >
        <img
          src="https://img.icons8.com/ios-filled/30/FFFFFF/menu--v1.png"
          alt=""
        />
      </div>

      <Link to="/" className={styles["content-logo"]}>
        <div className={styles["logo"]}></div>
      </Link>

      <div className={styles["menu-header"]}>
        <Navbar />
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
          <BtnHeader text={"Contact Us"} />
        </div>
      </div>
    </div>
  );
};
