import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMarsStroke } from '@fortawesome/free-solid-svg-icons'
import male from '../../img/male.png'
import Facebook from '../../icon/Facebook.png'
import Twitter from '../../icon/Twitter.png'
import Youtube from '../../icon/YouTube.png'
import Founded from '../../icon/founded.png'


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
            <Header src={league.strBanner}>
                <img src={league.strLogo} alt="" />
            </Header>
            <section className='details'>
                <div className="card">
                    <div className="info">
                        <h2>{league.strLeague} </h2>
                        <h4>
                            <span><img height='20px' src={Founded} alt="" /></span>
                            Founded : {league.intFormedYear}</h4>
                        <h4><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Country: {league.strCountry}</h4>
                        <h4><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sports Type: {league.strSport}</h4>
                        <h4><FontAwesomeIcon icon={faMarsStroke}></FontAwesomeIcon> Gender: {league.strGender}</h4>
                    </div>
                    <div className="league-image">
                        <img src={male} alt="" />
                    </div>
                </div>
                <div className="description">
                    <p>{league.strDescriptionEN}</p>
                </div>
                <div className="social-link">
                    <span className='social'>
                        <a href={`https://${league.strFacebook}`} > <img src={Facebook} alt="" /></a>
                    </span>
                    <span className='social'>
                        <a href={`https://${league.strTwitter}`} ><img src={Twitter} alt="" /></a>
                    </span>
                    <span className='social'>
                        <a href={`https://${league.strYoutube}`} > <img src={Youtube} alt="" /></a>
                        <a href='https://www.youtube.com/channel/UCSZbXT5TLLW_i-5W8FZpFsg' > <img src={Youtube} alt="" /></a>
                    </span>
                </div>
            </section>

            <Footer></Footer>
        </div >
    );
};

export default Details;