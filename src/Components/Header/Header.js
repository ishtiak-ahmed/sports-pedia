import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="header">
                {props.children}
            </div>
        </header>
    );
};

export default Header;