import React from "react";
import {NavLink} from 'react-router-dom'


const NavLinks = () =>{
    return (
        <ul>
        <li>
            <NavLink to="/">
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/products">
                Productos
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact">
                Contacto
            </NavLink>
        </li>
        <li>
            <NavLink to="/faqs">
                FAQs
            </NavLink>
        </li>

    </ul>
    )
}

export default NavLinks