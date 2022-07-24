import React from 'react';
import {BreakpointProvider} from 'react-socks';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom/client';



import Navbar from './Navbar/Navbar';
import AnimatedRoutes from './AnimatedRoutes';
import MainScene from './Home/Scene';
import Interests from './Interests/MyIntersets';
import AboutMe from './About/AboutMe';
import Contact from './Contact Me/Contact';



export default function App(){

    return (
        <BreakpointProvider>
            <Router>
                <Navbar />
                <AnimatedRoutes />
            </Router>
        </BreakpointProvider>
    )
}

