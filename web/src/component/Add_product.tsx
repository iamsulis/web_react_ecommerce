import React from 'react'
import Header from './_partial/Header'

const Form = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='border-2 rounded'>
                    <div className='p-3'>
                        <div className='form-group'>
                            <h3 className='text-center font-bold'>Add Product</h3>

                            <div>
                                <label className={"pt-4 block text-sm font-medium leading-6 text-gray-900"}>Store Name</label>
                                <div className={"mt-1"}>
                                    <input
                                        name="store_name"
                                        type="text"
                                        disabled
                                        value={"Sulis Store"}
                                        className={"px-3 block w-full bg-gray-200 rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={"pt-4 block text-sm font-medium leading-6 text-gray-900"}>Product Name</label>
                                <div className={"mt-1"}>
                                    <input
                                        name="product_name"
                                        type="text"
                                        placeholder='Enter Product Name'
                                        required
                                        autoComplete='off'
                                        className={"px-3 block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={"pt-4 block text-sm font-medium leading-6 text-gray-900"}>Product Name</label>
                                <div className={"mt-1"}>
                                    <input
                                        name="product_photo"
                                        type="file"
                                        required
                                        autoComplete='off'
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
                                    >
                                        <option value="">- Please Choose - </option>
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
                                        className={"px-3 block w-full rounded border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-green-600 sm:text-sm sm:leading-6"}
                                    >

                                    </textarea>
                                </div>
                            </div>

                            <div className={'pt-5'}>
                                <button
                                    type="submit"
                                    className={"flex justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Add_product() {
    return (
        <>
            <Header />
            <Form />
        </>
    )
}

export default Add_product