import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence } from "framer-motion/dist/framer-motion";

import Navbar from './Navbar/Navbar';
import LandingPage from './Home/LandingPage';
import Interests from './Interests/MyIntersets';
import AboutMe from './About/AboutMe';
import Contact from './Contact Me/Contact';


function AnimatedRoutes() {
    const location = useLocation();


  return (
    <AnimatePresence >
      <Routes key={location.pathname} location={location}>
        <Route path="/"        element={<LandingPage/>} />
        <Route path="/about"     element={<AboutMe/>}   />
        <Route path="/interests" element={<Interests/>} />
        <Route path="/contact-me"   element={<Contact/>}   />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;