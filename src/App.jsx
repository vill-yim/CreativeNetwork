import Header from "./components/header/Header";
import Cover from "./components/home/Cover";
import { WeMake } from "./components/home/WeMake";
import { Aboutus } from "./components/home/Aboutus";
import styles from "./styles/App.module.css";
import { OurWork } from "./components/home/OurWork";

function App() {
  return (
    <div className={styles["content-app"]}>
      <div className={styles["header"]}>
        <Header />
      </div>
      <div className={styles["cover"]}>
        <Cover />
      </div>

      <div className={styles["aboutus"]}>
        <Aboutus />
      </div>

      <div className={styles["wemake"]}>
        <WeMake />
      </div>


      <div className={styles["ourwork"]}>
        <OurWork />
      </div>

    </div>
  );
}

export default App;
