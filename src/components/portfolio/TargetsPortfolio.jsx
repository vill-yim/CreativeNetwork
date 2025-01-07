import React from 'react'
import styles from "../../styles/portfolio/portfolio.module.css";

export const TargetsPortfolio = ({ name, type, altimg, srcimg }) => {
    return (
      <div className={styles["projectfolio"]}>
        <div className={styles["img-project"]}>
          <div
            className={styles["img-proj"]}
            style={{ backgroundImage: `url(${srcimg})` }}
          ></div>
        </div>
        <div className={styles["info-projectfolio"]}>
          <div className={styles["name-projectfolio"]}> {name}</div>
          <div className={styles["type-projectfolio"]}>{type}</div>
        </div>
      </div>
    );
  };