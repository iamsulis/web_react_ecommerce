import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import logo from '/vite.svg'; // with import
import Header from "./_partial/Header";

function Product(props: any) {

    let product_list = props.data;

    return (
        <>
            <div className="container mx-auto">
                <div className="flex gap-x-4 grid gap-y-4 grid-cols-5">

                    {
                        product_list.map((e: any, i: any) => {
                            return (
                                <div key={i} className="border-2 p-3 rounded w-full hover:bg-slate-200">
                                    <Link to={"/detail_product?id=" + e.id} reloadDocument>
                                        <div className="bg-auto object-none object-center">
                                            <img src={e.photo} alt="" className="w-fit" width={'50%'} />
                                        </div>
                                        <h3 className="">{e.name}</h3>
                                        <h3 className="font-bold">Rp {e.price}</h3>
                                        <h3>Jakarta Timur</h3>
                                        <h3>
                                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" /> 4.9/5 | 30 Terjual
                                        </h3>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

function NoData(){
    return(
        <>
            <div className="container mx-auto">
                <div className="border border-2">
                    <div className="p-4 text-center font-bold">
                        - No Data Found -
                    </div>
                </div>
            </div>
        </>
    )
}

function Search_Product(props: any) {

    const [data_list, set_data_list] = useState({
        product_list: [],
    });

    const queryParameters = new URLSearchParams(window.location.search)
    const search = queryParameters.get("search");

    var params = {
        search: search,
    };

    params = new URLSearchParams(params);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + "/item_list?" + params.toString(), {
            method: "GET",
            headers: {

            },
        })
            .then((response) => response.json())
            .then((data) => {

                set_data_list({
                    product_list: data.item_list,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Header {...props} />

            {
                data_list.product_list.length > 0
                    ? (
                        <>
                            <Product data={data_list.product_list} {...props} />
                        </>
                    )
                    : (
                        <>
                            <NoData />
                        </>
                    )
            }
        </>
    )
}

export default Search_Product