import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {
    const [league, setLeague] = useState([])
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues))
    }, [])
    const currentData = league.slice(0, 16)
    return (
        <main>
            {
                currentData.map(lg => <Item key={lg.idLeague} data={lg}></Item>)
            }
        </main>
    );
};

export default Items;