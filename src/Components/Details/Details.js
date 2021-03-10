import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Details = () => {
    const id = useParams()
    const [league, setLeague] = useState({})
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id.id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [id])
    return (
        <div>
            <Header>
                <h1>{league.strLeague}</h1>
            </Header>
            <h2>Name : {league.strLeague} </h2>
            <p>Sport Type: {league.strSport}</p>
            <p>{league.strDescriptionEN}</p>
            <Footer></Footer>
        </div>
    );
};

export default Details;