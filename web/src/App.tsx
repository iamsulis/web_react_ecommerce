import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import Detail_Product from "./component/Detail_Product";
import Login from "./component/Login";
import Transaction from "./component/Transaction";
import Search_Product from "./component/Search_Product";
import List_Category from "./component/List_Category";
import List_Product from "./component/List_Product";
import Wishlist from "./component/Wishlist";
import Register from "./component/Register";
import Add_product from "./component/Add_product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail_product" element={<Detail_Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/search_product" element={<Search_Product />} />
        <Route path="/list_category" element={<List_Category />} />
        <Route path="/list_product" element={<List_Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/add_product" element={<Add_product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
