import React from 'react';
import './Services.css';

// https://i.ibb.co/Nrv44W0/anti-age-face.png
// https://i.ibb.co/GJTG3jD/hair-color-style.png
// https://i.ibb.co/qms5YJh/skin-care.png

const Services = () => {
    return (
        <div className='container-fluid py-5'>
            <h1 className='section-title pb-5'>Our Awesome <span className='section-title1'>Services</span></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
                <div className="col">
                    <div className="card h-100 border-0 service-card">
                        <img src="https://i.ibb.co/Nrv44W0/anti-age-face.png" className="img-fluid m-auto mt-2 service-img" alt="..." height="72" width="72" />
                        <div className="card-body">
                            <h5 className="service-title">Anti Age Face Treatment</h5>
                            <h6 className='service-cost'>$199</h6>
                            <p className="details-service-txt">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0 service-card">
                        <img src="https://i.ibb.co/GJTG3jD/hair-color-style.png" className="img-fluid m-auto mt-2 service-img" alt="..." height="72" width="72" />
                        <div className="card-body">
                            <h5 className="service-title">Hair Color & Styleing</h5>
                            <h6 className='service-cost'>$99</h6>
                            <p className="details-service-txt">Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0 service-card">
                        <img src="https://i.ibb.co/qms5YJh/skin-care.png" className="img-fluid m-auto mt-2 service-img" alt="..." height="72" width="72" />
                        <div className="card-body">
                            <h5 className="service-title">Skin Care Treatment</h5>
                            <h6 className='service-cost'>$299</h6>
                            <p className="details-service-txt">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;