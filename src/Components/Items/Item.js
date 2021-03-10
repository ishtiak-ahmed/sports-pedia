import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Item = ({ data }) => {
    const { idLeague, strLeague, strSport } = data
    return (
        <div className='item'>
            <h3>{strLeague}</h3>
            <h4>Sports Type: {strSport}</h4>
            <Link to={`/league/${idLeague}`}>
                <button className='explore-btn'>
                    Explore  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </Link>
        </div>
    );
};

export default Item;