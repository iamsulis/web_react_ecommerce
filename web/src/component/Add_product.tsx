import React, { useState, useEffect } from "react";
import Header from './_partial/Header'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { Link, useNavigate } from "react-router-dom";

const Form = (props: any) => {

    const navigate = useNavigate();

    let category_list = props.category_list;

    const [data_submit, set_data_submit] = useState({});
    const [file, set_file] = useState([]);

    const handleChange = (event: any) => {
        let name = event.target.name;
        let value = event.target.value;

        if (name == 'product_photo') {
            let img = event.target.files[0];
            set_file(img)
        }

        set_data_submit(values => ({ ...values, [name]: value }))
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

    const submit_form = (event: any) => {

        event.preventDefault();

        withReactContent(Swal).fire({
            title: "Are you sure?",
            text: "Want to add this item?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgb(22 163 74)",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add it!"
        }).then((result) => {
            if (result.isConfirmed) {
                var product_name = data_submit.product_name;
                var category = data_submit.category;
                var price = data_submit.price;
                var stock = data_submit.stock;
                var description = data_submit.description;

                let fd = new FormData()
                fd.append("images", file);
                fd.append("product_name", product_name);
                fd.append("category", category);
                fd.append("price", commafy(price));
                fd.append("stock", stock);
                fd.append("description", description);

                fetch(import.meta.env.VITE_API_URL + "/product/add_procecss", {
                    method: "POST",
                    headers: {
                        // 'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    // mode: 'no-cors',
                    body: fd
                })
                    .then((response) => response.json())
                    .then((data) => {
                        withReactContent(Swal).fire({
                            title: "Success!",
                            text: "Insert Successfully",
                            icon: "success"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/');
                            }
                        });
                    })
                    .catch((error) => console.log(error));
            }
        });


    }

    return (
        <>
            <div className='container mx-auto'>
                <div className='border-2 rounded'>
                    <div className='p-3'>
                        <div className='form-group'>
                            <h3 className='text-center font-bold'>Add Product</h3>

                            <div>
                                <label className={"pt-4 block text-sm font-medium leading-6 text-gray-900"}>Product Name</label>
                                <div className={"mt-1"}>
                                    <input
                                        name="product_name"
                                        type="text"
                                        placeholder='Enter Product Name'
                                        required
                                        autoComplete='off'
                                        value={data_submit.product_name || ""}
                                        onChange={handleChange}
                                        className={"px-3 block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={"pt-4 block text-sm font-medium leading-6 text-gray-900"}>Product Photo</label>
                                <div className={"mt-1"}>
                                    <input
                                        name="product_photo"
                                        type="file"
                                        required
                                        autoComplete='off'
                                        value={data_submit.product_photo || ""}
                                        onChange={handleChange}
                                        accept="image/png, image/gif, image/jpeg"
                                        className={"px-3 block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={"pt-4 block text-sm font-medium leading-6 text-gray-900"}>Product Category</label>
                                <div className={"mt-1"}>
                                    <select
                                        name="category"
                                        className={"px-3 block w-full rounded border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                                        value={data_submit.category || ""}
                                        onChange={handleChange}
                                    >
                                        <option value="">- Please Choose - </option>
                                        {
                                            category_list.map((e: any, i: any) => {
                                                return (
                                                    <option value={e.id} key={i}>{e.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className={"pt-4 block text-sm font-medium leading-6 text-gray-900"}>Price</label>
                                <div className={"mt-1"}>
                                    <input
                                        name="price"
                                        type="number"
                                        placeholder='Enter Price'
                                        required
                                        autoComplete='off'
                                        value={data_submit.price || ""}
                                        onChange={handleChange}
                                        className={"px-3 block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={"pt-4 block text-sm font-medium leading-6 text-gray-900"}>Stock</label>
                                <div className={"mt-1"}>
                                    <input
                                        name="stock"
                                        type="number"
                                        placeholder='Enter Stock'
                                        required
                                        autoComplete='off'
                                        value={data_submit.stock || ""}
                                        onChange={handleChange}
                                        className={"px-3 block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={"pt-4 block text-sm font-medium leading-6 text-gray-900"}>Description</label>
                                <div className={"mt-1"}>
                                    <textarea
                                        name="description"
                                        placeholder='Enter Description'
                                        value={data_submit.description || ""}
                                        onChange={handleChange}
                                        className={"px-3 block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                                    >

                                    </textarea>
                                </div>
                            </div>

                            <div className={'pt-5'}>
                                {
                                    data_submit.product_name && data_submit.product_photo && data_submit.category && data_submit.price && data_submit.stock && data_submit.description
                                        ? (
                                            <button
                                                type="submit"
                                                onClick={(e) => {
                                                    submit_form(e)
                                                }}
                                                className={"flex justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                                            >
                                                Submit
                                            </button>
                                        )
                                        : (
                                            <button
                                                type="submit"
                                                disabled
                                                className={"flex justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"}
                                            >
                                                Submit
                                            </button>
                                        )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Loading = () => {
    return (
        <>
            <div>
                Loading
            </div>
        </>
    )
}

function Add_product() {

    const [data_list, set_data_list] = useState({});
    const [loading, set_loading] = useState(true);

    useEffect(() => {

        var _param = {
            // id_user: cookies.get('id'),
        };

        var params = new URLSearchParams(_param);

        fetch(import.meta.env.VITE_API_URL + "/product/add?" + params.toString(), {
            method: "GET",
            headers: {

            }
        })
            .then((response) => response.json())
            .then((data) => {
                set_data_list(data);
                set_loading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Header />

            {
                loading
                    ? (
                        <Loading />
                    )
                    : (
                        <Form
                            category_list={data_list.category_list}
                        />
                    )
            }

        </>
    )
}

export default Add_product