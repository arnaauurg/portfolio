import React, { useState } from 'react';
import Icono from './Icon'; // falta hacer el icono
import {Nav,  NavBarLink, NavMenu, BurgerStyles, MobileNav, MobileLink} from './Components';
import {Spin as Hamburger, Spin} from 'hamburger-react';
import { Breakpoint } from 'react-socks';


export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Nav>
                <NavBarLink to=" " >
                    ARNAU RUIZ
                </NavBarLink>
                <Breakpoint small down>
                    <BurgerStyles >
                        <Spin 
                            rounded 
                            size= {40}
                            distance='md'
                            color="#000000"
                            direction='left'
                            position="right"
                            onToggle={ () => setOpen(c => !c)} 
                            >
                        </Spin>
                    </BurgerStyles>
                    <MobileNav open={isOpen} >
                        <MobileLink to="/home"  className="nav-item nav-link" onClick={() => setOpen(false)}>HOME</MobileLink>
                        <MobileLink to="/about" className="nav-item nav-link" onClick={() => setOpen(false)}>ABOUT ME</MobileLink>
                        <MobileLink to="/contact-me" className="nav-item nav-link" onClick={() => setOpen(false)}>CONTACT</MobileLink>
                    </MobileNav>
                </Breakpoint>
                <NavMenu>
                    <NavBarLink to="/" className="nav-item nav-link" >
                        HOME
                    </NavBarLink>
                    <NavBarLink to="/about" className="nav-item nav-link" >
                        ABOUT ME
                    </NavBarLink>
                    <NavBarLink to="/contact-me" className="nav-item nav-link" >
                        CONTACT
                    </NavBarLink>
                </NavMenu>
            </Nav>
        </>
    )
}