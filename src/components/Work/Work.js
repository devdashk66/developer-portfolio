import React from 'react';
import './Work.css';
import Works from './Works';

const Work = () => {
    return (
        <section id='portfolio' className='work section'>
            <h2 className='section-title'>
                Portfolio
            </h2>
            <span className='section-subtitle'>My Recent Work</span>


            {/* https://preview.themeforest.net/item/luique-one-page-resume-wordpress-theme/full_screen_preview/41227879?_ga=2.261783565.1061629833.1670450356-195235480.1669739008 */}


            <Works></Works>
        </section>
    );
};

export default Work;