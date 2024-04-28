import Container from 'react-bootstrap/Container';

import logo from '../../carousel1.jpg'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import Carousel from 'react-bootstrap/esm/Carousel';

import '../../assets/css/horizontal.scss';

const DataBelanjaan = (props) => {

    return (
        <>
            <div className='pb-3'>
                <div className='d-flex'>
                    <h5 className='fw-bold my-auto'>Berdasarkan Pencarianmu</h5>
                    <a href={'#a'} className=''>
                        <span className='px-3 text-success fw-bold my-auto'>Lihat Semua</span>
                    </a>
                </div>
            </div>

            <div className="pb-3 gap-3 scrollmenu d-flex flex-nowrap justify-content-between">
                <div className='h-100'>
                    <div className="border shadow-sm rounded float-div text-nowrap">
                        <div className=''>
                            <img src={require('../../assets/img/catalogue-1.jpg')} width={'200px'} />
                        </div>

                        <div className='px-2 py-3'>
                            <div className='text-wrap'>
                                <label>Tripod stand tiang lampu sorot LED Footlight kaki 3</label>
                                <label className='fw-bold'>Rp134.999</label>
                            </div>

                            <div className='d-flex'>
                                <label>A</label>
                                <label>B</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className="border h-100 shadow-sm rounded float-div text-nowrap">
                        <div className=''>
                            <img src={require('../../assets/img/catalogue-2.jpg')} width={'200px'} />
                        </div>

                        <div className='px-2 py-3'>
                            <div className='text-wrap'>
                                <label>Lampu Depan LED Motor AYOTO M5A H5 AC DC 10</label>
                                <label className='fw-bold'>Rp28.000</label>
                            </div>

                            <div className='d-flex'>
                                <label>A</label>
                                <label>B</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className="border h-100 shadow-sm rounded float-div text-nowrap">
                        <div className=''>
                            <img src={require('../../assets/img/catalogue-3.jpg')} width={'200px'} />
                        </div>

                        <div className='px-2 py-3'>
                            <div className='text-wrap'>
                                <label>Sambal Cumi Cap Ibu</label>
                                <label className='fw-bold'>Rp35.000</label>
                            </div>

                            <div className='d-flex'>
                                <label>A</label>
                                <label>B</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className="border h-100 shadow-sm rounded float-div text-nowrap">
                        <div className=''>
                            <img src={require('../../assets/img/catalogue-4.jpg')} width={'200px'} />
                        </div>

                        <div className='px-2 py-3'>
                            <div className='text-wrap'>
                                <label>Sambal Kota Hoedjan - Aneka Teri, Cakalang ...</label>
                                <label className='fw-bold'>Rp40.000</label>
                            </div>

                            <div className='d-flex'>
                                <label>A</label>
                                <label>B</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className="border h-100 shadow-sm rounded float-div text-nowrap">
                        <div className=''>
                            <img src={require('../../assets/img/catalogue-5.jpg')} width={'200px'} />
                        </div>

                        <div className='px-2 py-3'>
                            <div className='text-wrap'>
                                <label>SAMBAL CUMI ASIN/PETAI/BAJAK ...</label>
                                <label className='fw-bold'>Rp29.900</label>
                            </div>

                            <div className='d-flex'>
                                <label>A</label>
                                <label>B</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className="border shadow-sm rounded float-div text-nowrap">
                        <div className=''>
                            <img src={require('../../assets/img/catalogue-6.jpg')} width={'200px'} />
                        </div>

                        <div className='px-2 py-3'>
                            <div className='text-wrap'>
                                <label>SAMBAL HIJAU CUMI MR CRISPY</label>
                                <label className='fw-bold'>Rp29.900</label>
                            </div>

                            <div className='d-flex'>
                                <label>A</label>
                                <label>B</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className="border shadow-sm rounded float-div text-nowrap">
                        <div className=''>
                            <img src={require('../../assets/img/catalogue-7.jpg')} width={'200px'} />
                        </div>

                        <div className='px-2 py-3'>
                            <div className='text-wrap'>
                                <label>Cuka Makan Dixi Botol 650ml</label>
                                <label className='fw-bold'>Rp15.500</label>
                            </div>

                            <div className='d-flex'>
                                <label>A</label>
                                <label>B</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className="border shadow-sm rounded float-div text-nowrap">
                        <div className=''>
                            <img src={require('../../assets/img/catalogue-1.jpg')} width={'200px'} />
                        </div>

                        <div className='px-2 py-3'>
                            <div className='text-wrap'>
                                <label>Tripod stand tiang lampu sorot LED Footlight kaki 3</label>
                                <label className='fw-bold'>Rp134.999</label>
                            </div>

                            <div className='d-flex'>
                                <label>A</label>
                                <label>B</label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="float-div text-nowrap">here is main content which is float</div>
                <div className="float-div text-nowrap">here is main content which is float</div>
                <div className="float-div text-nowrap">here is main content which is float</div>
                <div className="float-div text-nowrap">here is main content which is float</div>
                <div className="float-div text-nowrap">here is main content which is float</div>
                <div className="float-div text-nowrap">here is main content which is float</div>
                <div className="float-div text-nowrap">here is main content which is float</div>
                <div className="float-div text-nowrap">here is main content which is float</div>
            </div>

        </>
    );
};

export default DataBelanjaan;