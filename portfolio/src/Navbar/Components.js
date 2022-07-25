import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";



export const Nav = styled.nav`
    display: flex;
    width: 100%;
    height: 10vh;
    justify-content: space-between;
    padding: 0.5rem calc(100vw-1000px)/2;
    z-index: 10;
    background: rgb(166, 214, 182);
    background: linear-gradient(5deg, rgb(166, 214, 182) 0%, rgb(166, 214, 182) 100%);
`
export const NavLink= styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Anton', sans-serif;
    font-weight: 200,
    font-size: 1vw;
    letter-spacing: 0.1em;
    color: #000000;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1.5vw;

    @media screen and (max-width: 768px){
        display: none;
    }
`