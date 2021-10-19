import React, { useEffect, useState } from 'react';
import './About.css'
import image from '../../../images/about/about.png'
import Slider from "react-slick";
import Testimonial from './Testimonial';
import image1 from '../../../images/brand/brand1.webp'
import image2 from '../../../images/brand/brand2.webp'
import image3 from '../../../images/brand/brand3.webp'
import image4 from '../../../images/brand/brand4.webp'
import image5 from '../../../images/brand/brand5.webp'

const About = () => {

    const [testimonial, setTestimonial] = useState([])
    useEffect(() => {
        fetch('../testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="about-banner">
                <h1 className="text-5xl text-center italic text-white font-medium">About Us</h1>
            </div>
            <div className="about-hero">
                <div className="container mx-auto">
                    <div className="sm:grid grid-cols-2 gap-8">
                        <div className="">
                            <img src={image} alt="" />
                        </div>
                        <div className="w-full p-10 my-auto">
                            <h2 className="sm:text-4xl text-2xl text-gray-700 font-medium">Second Abundantly <br /> Move That Cattle Perform <br /> Appen Land</h2>
                            <p className="text-justify text-gray-800 mt-10">Give their their without moving were stars called so divide in female be moving night may fish him Give their their without moving were stars called so divide female be moving night may fish him own male  <br /> vreated great Give their their without moving were. Stars called so divide female moving night may fish him own male created great opportunity deal.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial section */}
            <div className="container mx-auto my-32 p-10">
                <h2 className="text-center text-5xl font-medium italic text-indigo-900 py-10">Our Patient Says</h2>
                <Slider {...settings}>
                    {
                        testimonial.map(testi => <Testimonial
                            key={testi.id}
                            testimonial={testi}
                        ></Testimonial>)
                    }
                </Slider>
            </div>

            <div className="container mx-auto p-10 my-20 w-full ">
                <div className="sm:grid sm:grid-cols-5 grid grid-cols-2 gap-10 py-20">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                </div>
                <hr />
            </div>
        </div>
    );
};
export default About;