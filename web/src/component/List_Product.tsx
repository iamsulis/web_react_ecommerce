import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import logo from '/vite.svg'; // with import
import Header from "./_partial/Header";

function List_Product(props:any) {
    return (
        <>
            <Header {...props} />
            <div>List_Product</div>
        </>
    )
}

export default List_Product