import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import Detail_Product from "./component/Detail_Product";
import Login from "./component/Login";
import Transaction from "./component/Transaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail_product" element={<Detail_Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
