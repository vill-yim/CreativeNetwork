import React from "react";
import { useState } from "react";
import { TargetsPortfolio } from "./TargetsPortfolio";
import styles from "../../styles/portfolio/portfolio.module.css";
import { portfolioStore } from "../../utils/changePortfolio";

export const Portfolio = () => {
  const [seleccionado, setSeleccionado] = useState(0);
  const { social, motion, design, d3, showPortfolio } = portfolioStore();

  const handleClick = (i) => {
    setSeleccionado(i);
    const portfolio = ["design", "social", "motion", "d3"];
    showPortfolio(portfolio[i]);
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
        {design && (
          <div className={styles["portfolios"]}>
            <TargetsPortfolio
              name={"Bitcoin Park"}
              type={"Poster"}
              srcimg={"../../../public/portfolios/design/btcprank.png"}
            />
            <TargetsPortfolio
              name={"MYNODE"}
              type={"Social Media"}
              srcimg={"../../../public/portfolios/design/minode.png"}
            />
            <TargetsPortfolio
              name={"The Bitcoin Company"}
              type={"Poster"}
              srcimg={"../../../public/portfolios/design/btcompany.png"}
            />
            <TargetsPortfolio
              name={"Bitcoin Park"}
              type={"Poster"}
              srcimg={"../../../public/portfolios/design/btpark.png"}
            />
            <TargetsPortfolio
              name={"MYNODE"}
              type={"Social Media"}
              srcimg={"../../../public/portfolios/design/mynode2.png"}
            />
            <TargetsPortfolio
              name={"The Bitcoin Company"}
              type={"Btc Company"}
              srcimg={"../../../public/portfolios/design/btcpany.png"}
            />
            <TargetsPortfolio
              name={"BTCaesy"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/design/btcasey.png"}
            />
            <TargetsPortfolio
              name={"Aether"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/design/aether.png"}
            />
          </div>
        )}
        {social && (
          <div className={styles["portfolios"]}>
            <TargetsPortfolio
              name={"Rocket City Bitcoin"}
              type={"Poster"}
              srcimg={"../../../public/portfolios/social/rocket.png"}
            />
            <TargetsPortfolio
              name={"RoninDojo"}
              type={"Booth"}
              srcimg={"../../../public/portfolios/social/dojo.png"}
            />
            <TargetsPortfolio
              name={"The Beff Initiative"}
              type={"Beff Initiative"}
              srcimg={"../../../public/portfolios/social/beefinit.png"}
            />
            <TargetsPortfolio
              name={"Rocket City Bitcoin"}
              type={"Poster"}
              srcimg={"../../../public/portfolios/social/rockc.png"}
            />
            <TargetsPortfolio
              name={"RoninDojo"}
              type={"Merch"}
              srcimg={"../../../public/portfolios/social/rond.png"}
            />
            <TargetsPortfolio
              name={"The Beef Initiative"}
              type={"Beef Initiative"}
              srcimg={"../../../public/portfolios/social/tbeef.png"}
            />
            <TargetsPortfolio
              name={"Lightning Koffe"}
              type={"Label"}
              srcimg={"../../../public/portfolios/social/koffe.png"}
            />
            <TargetsPortfolio
              name={"Aether"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/social/aether.png"}
            />
          </div>
        )}
        {motion && (
          <div className={styles["portfolios"]}>
            <TargetsPortfolio
              name={"The Bitcoin Company"}
              type={"Poster"}
              srcimg={"../../../public/portfolios/motion/btcompany.png"}
            />
            <TargetsPortfolio
              name={"RoninDojo"}
              type={"Video"}
              srcimg={"../../../public/portfolios/motion/dojo.png"}
            />
            <TargetsPortfolio
              name={"Mynode"}
              type={"Motion Graphic"}
              srcimg={"../../../public/portfolios/motion/mynode.png"}
            />
            <TargetsPortfolio
              name={"The Bitcoin Company"}
              type={"Pokemon Battle"}
              srcimg={"../../../public/portfolios/motion/pkbat.png"}
            />
            <TargetsPortfolio
              name={"RoninDojo"}
              type={"Logo Animation"}
              srcimg={"../../../public/portfolios/motion/rond.png"}
            />
            <TargetsPortfolio
              name={"Mynode"}
              type={"Getting Started"}
              srcimg={"../../../public/portfolios/motion/mnode.png"}
            />
            <TargetsPortfolio
              name={"BTCasey"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/motion/koffe.png"}
            />
            <TargetsPortfolio
              name={"Aether"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/motion/aether.png"}
            />
          </div>
        )}

        {d3 && (
          <div className={styles["portfolios"]}>
            <TargetsPortfolio
              name={"SHAmory"}
              type={"3D design"}
              srcimg={"../../../public/portfolios/3d/sha.png"}
            />
            <TargetsPortfolio
              name={"Satoshi Skull"}
              type={"3D Design"}
              srcimg={"../../../public/portfolios/3d/skull.png"}
            />
            <TargetsPortfolio
              name={"CyberHornet"}
              type={"3D Design"}
              srcimg={"../../../public/portfolios/3d/hornet.png"}
            /> 
          <TargetsPortfolio
              name={"SHAmory"}
              type={"3D Design"}
              srcimg={"../../../public/portfolios/3d/shad.png"}
            />
           
            <TargetsPortfolio
              name={"Satoshi Skull"}
              type={"3D Design"}
              srcimg={"../../../public/portfolios/3d/triskul.png"}
            />
           
           <TargetsPortfolio
              name={"CyberHornet"}
              type={"3D Design"}
              srcimg={"../../../public/portfolios/3d/dhornet.png"}
            /> 
            <TargetsPortfolio
              name={"BTCasey"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/3d/koffe.png"}
            />
            <TargetsPortfolio
              name={"Aether"}
              type={"Branding"}
              srcimg={"../../../public/portfolios/3d/aether.png"}
            />
          </div>
        )}
      </div>
    </div>
  );
};
