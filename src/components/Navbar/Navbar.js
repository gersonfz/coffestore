import React from "react"
import { GiCoffeeBeans } from "react-icons/gi"
import CartWidget from "./CartWidget"
import styles from "./Navbar.module.css"
import NavbarDesktop from "./NavbarDesktop"
import NavbarMobile from "./NavbarMobile"
import { Link } from "react-router-dom"

export const Navbar = () => {
	return (<>
			<header className={styles.header}>
			<div className={styles.wrapped}>
					<div className={styles.logo}>
						<GiCoffeeBeans />
						<h1><Link to="/">Coffee Beans</Link></h1>
					</div>
					<div className={styles.menu}>
						<CartWidget />
						<NavbarDesktop />
						<NavbarMobile />
					</div>
			</div>
		</header>
	</>
)};

export default Navbar
 