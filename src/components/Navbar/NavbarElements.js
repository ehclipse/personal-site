import styled from 'styled-components';
import { HashLink as Link} from 'react-router-hash-link';

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem calc((100vw - 1000px)/2);
    z-index: 10;
    color: #fff;
   
  
`


export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    margin-right: 24px; 
    @media screen and (max-width: 768px) {
      display: none;
    }
`

export const Logo = styled.h1`
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none; 

    @media screen and (max-width: 768px) {
        padding: 0 0px 0 50px;
    }
    
`