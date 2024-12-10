import styles from "./styles/App.module.css";
import { Header } from "./components/header/Header";
import { Cover } from "./components/home/Cover";
import { WeMake } from "./components/home/WeMake";
import { Aboutus } from "./components/home/Aboutus";
import { OurWork } from "./components/home/OurWork";
import { OurProcess } from "./components/home/OurProcess";
import { Testimonials } from "./components/home/Testimonials";
import { Calendary } from "./components/home/Calendary";
import { Footer } from "./components/home/Footer";

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
      <div className={styles["ourprocess"]}>
        <OurProcess />
      </div>

      <div className={styles["testimonials"]}>
        <Testimonials />
      </div>

      <div className={styles["calendary"]}>
        <Calendary />
      </div>

      <div className={styles["footer"]}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
