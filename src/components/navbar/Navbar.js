import React from 'react'
import '../styles/NavbarElements.css'
import {NavLink} from 'react-router-dom'
import { useLocation } from "react-router-dom";


const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/plans" || pathname === "/registerpatient" || pathname === "/patients" || pathname === "/patient" || pathname === "/nutrihome" || pathname === "/diets" || pathname === "/diet" || pathname === "/store") return null;
    return (
      <nav>
      <ul className = "navmenu">
        <li>
          <NavLink to = "/inicio" className = "navlink"> Inicio </NavLink>
        </li>
        <li>
          <NavLink to = "/signup" className = "navlink"> Cadastro </NavLink>
        </li>
        <li>
          <NavLink to = "/signin" className = "navlink"> Login </NavLink>
        </li>
      </ul>
    </nav>
    )
  
}

export default Navbar
