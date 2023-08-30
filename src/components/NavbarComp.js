import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../images/squidward_png__by_seanscreations1_dfnpwy4-pre.png'
import '../cssFiles/NavbarComp.css';


export const NavbarComp = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Navbar.Brand className='ms-3' href="/">
                    <a className='navbar-brand'><img src={logo} style={{ height: '50px', flex: 1, }} />React Menü Projesi</a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>



    );
}
