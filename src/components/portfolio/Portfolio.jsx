import React from "react";
import { useState } from "react";
import styles from "../../styles/portfolio/portfolio.module.css";
import {portfolioStore} from  '../../utils/changePortfolio'

export const Portfolio = () => {
  const [seleccionado, setSeleccionado] = useState(0);
  const {social,motion,design,d3,showDesign,showMotion,showSocial,showD3} = portfolioStore()


  const ShowPortfolio = () => {
  
    if (seleccionado === 0) {
        console.log("design seleccionado");
        return showDesign();
      }
      if (seleccionado === 1) {
        console.log("social seleccionado");
        return showSocial();
      }
      if (seleccionado === 2) {
        console.log("motion seleccionado");
        return showMotion();
      }
      if (seleccionado === 3) {
        console.log("d3 seleccionado",d3);
        return showD3();
      }
  };

  const handleClick = (indice) => {
    setSeleccionado(indice);
    ShowPortfolio()
  };

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
        <div className={styles["portfolios"]}>{console.log(seleccionado)}</div>
      </div>
    </div>
  );
};
