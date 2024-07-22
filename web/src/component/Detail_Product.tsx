import React, { useReducer, useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import Top from './_partial/Top'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart, faShareNodes, faStar } from "@fortawesome/free-solid-svg-icons";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { Link, useNavigate } from "react-router-dom";

// Define a reducer function
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'pilih_warna':
            return { warna: action.warna };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
};

const Account_Seller = (props: any) => {

    let data_list = props.data;

    return (
        <>
            <div className='border-t-2 border-b-2 py-3'>
                <div className='flex'>
                    <img className='h-16 w-16' src={data_list.photo_toko} alt="" />
                    <div>
                        <div>
                            <span className='font-bold'>{data_list.nama_toko}</span>
                        </div>

                        <div>
                            <span>Online 3 Jam lalu</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const NoUlasan = () => {
    return (
        <>
            <div className='border-2 rounded'>
                <div className='p-4 text-center'>
                    <h4 className='font-bold'>- No Review Yet -</h4>
                </div>
            </div>
        </>
    )
}

const Ulasan = (props: any) => {

    let data_ulasan = props.data;

    return (
        <>
            <div className="container mx-auto">
                <h3 className='font-bold text-xl pb-4'>Ulasan Pembeli</h3>

                <div className=''>
                    {
                        data_ulasan.length == 0
                            ? (
                                <NoUlasan />
                            )
                            : (
                                <></>
                            )
                    }

                    {
                        data_ulasan.map((e: any, i: any) => {
                            return (
                                <div key={i} className='pb-4'>
                                    <div className='border-2 p-3 rounded'>

                                        <div className='flex'>
                                            <div className='pe-4'>
                                                <img className='h-16 w-16 rounded-full' src={'user/user_1.webp'} alt="" />
                                            </div>

                                            <div className=''>
                                                <div>
                                                    <h2 className='font-bold'>{e.nama_user}</h2>
                                                </div>

                                                <div className='pt-0.5'>
                                                    <FontAwesomeIcon className='text-yellow-400' icon={faStar}></FontAwesomeIcon>&nbsp;
                                                    <FontAwesomeIcon className='text-yellow-400' icon={faStar}></FontAwesomeIcon>&nbsp;
                                                    <FontAwesomeIcon className='text-yellow-400' icon={faStar}></FontAwesomeIcon>&nbsp;
                                                    <FontAwesomeIcon className='text-yellow-400' icon={faStar}></FontAwesomeIcon>&nbsp;
                                                    <FontAwesomeIcon className='text-yellow-400' icon={faStar}></FontAwesomeIcon>&nbsp;
                                                </div>

                                                <div className='pt-2'>
                                                    {e.feedback}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

const Catalog = () => {

    const [data_list, set_data_list] = useState('');

    const [state, dispatch] = useReducer(reducer, {
        warna: 1
    });

    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id");

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + "/detail_product?id=" + id, {
            method: "GET",
            headers: {

            },
        })
            .then((response) => response.json())
            .then((data) => {

                var object = [];

                for (const [key, value] of Object.entries(data.item_list)) {
                    object[key] = value;
                }

                set_data_list(object)

            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className='container mx-auto flex justify-around'>

            <div className=''>

                {(
                    data_list.photo
                        ? (
                            <img src={data_list.photo} className='h-72 w-72' alt="Handphone" />
                        )
                        : (
                            <div className='animate-pulse'>
                                <div className='rounded-2xl bg-slate-900 h-44 w-44'></div>
                            </div>
                        )
                )}
            </div>

            <div className='w-1/2 px-10'>

                {(
                    data_list.name
                        ? (<h2 className='font-bold text-xl'>{data_list.name}</h2>)
                        : (
                            <div className='animate-pulse'>
                                <div className='bg-slate-900 h-4'></div>
                            </div>
                        )
                )}
                {/* <h4>Terjual 60+</h4> */}

                {(
                    data_list.price
                        ? (
                            <div className='pt-2 pb-4'>
                                <h3 className='font-bold text-3xl'>Rp {data_list.price}</h3>
                            </div>
                        )
                        : (
                            <div className='animate-pulse'>
                                <div className='bg-slate-900 h-4'></div>
                            </div>
                        )
                )}

                <hr />
                {/* <h2>Pilihan Warna: {state.warna}</h2>

                <div className='gap grid gap-x-4 grid-cols-2'>
                    <button onClick={() => dispatch({ type: 'pilih_warna', warna: 1 })} className='border-2 rounded py-2 border-green-400 text-green-600 bg-green-100'>Putih</button>
                    <button onClick={() => dispatch({ type: 'pilih_warna', warna: 2 })} className='border-2 rounded py-2'>Hitam</button>
                </div> */}

                <div className='gap grid gap-x-4 grid-cols-1'>
                    <button className='border-b-4 border-green-600 rounded py-2 text-green-700 font-bold'>Detail</button>
                    {/* <button className='rounded py-2 text-gray-400 font-bold'>Info Penting</button> */}

                    <div className='py-3'>
                        <div className='flex'>
                            <h2 className='text-gray-600'>Kondisi: <span className='text-black'>Baru</span></h2>
                        </div>

                        <div className='flex'>
                            <h2 className='text-gray-600'>Min. Pemesanan: <span className='text-black'>1 Buah</span></h2>
                        </div>

                        {/* <div className='flex'>
                            <h2 className='text-gray-600'>Etalase: <span className='text-green-600 font-bold'>Semua Etalase</span></h2>
                        </div> */}

                        <div>
                            <h2 className='text-gray-600'>Deskripsi:</h2>
                            <h2>{data_list.description}</h2>
                        </div>
                    </div>

                    <Account_Seller data={data_list} />
                </div>
            </div>
            <Total_Pesan data={data_list} />
        </div>
    )
}

const Total_Pesan = (props: any) => {

    const navigate = useNavigate();

    let data_list = props.data;

    const [pesan, set_pesan] = useState(1);
    const [harga, set_harga] = useState(0);

    useEffect(() => {
        if (data_list.price) {
            set_harga(data_list.price);
        }
    }, [])


    function clicked(pesan: any) {

        if (pesan <= data_list.stock) {
            set_pesan(pesan);
        } else {
            pesan = pesan - 1;
        }

        let harga = hitung_total(pesan, data_list.price);

        set_harga(harga);
    }

    function hitung_total(total_pesan: any, harga_barang: any) {

        harga_barang = Number(harga_barang.split('.').join(""));
        let harga_pesan = total_pesan * harga_barang;

        return commafy(harga_pesan);
    }

    function commafy(num: any) {
        var str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1.');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

    const showSwal = (e: any) => {
        var id = e.target.value;

        withReactContent(Swal).fire({
            title: "Are you sure?",
            text: "Want to buy this item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgb(22 163 74)",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, buy it!"
        }).then((result) => {
            if (result.isConfirmed) {

                beli_item(id, harga, pesan);

                Swal.fire({
                    title: "Success!",
                    text: "Transaction Successfully",
                    icon: "success"
                });
            }
        });
    }

    const showKeranjang = (e: any) => {
        var id = e.target.value;

        withReactContent(Swal).fire({
            title: "Are you sure?",
            text: "Choose this item to cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgb(22 163 74)",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cart it!"
        }).then((result) => {
            if (result.isConfirmed) {
                keranjang_item(id, harga, pesan);
            }
        });
    }

    const beli_item = (id: any, harga: any, pesan: any) => {

        const cookies = new Cookies();

        fetch(import.meta.env.VITE_API_URL + "/transaction", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            // mode: 'no-cors',
            body: JSON.stringify({
                id: id,
                id_user: cookies.get('id'),
                harga: harga,
                pesan: pesan,
            })
        })
            .then((response) => response.json())
            .then((data) => {
                withReactContent(Swal).fire({
                    title: "Success!",
                    text: "Transaction Successfully",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/transaction');
                    }
                });
            })
            .catch((error) => console.log(error));
    }

    const keranjang_item = (id: any, harga: any, pesan: any) => {

        const cookies = new Cookies();

        fetch(import.meta.env.VITE_API_URL + "/wishlist/add", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            // mode: 'no-cors',
            body: JSON.stringify({
                id: id,
                id_user: cookies.get('id'),
                harga: harga,
                pesan: pesan,
            })
        })
            .then((response) => response.json())
            .then((data) => {

                cookies.set('total_wishlist', cookies.get('total_wishlist')+1, { path: '/', sameSite: 'none', secure: true });

                withReactContent(Swal).fire({
                    title: "Success!",
                    text: "Transaction Successfully",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/wishlist');
                    }
                });
            })
            .catch((error) => console.log(error));
    }

    const cookies = new Cookies();

    return (
        <>
            <div className='border-2 p-4 max-h-80'>
                <div className='pb-5'>
                    <span className='font-bold'>Atur Jumlah dan Catatan</span>
                </div>

                {/* <div className='py-5'>
                    Putih
                </div> */}

                <div className='flex gap gap-x-2'>
                    <div className="inline-flex" role="group">
                        <button
                            type="button"
                            onClick={() => {
                                clicked(pesan - 1)
                            }}
                            className="px-4 py-2 border-l-2 border-t-2 border-b-2 rounded-l-lg border-green-600"
                            disabled={(pesan == 1 ? true : false)}
                        >
                            <span className='font-bold text-lg'>-</span>
                        </button>

                        <input type="text" value={pesan} className='text-center border-y-2 border-green-600' readOnly />

                        <button
                            type="button"
                            onClick={() => {
                                clicked(pesan + 1)
                            }}
                            className="px-4 py-2 border-r-2 border-t-2 border-b-2 rounded-r-lg border-green-600"
                        >
                            <span className='font-bold text-lg'>+</span>
                        </button>
                    </div>

                    <div className='align-center content-center'>
                        <span>Stock: <span className='font-bold'>{data_list.stock} </span></span>
                    </div>
                </div>

                <div className='py-4 flex justify-between'>
                    <span>Subtotal</span>
                    <span className='font-bold text-lg'>Rp {(harga == 0 ? data_list.price : harga)}</span>
                </div>

                <div className='grid gap-y-3'>

                    {
                        !cookies.get('id')
                            ? (
                                <>
                                    <button
                                        onClick={() => {
                                            navigate('/login')
                                        }}
                                        className='bg-green-600 p-3 w-full text-white rounded font-bold'
                                    >
                                        + Keranjang
                                    </button>

                                    <button
                                        onClick={() => {
                                            navigate('/login')
                                        }}
                                        className='bg-white p-3 w-full text-green-600 rounded font-bold border-2 border-green-600 hover:bg-green-100'>
                                        Beli
                                    </button>
                                </>
                            )
                            : (
                                <>
                                    <button
                                        onClick={showKeranjang}
                                        value={data_list.id}
                                        className='bg-green-600 p-3 w-full text-white rounded font-bold'
                                    >
                                        + Keranjang
                                    </button>

                                    <button
                                        onClick={showSwal}
                                        // onClick={showSwal}
                                        value={data_list.id}
                                        className='bg-white p-3 w-full text-green-600 rounded font-bold border-2 border-green-600 hover:bg-green-100'>
                                        Beli
                                    </button>
                                </>
                            )
                    }

                </div>

                {/* <div className="grid grid-cols-3 divide-x-2 pt-4 text-center">
                    <button className='font-bold'>
                        <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>&nbsp; Chat
                    </button>

                    <button className='font-bold'>
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>&nbsp; Wishlist
                    </button>

                    <button className='font-bold'>
                        <FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon>&nbsp; Share
                    </button>
                </div> */}
            </div >
        </>
    )
}

function Detail_Product() {
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id");

    const [data_list, set_data_list] = useState('');
    const [data_ulasan, set_data_ulasan] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + "/detail_product?id=" + id, {
            method: "GET",
            headers: {

            },
        })
            .then((response) => response.json())
            .then((data) => {

                // var object = [];

                // for (const [key, value] of Object.entries(data.item_list)) {
                //     object[key] = value;
                // }

                // set_data_list(object)

                // ============= DATA ULASAN ==============
                set_data_ulasan(data.ulasan_list);
                // ========================================

            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Top />
            <Catalog />
            <Ulasan data={data_ulasan} />
        </>
    )
}

export default Detail_Product