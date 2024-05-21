import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import logo from '/vite.svg'; // with import


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
          <Link to="/" reloadDocument>
            <h3 className="text-xl font-bold">E-Commerce</h3>
          </Link>
        </div>

        <div>
          <label className="text-md">Kategori</label>
        </div>

        <div className="w-2/3">
          <input className="border rounded pb-1 px-3 w-full" type="text" placeholder="Cari Nama Barang" />
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
    </>
  )
}

const Category = (props: any) => {

  var category_list = props.data;

  return (
    <>
      <div className="container mx-auto">
        <div className="pb-2 pt-3">
          <div className="">
            <div className="flex">
              <h2 className="font-bold text-xl content-center pe-4">Kategori</h2>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Lihat Semua
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 grid gap-y-4 grid-cols-4">

          {
            category_list.map((e: any, i: any) => {
              return (
                <div key={i} className="border-2 p-3 rounded w-full hover:bg-slate-200">
                  <Link to="list_product" reloadDocument>
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

        <div className="pt-5">
          <hr className="border-2" />
        </div>
      </div>
    </>
  )
}

const Product = (props: any) => {

  let product_list = props.data;

  return (
    <>
      <div className="container mx-auto">
        <div className="pb-2 pt-3">
          <div className="flex gap-x-2 grid gap-y-4 grid-cols-4">
            <div className="border-2 p-3 rounded w-full bg-green-600">
              <h3 className="font-bold text-2xl text-white">Untuk kamu</h3>
            </div>

            <div className="border-2 p-3 rounded w-full bg-orange-600">
              <h3 className="font-bold text-2xl text-white">Barang Lokal</h3>
            </div>

            <div className="border-2 p-3 rounded w-full bg-blue-600">
              <h3 className="font-bold text-2xl text-white">Barang Luar Negri</h3>
            </div>

            <div className="border-2 p-3 rounded w-full bg-yellow-600">
              <h3 className="font-bold text-2xl text-white">Barang Luar Negri</h3>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 grid gap-y-4 grid-cols-5">

          {
            product_list.map((e: any, i: any) => {
              return (
                <div key={i} className="border-2 p-3 rounded w-full hover:bg-slate-200">
                  <Link to={"detail_product?id=" + e.id} reloadDocument>
                    <div className="bg-auto">
                      <img src={e.photo} alt="" />
                    </div>
                    <h3 className="">{e.name}</h3>
                    <h3 className="font-bold">Rp {e.price}</h3>
                    <h3>Jakarta Timur</h3>
                    <h3>4.9/5</h3>
                  </Link>
                </div>
              )
            })
          }

        </div>

        <div className="">
          <div className={'py-4'}>
            <button>ABC</button>
          </div>
        </div>

      </div>
    </>
  )
}

function Dashboard() {

  const [data_list, set_data_list] = useState({
    category_list: [],
    product_list: [],
  });

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/dashboard", {
      method: "GET",
      headers: {

      },
    })
      .then((response) => response.json())
      .then((data) => {

        set_data_list({
          category_list: data.category_list,
          product_list: data.product_list,
        });

        // console.log(import.meta.env.VITE_API_KEY);
        console.log(data_list.category_list);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <hr />
      <Category data={data_list.category_list} />
      <Product data={data_list.product_list} />
    </>
  )
}

export default Dashboard
