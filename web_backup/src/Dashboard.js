import React, { useEffect } from "react"

import './App.scss';

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Category from "./components/dashboard/Category";
import DataBelanjaan from "./components/dashboard/DataBelanjaan";

const Dashboard = () => {

    useEffect(() => {
        fetchUserData()
    }, [])

    // const [data_list, set_data_list] = useState(0);

    const fetchUserData = () => {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');

        // var url = "https://jsonplaceholder.typicode.com/users";
        var url = "http://localhost/web_react_ecommerce/api/public/dashboard/list";

        fetch(url, {
            method: 'GET',
            headers: headers,
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                // setUsers(data)

                // var data = JSON.parse(data);

                // set_data_list(data.item_list);
            })
    }

    return (
        <>
            <Header />

            <div className="">
                <div className="content-width py-4">
                    <Carousel />
                    <Category />
                    <DataBelanjaan />
                </div>
            </div>
        </>
    );
};

export default Dashboard;