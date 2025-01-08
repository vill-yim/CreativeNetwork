import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/header/sidebar.module.css";
import { sidebarStore } from "../../utils/sidebarstore";

const SideBar = () => {
  const { setShowMenu } = sidebarStore();
  return (
    <div className={styles["sidebar"]}>
      <nav>
        <ul>
          <Link
            to={"/"}
            className={styles["link-header"]}
            onClick={() => sidebarStore()}
          >
            Home
          </Link>

          <Link
            to={"/services"}
            className={styles["link-header"]}
            onClick={() => sidebarStore()}
          >
            Services <div className={styles["flag-down"]}></div>
          </Link>

          <Link
            to={"/portfolio"}
            className={styles["link-header"]}
            onClick={() => sidebarStore()}
          >
            Portfolio
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
