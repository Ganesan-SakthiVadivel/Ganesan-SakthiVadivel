import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Navbar from './Components/Navbar';
import Lottie from 'lottie-react';
import BackgroundAnimation from './Img/black_with_yellow.json';
import Dummypage from './Components/dummypage';
const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Check if the Navbar was already shown in the session
    const navbarShown = sessionStorage.getItem('navbarShown');
    
    if (navbarShown) {
      // If already shown, display it immediately
      setShowNavbar(true);
    } else {
      // If not shown, show after 6 seconds
      const timer = setTimeout(() => {
        setShowNavbar(true);
        sessionStorage.setItem('navbarShown', 'true'); // Store state in sessionStorage
      }, 6000);

      // Cleanup on component unmount
      return () => clearTimeout(timer);
    }
  }, []); // Run only once on component mount

  return (
    <div className="App w-full h-full">
      {/* Background Lottie Animation */}
      {/* <div className="background-animation">
        <Lottie animationData={BackgroundAnimation} loop={true} />
      </div> */}

      <Router>
        {/* Navbar is shown based on the state */}
        {/* {showNavbar && <Navbar />} */}

        <Routes>
          {/* <Route path="/" element={<Portfolio />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} /> */}
          <Route path='/' element={<Portfolio></Portfolio>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
