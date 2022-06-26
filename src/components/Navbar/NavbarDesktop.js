import React from "react";
import styles from "./Navbar.module.css"
import NavLinks from "./NavLinks";


const NavbarDesktop = () =>{
    return(
        <nav className={styles.NavbarDesktop}>
            <NavLinks/>
        </nav>
    )
}

export default NavbarDesktop