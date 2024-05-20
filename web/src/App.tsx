import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import Detail_Product from "./component/Detail_Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail_product" element={<Detail_Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
