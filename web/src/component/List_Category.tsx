import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import logo from '/vite.svg'; // with import
import Header from "./_partial/Header";

function Category(props) {
    var data = props.data;

    return (
        <>
            <div className="container mx-auto">
                <div className="flex gap-x-4 grid gap-y-4 grid-cols-4">

                    {
                        data.map((e: any, i: any) => {
                            return (
                                <div key={i} className="border-2 p-3 rounded w-full hover:bg-slate-200">
                                    <Link to={"/list_product?category=" + e.id} reloadDocument>
                                        <div className="flex align-middle">
                                            <img src={e.photo} alt=".." />

                                            <div className="ps-5 content-center">
                                                <h2 className="font-bold text-xl">{e.name}</h2>
                                                <h3>822rb Produk</h3>
                                            </div>
                                        </div>
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

function List_Category(props: any) {

    const [data_list, set_data_list] = useState({
        category_list: [],
    });

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + "/category_list", {
            method: "GET",
            headers: {

            },
        })
            .then((response) => response.json())
            .then((data) => {
                set_data_list({
                    category_list: data.category_list,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Header {...props} />
            <Category data={data_list.category_list} {...props} />
        </>
    )
}

export default List_Category