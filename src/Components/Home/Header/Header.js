import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeadetrMain from '../Header Main/HeadetrMain';
import NavBar from '../../Shared/NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <NavBar></NavBar>
            <HeadetrMain></HeadetrMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;