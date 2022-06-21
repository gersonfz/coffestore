import React from "react";
import styles from "./Navbar.module.css"
import NavLinks from "./NavLinks";


const NavbarDesktop = () =>{
    return(
        <div className={styles.NavbarDesktop}>
            <NavLinks/>
        </div>
    )
}

export default NavbarDesktop