import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/header/sidebar.module.css";
import { serviceStore, allServiceStore } from "../../utils/serviceStore";

export const SideBar = () => {
  const { setServices, services } = serviceStore();
  const { allServices } = allServiceStore();
  const [seleccionado, setSeleccionado] = useState(0);
  const [serviceSeleccionado, setServiceSeleccionado] = useState(null);

  const handleClick = (idx, item) => {
    setSeleccionado(idx);
    if (item === "Services") {
      setServices((prev) => !prev);
    }
  };

  const handleServiceClick = (idx) => {
    setServiceSeleccionado(idx);
    const serviceKeys = ["youtube", "studio", "uxui", "organic", "web"];
    allServices(serviceKeys[idx]);
  };

  return (
    <div className={styles["sidebar"]}>
      <nav className={styles["nav-side"]}>
        <ul>
          {["Home", "Services", "Portfolio"].map((item, idx) => (
            <Link
              key={idx}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={
                seleccionado === idx
                  ? styles["seleccionado-side"]
                  : styles["link-side"]
              }
              onClick={() => handleClick(idx, item)}
            >
              {item}
              {item === "Services" &&  (
                <>
                  <div className={styles["flag-down"]}></div>
                  {item && services && (
                    <div className={styles["list-service"]}>
                      <ul>
                        {[
                          "Youtube",
                          "Creative Studio",
                          "Ux/ui",
                          "Organic",
                          "Web Design",
                        ].map((subItem, subIdx) => (
                          <li
                            key={subIdx}
                            onClick={() => handleServiceClick(subIdx)}
                            className={
                              serviceSeleccionado === subIdx
                                ? styles["seleccionado-service"]
                                : styles["link-service"]
                            }
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};
