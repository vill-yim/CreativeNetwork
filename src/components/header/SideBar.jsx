import React, { useState } from "react";
import { sidebarStore } from "../../utils/sidebarstore";
import { Link } from "react-router-dom";
import styles from "../../styles/header/sidebar.module.css";
import { serviceStore, allServiceStore } from "../../utils/serviceStore";

export const SideBar = () => {
  const {sideBar}= sidebarStore()
  const { setServices, services } = serviceStore();
  const { allServices,youtube,studio,uxui,organic,web } = allServiceStore();
  const [seleccionado, setSeleccionado] = useState( youtube | studio | uxui | organic | web );
  const [serviceSeleccionado, setServiceSeleccionado] = useState();

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
    <div className={`${sideBar ? styles["show-sidebar"]: styles["hide-sidebar"]}`}>
      <nav className={styles["nav-side"]}>
  
        <ul>
          {["Home", "Services", "Portfolio"].map((item, idx) => (
            <Link
              key={idx}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`${seleccionado === idx ? styles["seleccionado-side"] : styles["link-side"]} ${
                item === "Services" ? styles["hover-services"] : ""
              }`}
              onClick={() => handleClick(idx, item)}
            >
              {item}
              {item === "Services" &&  (
                <>
                <>
                  <div className={styles["flag-down"]}  onClick={() => handleServiceClick(subIdx)}></div>
                 
                </>
                
                {item && (
                    <div className={`${services ? styles["list-service"] : styles["hide-services"]}`}>
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
        <div className={styles["redes"]}>
                  <ul>
                    <a
                      target="blank"
                      href="https://www.instagram.com/creativenetwork_21/"
                      className={styles["red-ig"]}
                    ></a>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/company/creative-network-live/"
                      className={styles["red-lkd"]}
                    ></a>
                    <a
                      target="blank"
                      href="https://twitter.com/cnl_btc21"
                      className={styles["red-x"]}
                    ></a>
                  </ul>
                </div>  
      </nav>
    </div>
  );
};
