import React from "react"
import { GiCoffeeBeans } from "react-icons/gi"
import { VscMenu } from "react-icons/vsc"
import { IconContext } from "react-icons"
import { IconCarShopping } from "./CartWidget"
import styles from "./Navbar.module.css"


export const Navbar = () => {
	return (
			 <nav className={styles.nav}>

			<div >

				<IconContext.Provider value={{ style: { fontSize: "2.5em", color: "#5b341c" } }}>

					<div >
						<GiCoffeeBeans />
						<h1><a href="/">Coffee Beans</a></h1>
					</div>

					<div>
						<IconCarShopping/>
						
						<div className={styles.BurgerMenu}>
							<VscMenu />
						</div>
						<ul className={styles.listaStyle}>
							<li>
								<a href="/">
									Home
								</a>
							</li>
							<li>
								<a href="/">
									Productos
								</a>
							</li>
							<li>
								<a href="/">
									Contacto
								</a>
							</li>
							<li>
								<a href="/">
									FAQs
								</a>
							</li>

						</ul>

					</div>

				</IconContext.Provider>
			</div>

		</nav>

)};

export default Navbar
 