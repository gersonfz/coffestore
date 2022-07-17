import React, { useContext } from "react"
import styles from "../../styles/Navbar.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { GiCoffeeBeans } from "react-icons/gi"
import CartWidget from "./CartWidget"
import { CartContext } from "../../cartcontext/CartContext";

export const NavBar = () => {
	const {itemCart} = useContext(CartContext)

	
	return (<>
		<header className={styles.header}>
			<Navbar expand="lg">
				<Container>
					<Navbar.Brand className={styles.logo}>
						<GiCoffeeBeans />
						<h1><NavLink to="/">Coffee Beans</NavLink></h1>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>					
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className={`${styles.menu} ms-auto`}>
						<NavLink to={'/'}>Home</NavLink>
							<NavLink to={"/category/1"}>Extra fuerte</NavLink>
							<NavLink to={"/category/2"}>Alta</NavLink>
							<NavLink to={"/category/3"}>Media</NavLink>
						</Nav>
					</Navbar.Collapse>
					<div className={styles.containerCartWidget}>
					{
						itemCart.length ? <CartWidget opacity={0}/> : <CartWidget opacity={1}/> 
					}
					</div>
				</Container>
			</Navbar>
		</header>
	</>
	)
};

export default NavBar
