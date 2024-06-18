import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Cookies from 'universal-cookie';

import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const queryParameters = new URLSearchParams(window.location.search)
    const search = queryParameters.get("search");

    useEffect(() => {
        if (search) {
            setInputs({
                search: search
            })
        }
    }, []);

    const cookies = new Cookies();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    function dropdownAction() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="flex justify-between px-8 py-3">
                <Link to="/" reloadDocument>
                    <div>
                        <h1 className="text-xl font-bold">E-Commerce</h1>
                    </div>
                </Link>

                <div className="w-2/3">
                    {/* <input className="border rounded py-1 px-3 w-full" type="text" placeholder="Username" /> */}

                    <form action={"/search_product?search=" + search}>
                        <div className="relative flex h-10 w-full">
                            <button
                                className="!absolute right-1 top-1 z-10 select-none rounded bg-green-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold text-white transition-all"
                                type="submit"
                                data-ripple-light="true"
                            >
                                Search
                            </button>
                            <input
                                type="text"
                                name="search"
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-green-600"
                                placeholder="Search"
                                autoComplete='off'
                                required
                                value={inputs.search || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>

                {
                    cookies.get('id')
                        ? (
                            <>
                                <Link to={"/wishlist"} reloadDocument>
                                    <div className="">
                                        <strong className="relative inline-flex items-center rounded px-2.5 py-1.5 text-xs font-medium">
                                            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-green-600 flex justify-center items-center items text-white">
                                                <span>{cookies.get('total_wishlist')}</span>
                                            </span>
                                            <FontAwesomeIcon icon={faCartShopping} size="2x" />
                                        </strong>
                                    </div>
                                </Link>

                            </>
                        )
                        : (
                            <>
                            </>
                        )
                }

                {
                    cookies.get('id')
                        ? (
                            <>
                                <div>
                                    <div className="flex gap-x-8">
                                        <div>
                                            <button
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                type="button"
                                                onClick={dropdownAction}
                                            >
                                                Hello, {cookies.get('name')}

                                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                </svg>
                                            </button>

                                            {
                                                isOpen
                                                    ? (
                                                        <div className="absolute z-10 mt-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                                                            <div className="py-1" role="none">
                                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem" id="menu-item-0">Account settings</a>

                                                                <Link to="/transaction" reloadDocument>
                                                                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem" id="menu-item-0">
                                                                        Riwayat Transaksi
                                                                    </div>
                                                                </Link>

                                                                <button
                                                                    type="button"
                                                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-200"
                                                                    role="menuitem"
                                                                    id="menu-item-3"
                                                                    onClick={() => {
                                                                        cookies.remove('id', { path: '/', sameSite: 'none', secure: true });
                                                                        cookies.remove('name', { path: '/', sameSite: 'none', secure: true });
                                                                        cookies.remove('username', { path: '/', sameSite: 'none', secure: true });
                                                                        cookies.remove('photo_user', { path: '/', sameSite: 'none', secure: true });

                                                                        navigate('/');
                                                                    }}
                                                                >Sign out</button>
                                                            </div>
                                                        </div>
                                                    )
                                                    : (
                                                        <></>
                                                    )
                                            }

                                        </div>

                                    </div>
                                </div>

                                <div className=''>
                                    <button
                                        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        type="button"
                                    >
                                        Add Product
                                    </button>
                                </div>
                            </>


                        )
                        : (
                            <div>
                                <div className="flex gap-x-8">
                                    <Link to="/login" reloadDocument>
                                        <button className="bg-green-600 py-1 px-4 text-white font-bold rounded">Masuk</button>
                                    </Link>
                                    <button className="bg-green-600 py-1 px-4 text-white font-bold rounded">Daftar</button>
                                </div>
                            </div>
                        )
                }

            </nav>

            <div className='pb-6'>
                <hr />
            </div>
        </>
    )
}

export default Header