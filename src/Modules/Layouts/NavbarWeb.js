import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import HeaderLogo from '../Components/Header/HeaderLogo/HeaderLogo'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
//import { Dropdown} from 'react-bootstrap';
import {  DropdownItem, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';



export default function NavbarWeb() {
	const [dropdown, setDropdown] = useState(false);

	const openCloseDropdown = () => {
		setDropdown(!dropdown);
	}
  return (
	<>
	<Navbar className="navBg" variant="light" expand="lg">
	<Container>
	  <Navbar.Brand as={Link} to ="/"><HeaderLogo/></Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
		<Nav className="me-auto">
		  <Nav.Link as={Link} to= "/Blog">Blog</Nav.Link>
		  <Nav.Link as={Link} to= "/Ranking" >Ranking</Nav.Link>
		  <Nav.Link as={Link} to="/Multimedia" >Multimedia</Nav.Link>
		</Nav>
		<Nav className='mr-auto p-3 m-3'>
			<a href="https://www.google.es/maps/?hl=es"><FaInstagram/></a>
			<a href="https://www.google.es/maps/?hl=es"><FaTwitter/></a>
			<a href="https://www.google.es/maps/?hl=es"><FaFacebook/></a>
			<a href="https://www.google.es/maps/?hl=es"><FaYoutube/></a>
			{/* <a href="https://www.google.es/maps/?hl=es"><Dropdown title={<GiWorld/>}>
			<Dropdown.Item>Catalan</Dropdown.Item>
			<Dropdown.Item>English</Dropdown.Item>
		</Dropdown></a> */}
		<Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
			<DropdownToggle caret>
			<GiWorld/>
			</DropdownToggle>
			<DropdownMenu>
				<DropdownItem>Català</DropdownItem>
				<DropdownItem>English</DropdownItem>
			</DropdownMenu>
		</Dropdown>
		</Nav>
	  </Navbar.Collapse>
	</Container>
  </Navbar>
  
  <section>
	  <Outlet></Outlet>
  </section>
	  </>
  )
}
