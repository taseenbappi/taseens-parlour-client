import React from 'react';
import Rating from 'react-rating';
import './Testimonials.css';
import { FaStar, FaRegStar } from "react-icons/fa";

const Testimonials = () => {
    return (
        <div className='container-fluid py-5'>
            <h1 className='section-title pb-5'>Testimonials</h1>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container mx-auto">
                <div className="col">
                    <div className="card h-100 ">
                        <img src="https://i.ibb.co/b7wFBhL/customer-1.png" className="img-fluid m-auto mt-2 service-img" alt="..." height="72" width="72" />
                        <div className="card-body">
                            <h5 className="service-title">Nash Patrik</h5>
                            <p className="details-service-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <span><Rating
                                placeholderRating={3.5}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaRegStar></FaRegStar>}
                                fullSymbol={<FaStar></FaStar>}
                            /></span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 ">
                        <img src="https://i.ibb.co/jM1NTN0/customer-3.png" className="img-fluid m-auto mt-2 service-img" alt="..." height="72" width="72" />
                        <div className="card-body">
                            <h5 className="service-title">Nash Patrik</h5>
                            <p className="details-service-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <span><Rating
                                placeholderRating={3.5}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaRegStar></FaRegStar>}
                                fullSymbol={<FaStar></FaStar>}
                            /></span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 ">
                        <img src="https://i.ibb.co/zXBxQBh/customer-2.png" className="img-fluid m-auto mt-2 service-img" alt="..." height="72" width="72" />
                        <div className="card-body">
                            <h5 className="service-title">Nash Patrik</h5>
                            <p className="details-service-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <span><Rating
                                placeholderRating={3.5}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaRegStar></FaRegStar>}
                                fullSymbol={<FaStar></FaStar>}
                            /></span>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Testimonials;