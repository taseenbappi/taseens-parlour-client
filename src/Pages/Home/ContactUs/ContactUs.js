import React from 'react';
import './ContactUs.css';
import { useForm } from "react-hook-form";

const ContactUs = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='contact-bg container-fluid py-5'>
            <div className="container mx-auto row d-flex justify-content-center align-items-center p-3">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-start pb-2">
                    <h1 className='contact-header pb-5'>Let us handle your <br /> project, professionally.</h1>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className='justify-content-center align-content-center container' >
                        <form onSubmit={handleSubmit(onSubmit)} >

                            <input {...register("firstName", { required: true, maxLength: 20 })} className="form-control mb-2" placeholder='First Name' />

                            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} className="form-control mb-2" placeholder='Last Name' />

                            <input type="email" {...register("email")} className="form-control mb-2" placeholder='Email' />

                            <input type="number" {...register("number")} className="form-control mb-2" placeholder='Number' />

                            <textarea {...register("message")} className="form-control mb-2" placeholder='Message' />

                            <button type="submit" className="login-btn">Send Message</button>

                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ContactUs;