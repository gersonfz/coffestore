import React, {useState} from "react"
import { Container, Wrapped, LogoContainer, Menu, MenuItem, MenuItemLink, BurgerMenu } from "./Navbar.elements"
import { GiCoffeeBeans } from "react-icons/gi"
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
						<h1 className="fontLogo">Coffee Beans</h1>
					</LogoContainer>

					<BurgerMenu onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
						<VscMenu />
					</BurgerMenu>
					<Menu open={showBurgerMenu}>

						<MenuItem>
							<MenuItemLink>
								Home
							</MenuItemLink>
						</MenuItem>
						<MenuItem>
							<MenuItemLink>
								Productos
							</MenuItemLink>
						</MenuItem>
						<MenuItem>
							<MenuItemLink>
								Contacto
							</MenuItemLink>
						</MenuItem>
						<MenuItem>
							<MenuItemLink>
								FAQs
							</MenuItemLink>
						</MenuItem>
					</Menu>
				</IconContext.Provider>
			</Wrapped>
		</Container>
	)
};

export default Navbar

