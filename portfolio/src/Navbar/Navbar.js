import React from 'react';
import Icono from './Icon';
import {Nav,  NavLink, NavMenu} from './Components';
import {Spin as Hamburger, Spin} from 'hamburger-react';
import { Breakpoint } from 'react-socks';


export default function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to="/" >
                    ARNAU
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
                        HOME
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        ABOUT ME
                    </NavLink>
                    <NavLink to="/contact-me" activeStyle>
                        CONTACT
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}