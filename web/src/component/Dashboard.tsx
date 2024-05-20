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
    </>
  )
}

const SubHeader = () => {
  return (
    <>
      <div className="flex justify-between px-8">
        <div>
          <label className="text-xl text-white">E-Commerce</label>
        </div>

        <div>
          <label className="text-md text-white">Kategori</label>
        </div>

        <div className="w-2/3">
          <div className="flex gap-x-6">
            <div>Case Iphone</div>
            <div>RTX 3060</div>
            <div>RTX 3060</div>
            <div>RTX 3060</div>
          </div>
        </div>

        <div>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>

        <div>
          <div className="flex gap-x-8">
            <button className="bg-blue-500 py-1 px-4 text-white font-bold rounded">Masuk</button>
            <button className="bg-blue-500 py-1 px-4 text-white font-bold rounded">Daftar</button>
          </div>
        </div>

      </div>
    </>
  )
}

const CarouselPromo = () => {
  return (
    <>
      <div className="py-5">
        <div className="align-items-center w-screen">

          <div className="relative" data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

              <div className="duration-700 ease-in-out" data-carousel-item="active">
                <img src={logo} className="w-full object-contain" alt="..." />
              </div>

              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
            </div>

            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>

            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

const Category = () => {
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

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="flex align-middle">
                <img src='/laptop.webp' alt=".." />

                <div className="ps-5 content-center">
                  <h2 className="font-bold text-xl">Laptop</h2>
                  <h3>822rb Produk</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="flex align-middle">
                <img src='/handphone.webp' alt=".." />

                <div className="ps-5 content-center">
                  <h2 className="font-bold text-xl">Handphone</h2>
                  <h3>1jt Produk</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="flex align-middle">
                <img src='/ssd.webp' alt=".." />

                <div className="ps-5 content-center">
                  <h2 className="font-bold text-xl">SSD SATA</h2>
                  <h3>1jt Produk</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="flex align-middle">
                <img src='/vga.webp' alt=".." />

                <div className="ps-5 content-center">
                  <h2 className="font-bold text-xl">VGA</h2>
                  <h3>1jt Produk</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="flex align-middle">
                <img src='/mouse.webp' alt=".." />

                <div className="ps-5 content-center">
                  <h2 className="font-bold text-xl">Mouse</h2>
                  <h3>1jt Produk</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="flex align-middle">
                <img src='/router.webp' alt=".." />

                <div className="ps-5 content-center">
                  <h2 className="font-bold text-xl">Router</h2>
                  <h3>1jt Produk</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="flex align-middle">
                <img src='/sd_card.webp' alt=".." />

                <div className="ps-5 content-center">
                  <h2 className="font-bold text-xl">SD Card</h2>
                  <h3>1jt Produk</h3>
                </div>
              </div>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="flex align-middle">
                <img src='/card_reader.webp' alt=".." />

                <div className="ps-5 content-center">
                  <h2 className="font-bold text-xl">Card Reader</h2>
                  <h3>1jt Produk</h3>
                </div>
              </div>
            </a>
          </div>

        </div>

        <div className="pt-5">
          <hr className="border-2" />
        </div>
      </div>
    </>
  )
}

const Product = () => {
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

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <Link to="detail_product" reloadDocument>
              <div className="bg-auto">
                <img src="items/mouse_1.jpg" alt="" />
              </div>
              <h3 className="">[FS] Logitech B175 Wireless Mouse</h3>
              <h3 className="font-bold">Rp 105.000</h3>
              <h3>Jakarta Timur</h3>
              <h3>4.9/5</h3>
            </Link>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="bg-auto">
                <img src="items/mouse_2.jpg" alt="" />
              </div>
              <h3 className="">[FS] Logitech B175 Wireless Mouse</h3>
              <h3 className="font-bold">Rp 105.000</h3>
              <h3>Jakarta Timur</h3>
              <h3>4.9/5</h3>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="bg-auto">
                <img src="items/mouse_3.jpg" alt="" />
              </div>
              <h3 className="">[FS] Logitech B175 Wireless Mouse</h3>
              <h3 className="font-bold">Rp 105.000</h3>
              <h3>Jakarta Timur</h3>
              <h3>4.9/5</h3>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="bg-auto">
                <img src="items/hp_1.jpg" alt="" />
              </div>
              <h3 className="">[FS] Logitech B175 Wireless Mouse</h3>
              <h3 className="font-bold">Rp 105.000</h3>
              <h3>Jakarta Timur</h3>
              <h3>4.9/5</h3>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="bg-auto">
                <img src="items/hp_2.jpg" alt="" />
              </div>
              <h3 className="">[FS] Logitech B175 Wireless Mouse</h3>
              <h3 className="font-bold">Rp 105.000</h3>
              <h3>Jakarta Timur</h3>
              <h3>4.9/5</h3>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="bg-auto">
                <img src="items/hp_3.jpg" alt="" />
              </div>
              <h3 className="">[FS] Logitech B175 Wireless Mouse</h3>
              <h3 className="font-bold">Rp 105.000</h3>
              <h3>Jakarta Timur</h3>
              <h3>4.9/5</h3>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="bg-auto">
                <img src="items/hp_2.jpg" alt="" />
              </div>
              <h3 className="">[FS] Logitech B175 Wireless Mouse</h3>
              <h3 className="font-bold">Rp 105.000</h3>
              <h3>Jakarta Timur</h3>
              <h3>4.9/5</h3>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="bg-auto">
                <img src="items/hp_2.jpg" alt="" />
              </div>
              <h3 className="">[FS] Logitech B175 Wireless Mouse</h3>
              <h3 className="font-bold">Rp 105.000</h3>
              <h3>Jakarta Timur</h3>
              <h3>4.9/5</h3>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="bg-auto">
                <img src="items/hp_2.jpg" alt="" />
              </div>
              <h3 className="">[FS] Logitech B175 Wireless Mouse</h3>
              <h3 className="font-bold">Rp 105.000</h3>
              <h3>Jakarta Timur</h3>
              <h3>4.9/5</h3>
            </a>
          </div>

          <div className="border-2 p-3 rounded w-full hover:bg-slate-200">
            <a href="">
              <div className="bg-auto">
                <img src="items/hp_2.jpg" alt="" />
              </div>
              <h3 className="">[FS] Logitech B175 Wireless Mouse</h3>
              <h3 className="font-bold">Rp 105.000</h3>
              <h3>Jakarta Timur</h3>
              <h3>4.9/5</h3>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

function Dashboard() {
  return (
    <>
      <Header />
      {/* <SubHeader /> */}
      <hr />
      {/* <CarouselPromo /> */}
      <Category />
      <Product />
    </>
  )
}

export default Dashboard
