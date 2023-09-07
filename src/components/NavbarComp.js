import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../images/squidward_png__by_seanscreations1_dfnpwy4-pre.png'
import '../cssFiles/NavbarComp.css';


export const NavbarComp = () => {
    return (
        <div>
            <Navbar expand='lg' bg="dark" data-bs-theme="dark">
                <Navbar.Brand className='ms-2' href="/">
                    <a className='navbar-brand'><img src={logo} style={{ height: '50px', flex: 1, }} />React Menü Projesi</a>
                </Navbar.Brand>
                <Navbar.Toggle className='me-3' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-2">
                        <Nav.Link href="/"><i class="bi bi-house"></i> Home</Nav.Link>
                        <Nav.Link href="/menu"><i class="bi bi-postcard"></i> Menu</Nav.Link>
                        <Nav.Link href="/contact"><i class="bi bi-signpost"></i> Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>



    );
}
