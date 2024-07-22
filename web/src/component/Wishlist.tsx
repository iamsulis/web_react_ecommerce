import React, { useState, useEffect } from "react";
import Cookies from 'universal-cookie';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { Link, useNavigate } from "react-router-dom";

import logo from '/vite.svg'; // with import
import Header from "./_partial/Header";

function Product(props: any) {
    var data = props.data;

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

    function popup_delete_item(e: any) {
        const cookies = new Cookies();

        var id = e.target.value;
        var id_user = cookies.get('id');

        withReactContent(Swal).fire({
            title: "Are you sure?",
            text: "Want to delete this item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgb(22 163 74)",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                delete_item(id, id_user);
            }
        });
    }

    function delete_item(id: any, id_user: any) {

        const cookies = new Cookies();

        fetch(import.meta.env.VITE_API_URL + "/wishlist/delete", {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            // mode: 'no-cors',
            body: JSON.stringify({
                id: id,
                id_user: id_user,
            })
        })
            .then((response) => response.text())
            .then((data) => {

                data = JSON.parse(data);

                console.log(data)

                cookies.set('total_wishlist', data.total_wishlist, { path: '/', sameSite: 'none', secure: true });

                withReactContent(Swal).fire({
                    title: "Success!",
                    text: "Delete Successfully",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(0);
                    }
                });
            })
            .catch((error) => console.log(error));
    }

    function clicked(total: any, stock_item: any, i: any) {

        if (total <= stock_item) {
            data[i].total = total
            data[i].total_harga = total * data[i].harga;
        }

        props.gantiTotal(data)
    }

    return (
        <>
            <div className="container mx-auto">

                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        {
                            data.map((e: any, i: any) => {
                                return (
                                    <div key={i} className='pb-3'>
                                        <div className='border-2 p-4 rounded-lg'>

                                            <div className="grid grid-cols-12">
                                                <div className="col-span-1 flex my-auto mx-auto align-middle">
                                                    <div className="">
                                                        <input
                                                            type="checkbox"
                                                            className="w-7 h-7"
                                                            id={i}
                                                            onChange={(e) => {
                                                                props.onChange(e)
                                                            }}
                                                            value={e.id}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-span-11">

                                                    <div className="flex justify-between">
                                                        <div>
                                                            <div className='flex pt-5'>
                                                                <div className='pe-5'>
                                                                    <img src={e.photo_item} alt="" width={70} />
                                                                </div>

                                                                <div>
                                                                    <h1 className='font-bold'>{e.name_item}</h1>
                                                                    <div className="pt-3">
                                                                        <div className='flex gap gap-x-2'>
                                                                            <div className="inline-flex" role="group">
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() => {
                                                                                        clicked(e.total - 1, e.stock_item, i)
                                                                                    }}
                                                                                    className="px-4 py-1.5 border-l-2 border-t-2 border-b-2 rounded-l-lg border-green-600"
                                                                                    disabled={(e.total == 1 ? true : false)}
                                                                                >
                                                                                    <span className='font-bold text-lg'>-</span>
                                                                                </button>

                                                                                <input type="text" value={e.total} className='text-center w-5 border-y-2 border-green-600 w-2' readOnly />

                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() => {
                                                                                        clicked(e.total + 1, e.stock_item, i)
                                                                                    }}
                                                                                    className="px-4 py-2 border-r-2 border-t-2 border-b-2 rounded-r-lg border-green-600"
                                                                                >
                                                                                    <span className='font-bold text-lg'>+</span>
                                                                                </button>
                                                                            </div>

                                                                            <div className='align-center content-center'>
                                                                                <span>Stock: <span className='font-bold'>{e.stock_item} </span></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='flex justify-between pt-6'>
                                                                <div>
                                                                    <h1 className='text-sm'>Total Belanja</h1>
                                                                    <h1 className='font-bold'>Rp {commafy(e.total_harga)}</h1>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="flex my-auto align-middle">
                                                            <div className="">
                                                                <button
                                                                    className="bg-red-500 p-3 rounded text-white hover:bg-red-600"
                                                                    onClick={(e) => {
                                                                        popup_delete_item(e)
                                                                    }}
                                                                    value={e.id}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
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

                <div className="pb-32"></div>

            </div>
        </>
    )
}

function Total_Harga(props: any) {

    var total_harga = props.total_harga;

    return (
        <>
            <div>
                <div className="fixed bottom-0 w-full">
                    <div className="bg-white">
                        <div className="border-t-2">
                            <div className="px-5 py-3">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="">Total Belanja:</h3>
                                        <h3 className="pt-4 font-bold">
                                            {
                                                'Rp ' + (total_harga == 0 ? '-' : total_harga)

                                            }
                                        </h3>
                                    </div>

                                    <div>
                                        <button
                                            onClick={() => {
                                                withReactContent(Swal).fire({
                                                    title: "Are you sure?",
                                                    text: "Want to Checkout?",
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor: "rgb(22 163 74)",
                                                    cancelButtonColor: "#d33",
                                                    confirmButtonText: "Yes, cart it!"
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        props.checkout()
                                                    }
                                                });
                                            }}
                                            className="text-white rounded-lg p-3 bg-green-700 hover:bg-green-800"
                                        >
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function NoData(props) {
    return (
        <>
            <div className="container mx-auto">
                <div className="border-2 rounded">
                    <div className="p-4 text-center">
                        <h3 className="font-bold">No Data Found</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

function Wishlist(props: any) {

    const cookies = new Cookies();
    const navigate = useNavigate();

    const [data_list, set_data_list] = useState({
        wishlist: [],
    });

    const [id_selected, set_id_selected] = useState([]);

    const [total_harga, set_total_harga] = useState(0);

    useEffect(() => {

        var _param = {
            id_user: cookies.get('id'),
        };

        var params = new URLSearchParams(_param);

        fetch(import.meta.env.VITE_API_URL + "/wishlist/list?" + params.toString(), {
            method: "GET",
            headers: {

            }
        })
            .then((response) => response.json())
            .then((data) => {

                set_data_list({
                    wishlist: data.wishlist,
                });

            })
            .catch((error) => console.log(error));
    }, []);

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

    function update_total_harga(data: any) {
        var total_harga = 0;
        data_list.wishlist.map((e: any, i: any) => {
            if (data.includes(String(e.id))) {
                //     console.log('aa');
                total_harga = total_harga + e.total_harga;
            }
        })

        set_total_harga(commafy(total_harga))
    }

    function checkout() {

        fetch(import.meta.env.VITE_API_URL + "/transaction/from_cart", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            // mode: 'no-cors',
            body: JSON.stringify({
                data: data_list.wishlist
            })
        })
            .then((response) => response.json())
            .then((data) => {

                cookies.set('total_wishlist', cookies.get('total_wishlist') - data.total_wishlist, { path: '/', sameSite: 'none', secure: true });

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
            .catch((error) => console.log('hello'));
    }

    return (
        <>
            <Header {...props} />

            {
                data_list.wishlist.length > 0
                    ? (
                        <Product
                            data={data_list.wishlist}
                            onChange={(e: any) => {

                                data_list.wishlist[e.target.id].checked = e.target.checked

                                var data = id_selected;
                                if (e.target.checked == true) {
                                    data.push(e.target.value);
                                } else {
                                    // data = data.filter(function(i) { return i !== e.target.value })
                                    data = data.filter(v => v !== e.target.value)
                                }

                                set_id_selected(data);

                                set_data_list({
                                    wishlist: data_list.wishlist
                                })

                                update_total_harga(data);

                            }}
                            gantiTotal={(data: any) => {

                                set_data_list({
                                    wishlist: data
                                })
                            }}
                            {...props}
                        />
                    )
                    : (
                        <>
                            <NoData />
                        </>
                    )
            }


            <Total_Harga
                total_harga={total_harga}
                checkout={() => {
                    checkout()
                }}
                {...props}
            />
        </>
    )
}

export default Wishlist