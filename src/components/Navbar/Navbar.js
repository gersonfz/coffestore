import React, { useState } from "react"
import { Container, Wrapped, LogoContainer, Menu, MenuItem, BurgerMenu, ContainerMenu } from "./Navbar.elements"
import { GiCoffeeBeans, GiShoppingCart } from "react-icons/gi"
import { VscMenu } from "react-icons/vsc"
import { IconContext } from "react-icons"



export const Navbar = () => {
	const [showBurgerMenu, setShowBurgerMenu] = useState(false)
	return (
			 <Container>

			<Wrapped>

				<IconContext.Provider value={{ style: { fontSize: "2.5em", color: "#5b341c" } }}>

					<LogoContainer>
						<GiCoffeeBeans />
						<h1><a href="/">Coffee Beans</a></h1>
					</LogoContainer>

					<ContainerMenu>
						<GiShoppingCart/>
						
						<BurgerMenu onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
							<VscMenu />
						</BurgerMenu>

						<Menu open={showBurgerMenu}>
							<MenuItem>
								<a href="/">
									Home
								</a>
							</MenuItem>
							<MenuItem>
								<a href="/">
									Productos
								</a>
							</MenuItem>
							<MenuItem>
								<a href="/">
									Contacto
								</a>
							</MenuItem>
							<MenuItem>
								<a href="/">
									FAQs
								</a>
							</MenuItem>

						</Menu>

					</ContainerMenu>

				</IconContext.Provider>
			</Wrapped>

		</Container>
)};

export default Navbar

