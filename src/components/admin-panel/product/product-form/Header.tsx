import React from 'react';
import './styles.css';

const Header = () => {


    return (
        <div className="header-container">
            <h2 className="header-title">Add a new Product</h2>
            <div className="header-buttons">
                <button className="header-button discard-button">Discard</button>
                <button className="header-button draft-button">Save draft</button>
                <button className="header-button publish-button">Publish product</button>
            </div>
        </div>
    );
};

export default Header;

