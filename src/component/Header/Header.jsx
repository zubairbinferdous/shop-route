/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <ul>
                <li><Link to={'/'} >home</Link></li>
                <li><Link to={'/about'} >about</Link></li>
                <li><Link to={'/order'} >order</Link></li>
           </ul>
        </div>
    );
};

export default Header;