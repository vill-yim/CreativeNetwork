import styles from "../../styles/home/testimonials.module.css";


export const Testimonials = () => {

  return (
    <div className={styles["testimonials-section"]}>
      <div className={styles["testimonials-title"]}>
        <h4>Testimonials</h4>
      </div>
      
     
      <div className={styles["btn-call-cover"]}>
        <button>Book a call</button>
      </div>
    </div>
  )
}
