import React from 'react'
import '../styles/NavbarElements.css'
import {NavLink} from 'react-router-dom'
import { useLocation } from "react-router-dom";
 /* it will be linking to plans, for a while*/
function NutriNavbar () {
    const { pathname } = useLocation();
    console.log(pathname);
    if (pathname === "/signin" || pathname === "/signup"  || pathname === "/inicio" || pathname === "/") return null;
    return (
      <nav>
      <ul className = "navmenu navmenu-nutri">
        <li>
          <NavLink to = "/nutrihome" className = "navlink"> Inicio </NavLink> 
        </li>
        <li>
          <NavLink to = "/diets" className = "navlink"> Dietas </NavLink> 
        </li>
        <li>
          <NavLink to = "/patients" className = "navlink"> Pacientes </NavLink>
        </li>
        <li>
          <NavLink to = "/store" className = "navlink"> Loja </NavLink>
        </li>
      </ul>
    </nav>
    )
}

export default NutriNavbar
