import React from "react";
import { BtnHeader } from "../buttons/BtnHeader";
import { RenderService } from "./RenderService";
import styles from "../../styles/services/services.module.css";

export const Services = () => {
  return (
    <div className={styles["content-services"]}>
      <RenderService
        title_service={"YOUTUBE"}
        btnacction={
        <BtnHeader 
        text={"Book a call"} />}
        text_service={"Professional video editing for every content type "}
        image_service={"../../../public/services/youtube.png"}
      />
    </div>
  );
};
