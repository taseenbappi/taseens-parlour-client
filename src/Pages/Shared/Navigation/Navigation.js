import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
import logo from "../../../images/logo/icon.svg";

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='navigation-bg '>
            <Container >
                <Navbar.Brand href="/home"><img src={logo} alt="" className='img-fluid' height="50" width="50" /><span className='brand-title'>Taseen's Perlour</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto all-menu ">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/home#portfolio">Our Portfolio</Nav.Link>
                        <Nav.Link href="/home#team">Our Team</Nav.Link>
                        <Nav.Link href="/home#contact">Contact Us</Nav.Link>
                    </Nav>
                    <Nav className='align-items-center'>
                        <button className='login-btn'>Login</button>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;