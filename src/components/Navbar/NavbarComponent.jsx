// Home page React component
import React from 'react';

import './NavbarComponent.css';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../../assets/svg/logo.svg";

import {application} from '../../assets/data/main.json';

const NavbarComponent = () => {
    return (
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className="navbar-brand">
                        <img className="navbar-logo" src={logo}/>
                        <div className="navbar-title">
                            <h1 className="navbar-header dark-blue-text">{application.name}</h1>
                            <h2 className="navbar-subheader dark-blue-text">{application.tagline}</h2>
                        </div>
                    </Navbar.Brand>

                    {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}

                    {/*<Navbar.Collapse id="basic-navbar-nav">*/}
                    {/*    <Nav className="me-auto">*/}
                    {/*        <Nav.Link href="#home">Home</Nav.Link>*/}
                    {/*        <Nav.Link href="#link">Link</Nav.Link>*/}
                    {/*    </Nav>*/}
                    {/*</Navbar.Collapse>*/}
                </Container>
            </Navbar>
    );
};


export default NavbarComponent;