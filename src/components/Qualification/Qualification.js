import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {

    const [openQualification, setOpenQualification] = useState(1);

    const handelQualification = open => {
        setOpenQualification(open)
    }

    return (

        <section className='qualification section'>
            <h2 className='section-title'>
                Qualification
            </h2>
            <span className='section-subtitle'>My personal journey</span>

            <div className='qualification-container container'>
                <div className='qualification-tabs'>
                    <div
                        className={openQualification === 1
                            ?
                            'qualification-button qualification-active button-flex'
                            :
                            'qualification-button button-flex'}
                        onClick={() => handelQualification(1)}
                    >
                        <i class="uil uil-graduation-cap qualification-icon"></i> Education
                    </div>

                    <div className={openQualification === 2
                        ?
                        'qualification-button qualification-active button-flex'
                        :
                        'qualification-button button-flex'}
                        onClick={() => handelQualification(2)}
                    >
                        <i class="uil uil-briefcase-alt qualification-icon"></i> Experience
                    </div>
                </div>

                <div className='qualification-section'>
                    <div className={openQualification === 1
                        ?
                        'qualification-content qualification-content-active'
                        :
                        'qualification-content'}>
                        <div className='qualification-data'>

                            <div>
                                <h3 className='qualification-title'>
                                    Web Developer
                                </h3>
                                <span className='qualification-subtitle'>
                                    Feni Polytechnic Institute-FPI
                                </span>
                                <div className='qualification-calender'>
                                    <i class="uil uil-calendar-alt"></i> 2016 - 2021
                                </div>
                            </div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>

                        </div>

                        <div className='qualification-data'>

                            <div></div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>

                            <div>
                                <h3 className='qualification-title'>
                                    React Developer
                                </h3>
                                <span className='qualification-subtitle'>
                                    Feni Polytechnic Institute-FPI
                                </span>
                                <div className='qualification-calender'>
                                    <i class="uil uil-calendar-alt"></i> 2016 - 2021
                                </div>
                            </div>

                        </div>


                        <div className='qualification-data'>

                            <div>
                                <h3 className='qualification-title'>
                                    MERN Developer
                                </h3>
                                <span className='qualification-subtitle'>
                                    Feni Polytechnic Institute-FPI
                                </span>
                                <div className='qualification-calender'>
                                    <i class="uil uil-calendar-alt"></i> 2016 - 2021
                                </div>
                            </div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>

                        </div>

                        <div className='qualification-data'>

                            <div></div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>

                            <div>
                                <h3 className='qualification-title'>
                                    Full-Stack Developer
                                </h3>
                                <span className='qualification-subtitle'>
                                    Feni Polytechnic Institute-FPI
                                </span>
                                <div className='qualification-calender'>
                                    <i class="uil uil-calendar-alt"></i> 2016 - 2021
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className={openQualification === 2
                        ?
                        'qualification-content qualification-content-active'
                        :
                        'qualification-content'}>
                        <div className='qualification-data'>

                            <div>
                                <h3 className='qualification-title'>
                                    Node Developer
                                </h3>
                                <span className='qualification-subtitle'>
                                    Programming - Hero
                                </span>
                                <div className='qualification-calender'>
                                    <i class="uil uil-calendar-alt"></i> 2016 - 2021
                                </div>
                            </div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>

                        </div>

                        <div className='qualification-data'>

                            <div></div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>

                            <div>
                                <h3 className='qualification-title'>
                                    Mongo Developer
                                </h3>
                                <span className='qualification-subtitle'>
                                    Programming - Hero
                                </span>
                                <div className='qualification-calender'>
                                    <i class="uil uil-calendar-alt"></i> 2016 - 2021
                                </div>
                            </div>

                        </div>


                        <div className='qualification-data'>

                            <div>
                                <h3 className='qualification-title'>
                                    Firebase Developer
                                </h3>
                                <span className='qualification-subtitle'>
                                    Programming - Hero
                                </span>
                                <div className='qualification-calender'>
                                    <i class="uil uil-calendar-alt"></i> 2016 - 2021
                                </div>
                            </div>

                            <div>
                                <span className='qualification-rounder'></span>
                                <span className='qualification-line'></span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Qualification;