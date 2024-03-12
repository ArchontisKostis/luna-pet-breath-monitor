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
                        <a href="/" className="logo-header">
                            <img className="navbar-logo" src={logo}/>
                            <div className="navbar-title">
                                <h1 className="navbar-header dark-blue-text">{application.name}</h1>
                                <h2 className="navbar-subheader dark-blue-text">{application.tagline}</h2>
                            </div>
                        </a>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Αρχική</Nav.Link>
                            <Nav.Link href="/new">Νέα Μέτρηση</Nav.Link>
                            <Nav.Link href="/history">Ιστορικό</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <a href="https://github.com/ArchontisKostis/luna-pet-breath-monitor" id="github-repo-icon">
                            <i className="bi bi-github"></i>
                        </a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};


export default NavbarComponent;