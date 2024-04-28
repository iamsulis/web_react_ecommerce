import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

import logo from '../../carousel1.jpg'

const Carrousel = () => {
    return (
        <>
            <Container className='pb-4'>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={logo}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
};

export default Carrousel;