import React from 'react'
import styles from '../../../styles/buttons/btnheader.module.css'

export const BtnHeader = () => {
  return (
    <button className={styles["button-header"]}>
    <div className={styles["dots_border_header"]}></div>
    <span className={styles["text_button_header"]}>Contac us</span>
  </button>
  
  )
}
