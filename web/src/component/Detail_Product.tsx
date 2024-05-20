import React, { useReducer } from 'react'
import Top from './_partial/Top'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";

// Define a reducer function
const reducer = (state:any, action:any) => {
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

const Account_Seller = () => {
    return (
        <>
            <div className='border-t-2 border-b-2'>
                <div className='flex'>
                    <img className='h-16 w-16' src="/items/hp_1.jpg" alt="" />
                    <div>
                        <div>
                            <span className='font-bold'>Nama Toko</span>
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

const Catalog = () => {

    const [state, dispatch] = useReducer(reducer, { 
        warna: 1 
    });

    return (
        <div className='container mx-auto flex justify-around'>
            <div className=''>
                <img src="/items/hp_1.jpg" alt="Handphone" />
            </div>

            <div className='w-1/2'>
                <h2 className='font-bold text-xl'>Ini Contoh Nama Product</h2>
                <h4>Terjual 60+</h4>

                <div className='pt-2 pb-8'>
                    <h3 className='font-bold text-3xl'>Rp10.000</h3>
                </div>

                <hr />
                <h2>Pilihan Warna: {state.warna}</h2>

                <div className='gap grid gap-x-4 grid-cols-2'>
                    <button onClick={() => dispatch({ type: 'pilih_warna', warna: 1})} className='border-2 rounded py-2 border-green-400 text-green-600 bg-green-100'>Putih</button>
                    <button onClick={() => dispatch({ type: 'pilih_warna', warna: 2})} className='border-2 rounded py-2'>Hitam</button>
                </div>

                <div className='gap grid gap-x-4 grid-cols-2'>
                    <button className='border-b-4 border-green-600 rounded py-2 text-green-700 font-bold'>Detail</button>
                    <button className='rounded py-2 text-gray-400 font-bold'>Info Penting</button>

                    <div>
                        <div className='flex'>
                            <h2 className='text-gray-600'>Kondisi: <span className='text-black'>Baru</span></h2>
                        </div>

                        <div className='flex'>
                            <h2 className='text-gray-600'>Min. Pemesanan: <span className='text-black'>1 Buah</span></h2>
                        </div>

                        <div className='flex'>
                            <h2 className='text-gray-600'>Etalase: <span className='text-green-600 font-bold'>Semua Etalase</span></h2>
                        </div>

                        <div>
                            Description
                        </div>

                        <Account_Seller />
                    </div>
                </div>
            </div>
            <Total_Pesan />
        </div>
    )
}

const Total_Pesan = () => {
    return (
        <>
            <div className='border-2 p-4 h-96'>
                <span className='font-bold'>Atur Jumlah dan Catatan</span>

                <div className='py-5'>
                    Putih
                </div>

                <div className='flex gap gap-x-2'>
                    <div className="inline-flex" role="group">
                        <button type="button" className="px-4 py-2 border-l-2 border-t-2 border-b-2 rounded-l-lg border-green-600">
                            <span className='font-bold text-lg'>-</span>
                        </button>

                        <input type="text" value={'1'} className='text-center border-y-2 border-green-600' />

                        <button type="button" className="px-4 py-2 border-r-2 border-t-2 border-b-2 rounded-r-lg border-green-600">
                            <span className='font-bold text-lg'>+</span>
                        </button>
                    </div>

                    <div className='align-center content-center'>
                        <span>Stock: <span className='font-bold'>9.962</span></span>
                    </div>
                </div>

                <div className='py-4 flex justify-between'>
                    <span>Subtotal</span>
                    <span className='font-bold text-lg'>Rp43.900</span>
                </div>

                <div className='grid gap-y-3'>
                    <button className='bg-green-600 p-3 w-full text-white rounded font-bold'>+ Keranjang</button>
                    <button className='bg-white p-3 w-full text-green-600 rounded font-bold border-2 border-green-600'>Beli</button>
                </div>

                <div className="grid grid-cols-3 divide-x-2 pt-4 text-center">
                    <button className='font-bold'>
                        <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>&nbsp; Chat
                    </button>

                    <button className='font-bold'>
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>&nbsp; Wishlist
                    </button>

                    <button className='font-bold'>
                        <FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon>&nbsp; Share
                    </button>
                </div>
            </div>
        </>
    )
}

function Detail_Product() {
    return (
        <>
            <Top />
            <Catalog />
        </>
    )
}

export default Detail_Product