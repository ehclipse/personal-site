import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Nav, NavLink, NavMenu, Logo } from './NavbarElements';

const Navbar = ({theme, setTheme}) => {
  return (
    <Nav>
        <Logo>BT</Logo>
        <NavMenu>
            <NavLink to="#Education" activeStyle smooth>
                EDUCATION
            </NavLink>
            <NavLink to="#Skills" activeStyle smooth>
                SKILLS
            </NavLink>
            <NavLink to="#Projects" activeStyle smooth>
                PROJECTS
            </NavLink>
          {/*}  <NavLink to="#Contact" activeStyle smooth>
                CONTACT
  </NavLink>*/}
        </NavMenu>
        <ThemeToggle theme={theme} setTheme={(newTheme) => setTheme(newTheme)}/>
    </Nav>
  )
}

export default Navbar