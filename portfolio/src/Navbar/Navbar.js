import React from 'react';
import Icono from './Icon';
import {Nav, Burger, NavLink, NavMenu} from './Components';
import {Spin as Hamburger, Spin} from 'hamburger-react';
import { Breakpoint } from 'react-socks';


export default function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to="/" >
                    <Icono></Icono>
                    Arnau's Web
                </NavLink>
                <Breakpoint small down>
                    <NavLink to="/menu">
                        <Spin 
                            rounded 
                            size= {40}
                            distance='md'
                            color="#ffffff"
                            direction='left'
                            position="right" 
                        />
                    </NavLink>
                </Breakpoint>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About Me
                    </NavLink>
                    <NavLink to="/interests" activeStyle>
                        My Interests
                    </NavLink>
                    <NavLink to="/contact-me" activeStyle>
                        Contact Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}