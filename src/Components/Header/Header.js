import React from 'react';

const Header = (props) => {
    console.log(props.src)
    return (
        <header >
            <div className="header">
                {props.children}
            </div>
        </header>
    );
};

export default Header;