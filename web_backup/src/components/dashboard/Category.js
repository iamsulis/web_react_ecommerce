import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Button from 'react-bootstrap/Button';

const KategoriPilihan = () => {
    return (
        <>
            <div className='pb-2'>
                <h4 className='fw-bold'>Kategori Pilihan</h4>
            </div>
            <div>
                <Row>
                    <Col>
                        <Card border="light">
                            <Card.Body>
                                <div className='text-center'>
                                    <Card.Img variant="top" src={require("../../assets/img/category-1.jpg.webp")} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light">
                            <Card.Body>
                                <div className='text-center'>
                                    <Card.Img variant="top" src={require("../../assets/img/category-2.jpg.webp")} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light">
                            <Card.Body>
                                <div className='text-center'>
                                    <Card.Img variant="top" src={require("../../assets/img/category-3.jpg.webp")} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light">
                            <Card.Body>
                                <div className='text-center'>
                                    <Card.Img variant="top" src={require("../../assets/img/category-4.jpg.webp")} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </div>
        </>
    )
}

const TopUpTagihan = () => {
    return (
        <>
            <div className='pb-2'>
                <h4 className='fw-bold'>Top Up & Tagihan</h4>
            </div>

            <div>
                <Card>
                    <Card.Body>
                        <Tabs
                            defaultActiveKey="pulsa"
                            id="fill-tab-example"
                            className="mb-3"
                            fill
                        >
                            <Tab eventKey="pulsa" title={<label className='fw-bold text-secondary'>Pulsa</label>}>
                                <Row className='bg-white'>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nomor Telepon</Form.Label>
                                            <Form.Control type="number" placeholder="Masukkan Nomor" />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nomor Telepon</Form.Label>
                                            <Form.Control type="number" placeholder="Masukkan Nomor" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={2} className='d-flex align-items-center'>
                                        <Button variant="success">Beli</Button>
                                    </Col>
                                </Row>
                            </Tab>

                            <Tab eventKey="paket" title={<label className='fw-bold text-secondary'>Paket Data</label>}>
                                <Row className='bg-white'>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nomor Telepon</Form.Label>
                                            <Form.Control type="number" placeholder="Masukkan Nomor" />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nomor Telepon</Form.Label>
                                            <Form.Control type="number" placeholder="Masukkan Nomor" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={2} className='d-flex align-items-center'>
                                        <Button variant="success">Beli</Button>
                                    </Col>
                                </Row>
                            </Tab>

                            <Tab eventKey="longer-tab" title={<label className='fw-bold text-secondary'>Flight</label>}>
                                Tab content for Loooonger Tab
                            </Tab>
                            <Tab eventKey="contact" title={<label className='fw-bold'>Listrik PLN</label>} disabled>
                                Tab content for Contact
                            </Tab>
                        </Tabs>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

const Category = () => {
    return (
        <>
            <div className='pt-4'>
                <Card className='shadow-sm'>
                    <Card.Body>
                        <Row className='flex-row align-content-center'>
                            <Col>
                                <KategoriPilihan />
                            </Col>

                            <Col>
                                <TopUpTagihan />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <div className='py-3'>
                    <hr />
                </div>

            </div>
        </>
    );
};

export default Category;