import React from "react";
import { useState } from "react";
import styles from "../../styles/portfolio/portfolio.module.css";
import {portfolioStore} from  '../../utils/changePortfolio'

export const Portfolio = () => {
  const [seleccionado, setSeleccionado] = useState(0);
  const {social,motion,design,d3,showPortfolio} = portfolioStore()


  const handleClick = (i) => {
    setSeleccionado(i);
    const portfolio = ["design", "social", "motion", "d3"];
    showPortfolio(portfolio[i])
  };

  const RenderPortfolio=()=>{
    
  }

  return (
    <div className={styles["content-portfolio"]}>
      <div className={styles["cover-portfolio"]}>
        <div className={styles["title-portfolio"]}>
          <h4>Portfolio</h4>
        </div>
        <div className={styles["description-portfolio"]}>
          <p>
            Our work process is based on the concept of strategic creativity. We
            combine aesthetics and functionality; intuition and analysis; trend
            and experience.
          </p>
        </div>
      </div>
      <div className={styles["show-portfolios"]}>
        <div className={styles["header-portfolio"]}>
          <ul className="header-portfolio">
            {["Design", "Social", "Motion", "3D"].map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                className={seleccionado === index ? styles["seleccionado"] : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["portfolios"]}>

        </div>
      </div>
    </div>
  );
};
