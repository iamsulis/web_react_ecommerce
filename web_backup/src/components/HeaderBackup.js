import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <>
            <div className='fixed-top'>
                <header>

                    <div className='background-top'>
                        <div className='content-width py-2'>
                            <Row>
                                <Col xs={12} md={4}>Download E-Commerce</Col>
                                <Col xs={12} md={{ span: 5, offset: 3 }} className=''>
                                    <Row className='menu-top'>
                                        <Col xs={12} md={{span:3, offset:5}}>
                                            <a href={'#a'} className='menu-top text-dark'>Tentang E-Commerce</a>
                                        </Col>
                                        <Col xs={12} md={3} className='menu-top'>
                                            <a href={'#a'} className='menu-top text-dark'>Mulai Berjualan</a>
                                        </Col>
                                        <Col xs={12} md={1}>Promo</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <Navbar expand="lg" bg="" className="container-fluid bg-darker" variant="light">

                        <Navbar.Brand href="#home" className='text-warning fw-bold'>My Portfolio</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="ms-auto">
                                <Nav.Link href="#home" className='text-warning'>Home</Nav.Link>
                                <Nav.Link href="#home" className='text-warning'>Portfolio</Nav.Link>
                                <Nav.Link href="#home" className='text-warning'>Testimonial</Nav.Link>
                                <Nav.Link href="#home" className='text-warning'>About</Nav.Link>
                            </Nav>

                            <Nav className="ms-auto">
                                <NavDropdown title={<span className="text-warning my-auto">Dropdown</span>} className='text-warning' align="end" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        </>
    )
}

export default Header