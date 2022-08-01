import styled from "styled-components";
import {NavLink} from "react-router-dom";
import img from './NavMobile.svg';


export const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 10vh;
    justify-content: space-between;
    padding: 0.5rem calc(100vw-1000px)/2;
    z-index: 10;
    background: rgb(166, 214, 182);
    background: linear-gradient(5deg, rgb(166, 214, 182) 0%, rgb(166, 214, 182) 100%)
`

/*background: rgb(166, 214, 182);
background: linear-gradient(5deg, rgb(166, 214, 182) 0%, rgb(166, 214, 182) 100%) */
export const NavBarLink= styled(NavLink)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-family: "Aquire-Bold";
    font-size: 1.5em;
    color: #000000;
    &:hover{
        background-color: #488746;
    }

`
/*  
    No me convence el efecto hovered. Styled-Components entra en conflicto
    con las pseudoclases de CSS ::before & :after

    KEYFRAMES!!

    fuck Anton font -> change it!
*/

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const BurgerStyles = styled.i`
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    z-index: 20;
    @media (min-width: 768px) {
        display: none;
    }
`

export const MobileNav = styled.nav`
  display: flex;
  background-image: url(${img});
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  flex-direction: column;
  padding: 4rem 0.5rem;
  gap: 2rem;
  text-align: center;
  font-size: 2rem;
  transform: ${({ open }) => (open ? "translateX(0%);" : "translateX(-100%);")};
  transition: transform 150ms ease-in;
  z-index: 15;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileLink= styled(NavLink)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    height: 100%;
    cursor: pointer;
    font-family: "Aquire-Bold";
    color: #D6FFE9;
    font-size: 25px 6vw;
    z-index: 15;
`