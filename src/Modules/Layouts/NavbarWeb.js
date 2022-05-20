import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import HeaderLogo from "../Components/Header/HeaderLogo/HeaderLogo";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import HeaderUserLogin from "../Components/Header/HeaderNavBar/HeaderUserLogin";
import style from './Layouts.module.css'
import { motion } from 'framer-motion'

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
                            <Nav.Link className='text-white fw-bold  fontSize' as={Link} to="/Foro">
                                <motion.h4 whileHover={{scale: 1.2}}>Foro</motion.h4>
                            </Nav.Link>
                            <Nav.Link className='text-white fw-bold' as={Link} to="/Blog">
                            <motion.h4 whileHover={{scale: 1.2}}>Blog</motion.h4>
                            </Nav.Link>
                            <Nav.Link className='text-white fw-bold' as={Link} to="/Ranking">
                            <motion.h4 whileHover={{scale: 1.2}}>Ranking</motion.h4>
                            </Nav.Link>
                            <Nav.Link className='text-white fw-bold' as={Link} to="/Multimedia">
                            <motion.h4 whileHover={{scale: 1.2}}>Multimedia</motion.h4>
                            </Nav.Link>
                        </Nav>
                        <Nav className={style.xarxesContainer}>
                            <motion.a whileHover={{scale: 1.4}} href="https://www.google.es/maps/?hl=es">
                                <FaInstagram size={25} style={{ fill: "white" }} />
                            </motion.a>
                            <motion.a whileHover={{scale: 1.4}} href="https://www.google.es/maps/?hl=es">
                                <FaTwitter className='mr-2' size={25} style={{ fill: "white" }} />
                            </motion.a>
                            <motion.a whileHover={{scale: 1.4}} href="https://www.google.es/maps/?hl=es">
                                <FaFacebook size={25} style={{ fill: "white" }} />
                            </motion.a>
                            <motion.a whileHover={{scale: 1.4}} href="https://www.google.es/maps/?hl=es">
                                <FaYoutube size={25} style={{ fill: "white" }} />
                            </motion.a>
                            <div className={style.xarxesContainer}>
                           
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
