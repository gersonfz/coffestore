import React from "react";
import {NavLink} from 'react-router-dom'
import styles from "./Navbar.module.css"


const NavLinks = () =>{
    return (
        <ul className={styles.menu}>
        <li>
            <NavLink to="/">
                Home
            </NavLink>
        </li>
        <li className={styles.product}>
                Producto
                <ul className={styles.subMenu}>
                    <li><NavLink className={styles.subProduct} to={`/category/${1}`}>Extra fuerte</NavLink></li>
					<li><NavLink className={styles.subProduct} to={`/category/${2}`}>Alta</NavLink></li>
					<li><NavLink className={styles.subProduct} to={`/category/${3}`}>Media</NavLink></li>
                </ul>
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