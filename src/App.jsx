import styles from "./styles/App.module.css";
import { Header } from "./components/header/Header";
import {Portfolio} from "./components/portfolio/Portfolio";
import { Routes,Route } from "react-router-dom";
import {Home} from "./components/home/Home";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className={styles["content-app"]}>
      <div className={styles["header"]}>
        <Header />
      </div>

     <div className={styles["pages"]}>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>

     </div>
      
     
      <div className={styles["footer"]}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
