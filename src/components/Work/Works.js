import React from 'react';

import Img1 from '../../assets/work1.jpg'

const works = () => {
    return (
        <div className="work-container container grid">

            <div className="work-content">
                <div>
                    <img src={Img1} alt="" />
                    {/* <i class="uil uil-web-grid services-icon"></i> */}
                    <h3 className='services-title'>
                        Alex <br /> Photography
                    </h3>
                </div>
                <span className='services-button'
                >Live Demo <i class="uil uil-arrow-right services-button-icon"></i></span>

                <span className='services-button'
                >Details More <i class="uil uil-arrow-right services-button-icon"></i></span>
            </div>

            <div className="work-content">
                <div>
                    <img src={Img1} alt="" />
                    <h3 className='services-title'>
                        un <br /> Courses
                    </h3>
                </div>
                <span className='services-button'
                >Live Demo <i class="uil uil-arrow-right services-button-icon"></i></span>

                <span className='services-button'
                >Details More <i class="uil uil-arrow-right services-button-icon"></i></span>
            </div>


            <div className="work-content">
                <div>
                    <img src={Img1} alt="" />
                    <h3 className='services-title'>
                        Web Development <br /> Quiz
                    </h3>
                </div>
                <span className='services-button'
                >Live Demo <i class="uil uil-arrow-right services-button-icon"></i></span>

                <span className='services-button'
                >Details More <i class="uil uil-arrow-right services-button-icon"></i></span>
            </div>

        </div>
    );
};

export default works;