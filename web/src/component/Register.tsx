import React, { useState } from 'react';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { Link, useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const [error, setError] = useState({});

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();

        var username = inputs.username;
        var name = inputs.name;
        var password = inputs.password;

        fetch(import.meta.env.VITE_API_URL + "/register", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username: username,
                name: name,
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
                    withReactContent(Swal).fire({
                        title: "Success!",
                        text: "Register Successfully",
                        icon: "success"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/login');
                        }
                    });
                }
            })
            .catch((error) => console.log(error));
    }

    const checkUsername = (event: any) => {

        const username = inputs.username;

        fetch(import.meta.env.VITE_API_URL + "/user/check_username", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username: username,
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
                        Register your account
                    </h2>
                </div>

                <div className={"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"}>
                    <form className={"space-y-6"} action="#" method="POST">
                        <div>
                            <label className={"block text-sm font-medium leading-6 text-gray-900"}>Username</label>
                            <div className={"mt-2"}>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder='Enter Username'
                                    required
                                    autoComplete='off'
                                    value={inputs.username || ""}
                                    onBlur={checkUsername}
                                    onChange={handleChange}
                                    className={"px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                                />

                                <small className='text-xs text-red-700'>{error.text}</small>
                            </div>
                        </div>

                        <div>
                            <label className={"block text-sm font-medium leading-6 text-gray-900"}>Name</label>
                            <div className={"mt-2"}>
                                <input
                                    name="name"
                                    type="text"
                                    autoComplete='off'
                                    placeholder='Enter Name'
                                    value={inputs.name || ""}
                                    onChange={handleChange}
                                    required
                                    className={"px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                                />
                            </div>
                        </div>

                        <div>
                            <div className={"flex items-center justify-between"}>
                                <label className={"block text-sm font-medium leading-6 text-gray-900"}>Password</label>
                            </div>
                            <div className={"mt-2"}>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete='off'
                                    placeholder='Enter Password'
                                    required
                                    value={inputs.password || ""}
                                    onChange={handleChange}
                                    className={"px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"}
                                />
                            </div>
                        </div>

                        <div>
                            {
                                inputs.username && inputs.password && inputs.name && !error.status
                                    ? (
                                        <button
                                            type="submit"
                                            onClick={handleSubmit}
                                            className={"flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                                        >
                                            Submit
                                        </button>
                                    )
                                    : (
                                        <button disabled className={"flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"}>Submit</button>
                                    )
                            }

                            <div className='pt-2'>
                                <Link to="/" reloadDocument>
                                    <button type="button" className={"flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}>Back To Dashboard</button>
                                </Link>
                            </div>
                        </div>
                    </form>

                    <p className={"mt-10 text-center text-sm text-gray-500"}>
                        Already Have Account?&nbsp;
                        <a href="#" className={"font-semibold leading-6 text-green-600 hover:text-green-500"}>Login Here</a>
                    </p>
                </div>


            </div>
        </>
    )
}

export default Register