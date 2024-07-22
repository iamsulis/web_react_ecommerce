import React, { useState } from 'react';
import Cookies from 'universal-cookie';

import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [inputs, setInputs] = useState({});
    const [error, setError] = useState({});
    const [status_submit, setStatusSubmit] = useState(0);

    const navigate = useNavigate();
    const cookies = new Cookies();

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        var username = inputs.username;
        var password = inputs.password;

        fetch(import.meta.env.VITE_API_URL + "/login_auth", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            // mode: 'no-cors',
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then((response) => response.json())
            .then((data) => {
                setError({})
                if (data.status != 200) {
                    setError({
                        status: data.status,
                        text: data.text
                    })
                } else {

                    cookies.set('id', data.id, { path: '/', sameSite: 'none', secure: true });
                    cookies.set('name', data.name, { path: '/', sameSite: 'none', secure: true });
                    cookies.set('username', data.username, { path: '/', sameSite: 'none', secure: true });
                    cookies.set('photo_user', data.photo_user, { path: '/', sameSite: 'none', secure: true });
                    cookies.set('total_wishlist', data.total_wishlist, { path: '/', sameSite: 'none', secure: true });

                    navigate('/');
                }
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            <div className={"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"}>
                <div className={"sm:mx-auto sm:w-full sm:max-w-sm"}>

                    <img className={"mx-auto h-10 w-auto"} src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className={"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"}>
                        Sign in to your account
                    </h2>

                    {
                        error.status
                            ? (
                                <div className='pt-4'>
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
                                        <span className="block sm:inline">Username or Password Incorrect</span>
                                    </div>
                                </div>
                            )
                            : (<></>)
                    }

                </div>

                <div className={"mt-4 sm:mx-auto sm:w-full sm:max-w-sm"}>
                    <div>
                        <label className={"block text-sm font-medium leading-6 text-gray-900"}>Username</label>
                        <div className={"mt-2"}>
                            <input
                                name="username"
                                type="text"
                                placeholder='Enter Username'
                                value={inputs.username || ""}
                                onChange={handleChange}
                                required
                                autoComplete='off'
                                className={"px-3 block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                            />
                        </div>
                    </div>

                    <div className='pt-2'>
                        <div className={"flex items-center justify-between"}>
                            <label className={"block text-sm font-medium leading-6 text-gray-900"}>Password</label>
                        </div>
                        <div className={"mt-2"}>
                            <input
                                name="password"
                                type="password"
                                placeholder='Enter Password'
                                value={inputs.password || ""}
                                onChange={handleChange}
                                required
                                autoComplete='off'
                                className={"px-3 block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"}
                            />
                        </div>
                    </div>

                    <div className='pt-3'>
                        {
                            inputs.username && inputs.password
                                ? (
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className={"flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                                    >
                                        Sign in
                                    </button>
                                )
                                : (
                                    <button disabled className={"flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"}>Sign in</button>
                                )
                        }


                        <div className='pt-2'>
                            <Link to="/" reloadDocument>
                                <button type="button" className={"flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>Back To Dashboard</button>
                            </Link>
                        </div>
                    </div>

                    <p className={"mt-10 text-center text-sm text-gray-500"}>
                        Not a member?&nbsp;
                        <Link to="/register" reloadDocument>
                            <button
                                type="button"
                                className={"font-semibold leading-6 text-green-600 hover:text-green-500"}
                            >
                                Register Here
                            </button>
                        </Link>
                    </p>
                </div>


            </div>
        </>
    )
}

export default Login