import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import HeaderLogo from "../Components/Header/HeaderLogo/HeaderLogo";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import HeaderUserLogin from "../Components/Header/HeaderNavBar/HeaderUserLogin";
import style from './Layouts.module.css'

export default function NavbarWeb() {
    const [dropdown, setDropdown] = useState(false);

    const openCloseDropdown = () => {
        setDropdown(!dropdown);
    };
    return (
        <>

        <div className={style.bg}>
            <Navbar className="navBg" variant="grey" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <HeaderLogo />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white fw-bold' as={Link} to="/Foro">
                                Foro
                            </Nav.Link>
                            <Nav.Link className='text-white fw-bold' as={Link} to="/Blog">
                                Blog
                            </Nav.Link>
                            <Nav.Link className='text-white fw-bold' as={Link} to="/Ranking">
                                Ranking
                            </Nav.Link>
                            <Nav.Link className='text-white fw-bold' as={Link} to="/Multimedia">
                                Multimedia
                            </Nav.Link>
                        </Nav>
                        <Nav className={style.xarxesContainer}>
                            <a href="https://www.google.es/maps/?hl=es">
                                <FaInstagram size={25} style={{ fill: "white" }} />
                            </a>
                            <a href="https://www.google.es/maps/?hl=es">
                                <FaTwitter className='mr-2' size={25} style={{ fill: "white" }} />
                            </a>
                            <a href="https://www.google.es/maps/?hl=es">
                                <FaFacebook size={25} style={{ fill: "white" }} />
                            </a>
                            <a href="https://www.google.es/maps/?hl=es">
                                <FaYoutube size={25} style={{ fill: "white" }} />
                            </a>
                            <div className={style.xarxesContainer}>
                           
                            <div className="dropdown" >
                                
                                <GiWorld className={style.xarxesContainer} style={{ fill: "white" }} size={25} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" />

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Català
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            English
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <HeaderUserLogin />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
            <section>
                <Outlet></Outlet>
            </section>
          
        </>
    );
}
