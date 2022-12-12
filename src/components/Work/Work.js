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

            <Works></Works>
        </section>
    );
};

export default Work;