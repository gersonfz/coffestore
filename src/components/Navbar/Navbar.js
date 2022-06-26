import React from "react"
import { GiCoffeeBeans } from "react-icons/gi"
import { IconContext } from "react-icons"
import { IconCarShopping } from "./CartWidget"
import styles from "./Navbar.module.css"
import NavbarDesktop from "./NavbarDesktop"
import NavbarMobile from "./NavbarMobile"

export const Navbar = () => {
	return (<>
			<header className={styles.header}>
			<div className={styles.wrapped}>
				<IconContext.Provider value={{ style: { fontSize: "2.5em", color: "#5b341c" } }}>
					<div>
						<GiCoffeeBeans />
						<h1><a href="/">Coffee Beans</a></h1>
					</div>
					<div className={styles.menu}>
						<IconCarShopping/>
						<NavbarDesktop />
						<NavbarMobile />
					</div>
				</IconContext.Provider>
			</div>
		</header>
	</>
)};

export default Navbar
 