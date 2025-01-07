import React from 'react'
import styles from "../../styles/services/services.module.css";

export const TargetService = () => {
  return (
<div className={styles["slider"]}>
<div className={styles["target-slider"]}>
<div className={styles["img-slider"]}>
<div
    className={styles["img-slider"]}
    style={{ backgroundImage: `url(${image_slider})` }}
  ></div>
</div>
<div className={styles["text-slider"]}>{text_slider}</div>


</div>

</div>  )
}

export default TargetService
