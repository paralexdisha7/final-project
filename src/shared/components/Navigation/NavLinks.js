import React from 'react'
import './NavLinks.css'
import { NavLink } from 'react-router-dom'
const NavLinks = props => {
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to={"/"}  >AllUsers</NavLink>
        </li>
        <li>
            <NavLink to={"/u1/places"} >MyPlaces</NavLink>
        </li>
        <li>
            <NavLink to={"/places/new"} >AddPlace</NavLink>
        </li>
        <li>
            <NavLink to={"/auth"} >Authenticate</NavLink>
        </li>
    </ul>
  )
}

export default NavLinks