import React, { useState } from "react";
import styles from "./Navbar.module.css"
import NavLinks from "./NavLinks";
import { VscMenu } from "react-icons/vsc"



const NavbarMobile = () =>{
    const [open, setOpen] = useState(false)

    return(
    <nav className={styles.NavbarMobile}>
		<VscMenu className={styles.BurgerMenu} onClick={() =>{
            setOpen(!open)
        }} />
        {open && <NavLinks/>}
    </nav>
    )
}

export default NavbarMobile