import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/header/desktopmenu.module.css";
import { allServiceStore } from "../../utils/serviceStore";

export const Navbar = () => {
  const { allServices } = allServiceStore();
  const [serviceSeleccionado, setServiceSeleccionado] = useState(null);
  const [enlaceSeleccionado, setEnlaceSeleccionado] = useState({
    home: false,
    services: false,
    portfolio: false,
  });
  const navigate = useNavigate();

  const handleServiceClick = async (idx) => {
    await navigate("/services");
    setServiceSeleccionado(idx);
    const serviceKeys = ["youtube", "studio", "uxui", "organic", "web"];
    await allServices(serviceKeys[idx]);
  };

  const handleEnlaceClick = (enlace) => {
    setEnlaceSeleccionado({
      home: false,
      services: false,
      portfolio: false,
      [enlace]: true, 
    });
  };

  return (
    <div className={styles["nav-header"]}>
      <nav>
        <ul>
          <li>
            <Link
              to={"/"}
              className={`${styles["link-header"]} ${enlaceSeleccionado.home ? styles["seleccionado-header"] : ""}`}
              onClick={() => handleEnlaceClick("home")} 
            >
              Home
            </Link>
          </li>

          <li className={styles["dropdown"]}>
            <Link
              to={"/services"}
              className={`${styles["services-drop"]} ${enlaceSeleccionado.services ? styles["seleccionado-header"] : ""}`}
              onClick={() => handleEnlaceClick("services")} 
            >
              Services
              <div className={styles["flag-down"]}></div>
            </Link>
            <ul className={`${styles["dropdown-menu"]}`}>
              <div className={`${styles["wraper-menu"]}`}>
                {["Youtube", "Creative Studio", "Ux/ui", "Organic", "Web Design"].map((item, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleServiceClick(idx)}
                    className={`${styles["dropdown-item"]} ${serviceSeleccionado === idx ? styles["selected"] : ""}`}
                  >
                    {item}
                  </li>
                ))}
              </div>
            </ul>
          </li>

          <li>
            <Link
              to={"/portfolio"}
              className={`${styles["link-header"]} ${enlaceSeleccionado.portfolio ? styles["seleccionado-header"] : ""}`}
              onClick={() => handleEnlaceClick("portfolio")}  // Cambiado para manejar correctamente el enlace
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
