import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ data }) => {
    const { idLeague, strLeague, strSport } = data
    return (
        <div>
            <h3>League Name: {strLeague}</h3>
            <h4>Sports Type: {strSport}</h4>
            <Link to={`/league/${idLeague}`}>
                <button>Explore</button>
            </Link>
        </div>
    );
};

export default Item;