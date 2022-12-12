import React from 'react';
import Backend from './Backend';
import Frontend from './Frontend';
import './Skills.css';

const Skills = () => {
    return (
        <section id='skills' className='skills section'>
            <h2 className='section-title'>
                Skills
            </h2>
            <span className='section-subtitle'>My technical level</span>

            <div className='skills-container container grid'>
                <Frontend></Frontend>
                <Backend></Backend>
            </div>
        </section>
    );
};

export default Skills;