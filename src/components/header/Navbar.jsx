import React from 'react'

const Navbar = () => {
  return (
    <div className={styles["nav-header"]}>
    <nav>
      <ul>
        <div className={styles["nav-link-header"]}>
          <li onClick={()=>navigate('/')} to={"/"} className={styles["link-header"]}>
            Home
          </li>
        </div>

        <div className={styles["nav-link-header"]}>
          <li to={"/"} className={styles["link-header"]}>
            Services <div className={styles["flag-down"]}></div>
          </li>
        </div>

        <div className={styles["nav-link-header"]}>
          <li onClick={()=>{navigate('./portfolio')}} to={"/portfolio"} className={styles["link-header"]}>
            Portfolio
          </li>
        </div>
      </ul>
    </nav>
  </div>    
)
}

export default Navbar
