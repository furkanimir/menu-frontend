import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const NavbarComp = () => {
    return (
        <div>
        <Router>
            <Navbar bg="dark" data-bs-theme="dark">
                <Navbar.Brand className='ms-3' href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/home"} >Home</Nav.Link>
                        <Nav.Link as={Link} to={"/about"} >About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Router>
        </div>
        
    );
}
