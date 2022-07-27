import React, {lazy} from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence } from "framer-motion/dist/framer-motion";

import Navbar from './Navbar/Navbar';
import AboutMe from './About/AboutMe';
import Contact from './Contact Me/Contact';


/* para debugear load screen*/
const Scene = lazy(() => import('./Home/Scene'))


function AnimatedRoutes() {
    const location = useLocation();


  return (
    <AnimatePresence >
      <Routes key={location.pathname} location={location}>
        <Route path="/"        element={<Scene/>} />
        <Route path="/home"        element={<Scene />} />
        <Route path="/about"     element={<AboutMe/>}   />
        <Route path="/contact-me"   element={<Contact/>}   />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;