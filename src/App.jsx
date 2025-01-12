import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./styles/App.module.css";
import { Header } from "./components/header/Header";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";
import { Services } from './components/services/Services';
import {SideBar} from './components/header/SideBar';
import {Form} from './components/form/Form';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);


  useEffect(() => {


    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return scrollDirection;
};

function App() {
  const scrollDirection = useScrollDirection();
  return (
    <div className={styles["content-app"]}>
      <AnimatePresence>
        {scrollDirection === 'up' && (
          <motion.div 
            className={styles["header"]}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <Header />
            <SideBar /> 
          </motion.div>
        )}
      </AnimatePresence>


{useLocation().pathname.includes("form") && <Form /> }

      <div className={styles["pages"]}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </div>
      
      <div className={styles["footer"]}>
        <Footer />
      </div>
    </div>
  );
}

export default App;