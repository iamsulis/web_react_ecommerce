import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <>
            <nav className='bg-green-600 flex justify-between px-8 py-1'>
                <div className="text-white flex items-center">
                    <FontAwesomeIcon icon={faMobile} />
                    <label className="text-sm ps-3">Download E-Commerce Apps</label>
                </div>

                <div className="flex gap-x-8 text-white">
                    <div>
                        Tentang E-Commerce
                    </div>

                    <div>
                        Promo
                    </div>

                    <div>
                        E-Commerce Care
                    </div>
                </div>
            </nav>

            <nav className="flex justify-between px-8 py-3">
                <div>
                    <label className="text-xl font-bold">E-Commerce</label>
                </div>

                <div>
                    <label className="text-md">Kategori</label>
                </div>

                <div className="w-2/3">
                    <input className="border rounded pb-1 px-3 w-full" type="text" placeholder="Username" />
                </div>

                <div>
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>

                <div>
                    <div className="flex gap-x-8">
                        <button className="bg-green-600 py-1 px-4 text-white font-bold rounded">Masuk</button>
                        <button className="bg-green-600 py-1 px-4 text-white font-bold rounded">Daftar</button>
                    </div>
                </div>
            </nav>

            <div className='pb-6'>
                <hr />
            </div>
        </>
    )
}

function Top() {
    return (
        <>
            <Header />
        </>
    )
}

export default Top