import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Sling as Hamburger } from 'hamburger-react';
import {useDisplay} from "./Display";

const Header = () => {

    const [overLayNavLinks, setOverLayNavLinks] = useState(false);

    const stateDisplay = useDisplay();

    const handleOverLayNavLinks = event => {

        setOverLayNavLinks(prevValue => !prevValue);
        stateDisplay.setHome(prevValue => !prevValue);
        stateDisplay.setFooter(prevValue => !prevValue);
        console.log(stateDisplay.home);        

    }

    return (
        <header id="header-section">
            <Navbar collapseOnSelect expand="lg" variant="light" className="navbar-all">


                <Navbar.Brand href="/">
                    <p> logostrategies </p>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                    onClick={handleOverLayNavLinks}>

                    <Hamburger />

                </Navbar.Toggle>

                <div className="navbar-links"
                    style={{ backgroundColor: overLayNavLinks ? "white" : "transparent" }}>


                    <Navbar.Collapse
                        id="responsive-navbar-nav"
                        className="navbar-links-content" >

                        <Nav className="mr-auto">

                            <NavDropdown
                                title="Projects"
                                id="collasible-nav-dropdown">

                                <div className="projects-content">

                                    <NavDropdown.Item >--- Back ---</NavDropdown.Item>

                                    <NavDropdown.Item href="/project1">Project 1</NavDropdown.Item>
                                    <NavDropdown.Item href="/project2">Project 2</NavDropdown.Item>
                                 

                                </div>



                            </NavDropdown>

                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>

                            <Nav.Link href="/contact" className="contact-item btn text-white">Contact Us</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </div>

            </Navbar>
        </header>

    );
}

export default Header;