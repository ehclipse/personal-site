import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import UpButton from './components/UpButton/UpButton';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Education from './pages/Education';
import styles from '../src/styles/App.module.css';
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [theme, setTheme] = useState('dark');

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (


    <div>
      <Router>
        <Routes hashType='noslash'>
          <Route path="/" />
          <Route path="/#Projects" />
          <Route path="/#Skills" />
          <Route path="/#Contact" />
          <Route path="/#Education" />
        </Routes>
        <Navbar theme={theme} setTheme={(newTheme) => setTheme(newTheme)}/>
      </Router>
      
      <div className={styles.fullbody}>
        <div className="Intro">
          <Home theme={theme}/>
        </div>

        <div className="Education" id="Education">
          <Education/>
        </div>

        <div className="Skills" id="Skills">
          <Skills/>
        </div>
       
        <div className="Projects" id="Projects">
          <Projects/>
        </div>
        <div className="Contact" id="Contact">
          {/* <Contact/>*/}
        </div>
        {scrollPosition >= 100 && 
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.15, ease: "easeIn"}}>
            <UpButton/>
          </motion.div>
        }


      </div>
   </div>

  );
}

export default App;
