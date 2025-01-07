import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/header/header.module.css";
import { BtnHeader } from "../buttons/BtnHeader";
import {Navbar} from "./Navbar";

export const Header = () => {
  const navigate = useNavigate()
  return (
    <div className={styles["header"]}>
    
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
          <BtnHeader text={"Contact Us"}/>
        </div>
      </div>
    </div>
  );
};