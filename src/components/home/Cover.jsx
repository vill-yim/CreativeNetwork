import { Sponsor } from "./Sponsor";
import styles from "../../styles/home/cover.module.css";

export const Cover = () => {
  return (
    <div className={styles["content-cover"]}>
      <div className={styles["content-titles"]}>
        <h1 className={styles["header-title"]}>
          STOP TEACHING <br /> MARKETING AGENCIES <br />
          ABOUT BITCOIN BASICS
        </h1>
        <h2>
          Partner with Expert Bitcoin Creatives Who HODL the Knowledge to <br />
          Deliver Marketing That Works
        </h2>
      </div>

      <div className={styles["content-video"]}></div>

      <div className={styles["book-acall"]}>
        <div className={styles["btn-call-cover"]}>
          <button> Book a call</button>
        </div>
      </div>

      <div className={styles["sponsors"]}>
        <Sponsor />
      </div>
    </div>
  );
};
