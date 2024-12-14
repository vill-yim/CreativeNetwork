import React from "react";
import styles from "../../styles/footer/footer.module.css";

export const Footer = () => {
  return (
    <div className={styles["content-footer"]}>
      <div className={styles["logo-footer"]}>
        <div className={styles["lg-footer"]}></div>
      </div>
      <div className={styles["redes-footer"]}>
      <div className={styles["red-ig"]}></div>
      <div className={styles["red-lkd"]}></div>
      <div className={styles["red-x"]}></div>

      </div>
      <div className={styles["copy"]}>
        <h5>©2025, All right reserved.</h5>
      </div>
    </div>
  );
};
