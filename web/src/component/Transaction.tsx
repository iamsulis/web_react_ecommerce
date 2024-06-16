import React, { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
import Header from './_partial/Header'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";

const NoData = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='border rounded border-gray-200 py-16'>
                    <div className='text-center'>
                        <h1 className=''>- Belum ada pesanan -</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

const DataTransaction = (props: any) => {

    const navigate = useNavigate();

    var data = props.data;

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

    function popup_ulasan(e: any) {
        var id = e.target.value;

        withReactContent(Swal).fire({
            title: "Masukkan Ulasan",
            input: "textarea",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Submit",
            showLoaderOnConfirm: true,
            preConfirm: async (ulasan) => {
                try {
                    fetch(import.meta.env.VITE_API_URL + "/give_feedback", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                        // mode: 'no-cors',
                        body: JSON.stringify({
                            id: id,
                            ulasan: ulasan,
                        })
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data);
                        })
                        .catch((error) => console.log(error));

                } catch (error) {
                    Swal.showValidationMessage(`Request failed: ${error}`);
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                withReactContent(Swal).fire({
                    title: "Success!",
                    text: "Beri ulasan berhasil",
                    icon: "success"
                }).then(function (result) {
                    if (result.isConfirmed) {
                        navigate(0);
                    };
                })
            }
        });
    }

    return (
        <>
            <div className='container mx-auto'>

                {
                    data.map((e: any, i: any) => {
                        return (
                            <div key={i} className='pb-3'>
                                <div className='border-2 p-4 rounded-lg'>

                                    <div className='pb-3'>
                                        <div className='flex justify-between'>
                                            <div className='flex'>
                                                <div className='pe-5'>
                                                    <FontAwesomeIcon icon={faBagShopping} className='text-gray-800' size="lg" />
                                                </div>

                                                <div>
                                                    <h1 className='font-bold'>Belanja</h1>
                                                    <h1>{e.date_transaction}</h1>
                                                </div>
                                            </div>

                                            <div>
                                                <span className="font-bold inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Berhasil</span>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className='flex pt-5'>
                                        <div className='pe-5'>
                                            <img src={e.photo_item} alt="" width={70} />
                                        </div>

                                        <div>
                                            <h1 className='font-bold'>{e.name_item}</h1>
                                            <h2>{e.total + ' Barang '}</h2>
                                        </div>
                                    </div>

                                    <div className='flex justify-between pt-6'>
                                        <div>
                                            <h1 className='text-sm'>Total Belanja</h1>
                                            <h1 className='font-bold'>Rp {commafy(e.price)}</h1>
                                        </div>

                                        <div>
                                            {
                                                e.feedback
                                                    ? (
                                                        <>
                                                            <Link to={"/detail_product?id="+e.id_item} reloadDocument>
                                                                <button
                                                                    className="text-green-700 bg-white border-2 border-green-700 hover:bg-green-100 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                                                                    type="button"
                                                                    value={e.id}
                                                                >
                                                                    Lihat Ulasan
                                                                </button>
                                                            </Link>
                                                        </>
                                                    )
                                                    : (
                                                        <>
                                                            <button
                                                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                                                type="button"
                                                                onClick={popup_ulasan}
                                                                value={e.id}
                                                            >
                                                                Berikan Ulasan
                                                            </button>
                                                        </>
                                                    )
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

function Transaction() {

    const cookies = new Cookies();

    const [data_list, set_data_list] = useState({
        transaction_list: [],
    });

    useEffect(() => {

        var _param = {
            id_user: cookies.get('id'),
            key2: 'value2',
            key3: 'value3'
        };

        var params = new URLSearchParams(_param);

        fetch(import.meta.env.VITE_API_URL + "/transaction/list?" + params.toString(), {
            method: "GET",
            headers: {

            }
        })
            .then((response) => response.json())
            .then((data) => {

                set_data_list({
                    transaction_list: data.transaction_list,
                });

            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Header />

            {
                data_list.transaction_list.length > 0
                    ? (
                        <DataTransaction data={data_list.transaction_list} />
                    )
                    : (
                        <NoData />
                    )
            }

        </>
    )
}

export default Transaction