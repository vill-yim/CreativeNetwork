import React from 'react'
import styles from '../../styles/buttons/btnheader.module.css'
import { Link } from 'react-router-dom'

export const BtnHeader = ({text}) => {
  return (
    <Link to='form' className={styles["button-header"]}>
    <div className={styles["dots_border_header"]}></div>
    <span className={styles["text_button_header"]}>{text}</span>
  </Link>
  
  )
}
