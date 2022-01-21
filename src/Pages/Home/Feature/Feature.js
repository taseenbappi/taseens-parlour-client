import React from 'react';
import feature from "../../../images/work-feature.svg"
import './Feature.css';

const Feature = () => {
    return (
        <div className='container-fluid feature-bg py-5 '>
            <div className="container mx-auto row d-flex justify-content-center align-items-center p-3">

                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <img className='img-fluid p-3' src={feature} alt="" height="484" width="484" />
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-start pb-2">
                    <h1 className='feature-title'>Let us handle your <br />screen <span className='section-title1'>Professionally</span>.</h1>
                    <p className='banner-txt'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>

                    <div className='d-flex'>
                        <div className='text-start'>
                            <h2 className='customer-count'>500+</h2>
                            <p className='count-title'>Happy Customer</p>
                        </div>
                        <div className='text-start ms-5'>
                            <h2 className='customer-count'>60+</h2>
                            <p className='count-title'>Total Service</p>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Feature;