/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const dataShirt = useLoaderData();
    return (
        <div>
            <h1>this is home page </h1>
            <h1>this is data {dataShirt.length} </h1>
        </div>
    );
};

export default Home;