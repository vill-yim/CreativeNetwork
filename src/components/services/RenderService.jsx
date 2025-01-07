import React from "react";
import styles from "../../styles/services/services.module.css";
export const RenderService = ({
  title_service,
  text_service,
  btnacction,
  image_service,
  slider,
}) => {
  return (
    <div>
      <div className={styles["cover-services"]}>
        <div className={styles["descript-cover"]}>
          <div className={styles["title-cover"]}>
            <h2>{title_service}</h2>
          </div>
          <div className={styles["text-cover"]}>
            <p>{text_service} </p>
          </div>
          <div className={styles["btn-cover"]}> {btnacction} </div>
        </div>

        <div className={styles["img-cover"]}>
          <div
            className={styles["img"]}
            style={{ backgroundImage: `url(${image_service})` }}
          ></div>
        </div>
      </div>
     {slider}
    </div>
  );
};
