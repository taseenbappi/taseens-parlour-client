import React from 'react';
import './Banner.css';
import bannerImg from "../../../images/banner/banner-img.svg"

const Banner = () => {
    return (
        <div className='container-fluid banner-bg '>
            <div className="container mx-auto row d-flex justify-content-center align-items-center p-3">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-start pb-2">
                    <h1 className='banner-title'>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                    <p className='banner-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className='appoinment-btn '>Get an Appointment</button>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img className='img-fluid p-3' src={bannerImg} alt="" height="484" width="484" />
                </div>
            </div>
        </div>
    );
};

export default Banner;