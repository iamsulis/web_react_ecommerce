import React from 'react'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Header() {
    return (
        <>
            <div className='fixed-top'>
                <header>
                    <div className='header-desktop'>
                        <div className='background-top'>
                            <div className='content-header py-2'>
                                <Row>
                                    <Col md={6}>
                                        <div>Download E-Commerce Apps</div>
                                    </Col>

                                    <Col md={{ span: 3, offset: 3 }}>
                                        <div className='menu-top'>
                                            <a href={'#a'} className='menu-top text-dark'>Tentang E-Commerce</a>
                                            <a href={'#a'} className='menu-top text-dark'>Mulai Berjualan</a>
                                            <a href={'#a'} className='menu-top text-dark'>Promo</a>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className='bg-white'>
                            <div className='header-border-bottom content-header'>
                                <Row className='py-3'>
                                    <Col lg={1} className='my-auto'>
                                        <h4 className='fw-bold text-success'>E-Commerce</h4>
                                    </Col>

                                    <Col lg={1} className='my-auto text-center'>
                                        Kategori
                                    </Col>

                                    <Col>
                                        <Form>
                                            <Form.Control type="email" placeholder="Cari di E-Commerce" className='' />
                                        </Form>
                                    </Col>

                                    <Col lg={2} className='text-right'>
                                        <div className='d-flex justify-content-between'>
                                            <button className='btn btn-outline-success'>
                                                <label className='fw-bold'>Keranjang</label>
                                            </button>

                                            <div className='vertical-line' />

                                            <button className='btn btn-outline-success'>
                                                <label className='fw-bold'>Masuk</label>
                                            </button>

                                            <button className='btn btn-success'>
                                                <label className='fw-bold'>ABC</label>
                                            </button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>

                </header>
            </div>
        </>
    )
}

export default Header