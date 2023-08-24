/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <footer>
                <h3>this is footer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga magnam fugiat accusamus pariatur aliquam eveniet, corporis ullam rerum eligendi et quae nulla hic odit dolorem quam dolores velit tenetur. Natus expedita blanditiis dolorum, unde, asperiores cum, modi quia debitis voluptatum labore similique consequuntur velit atque autem ipsum nemo corporis.</p>
            </footer>
        </div>
    );
};

export default Main;