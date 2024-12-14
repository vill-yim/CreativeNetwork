import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./styles/App.module.css";
import { Header } from "./components/header/Header";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Footer } from "./components/footer/Footer";

// Custom hook to detect scroll direction
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
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
          </motion.div>
        )}
      </AnimatePresence>

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