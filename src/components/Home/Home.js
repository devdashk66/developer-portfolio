import React from 'react';
import './Home.css';
import HomeData from './HomeData';
import Scroll from './Scroll';
import Social from './Social';

const Home = () => {
    return (
        <section id='home' className='home section'>
            <div className='home-container container grid'>
                <div className='home-content grid'>
                    <Social></Social>

                    <div className='home-img'>

                    </div>

                    <HomeData></HomeData>
                </div>
                <Scroll></Scroll>
            </div>
        </section>
    );
};

export default Home;