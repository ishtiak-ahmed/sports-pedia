import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Header>
                <h1>Sports Pedia</h1>
                <h3>Find Information of All The Sports League Of The World.</h3>
            </Header>
            <Items></Items>
            <Footer></Footer>
        </div>
    );
};

export default Home;