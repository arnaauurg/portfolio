import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";



export const Nav = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0.5rem calc(100vw-1000px)/2;
    z-index: 10;
    background: transparent;
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
    color: #fffffe;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2px;

    @media screen and (max-width: 768px){
        display: none;
    }
`