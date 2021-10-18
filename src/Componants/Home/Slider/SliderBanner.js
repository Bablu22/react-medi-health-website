import React from 'react';
import Slider from "react-slick";
import './Slider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../../images/banner/slide1.png'
import image2 from '../../../images/banner/slide2.jpg'
import image3 from '../../../images/banner/slide3.jpg'

const SliderBanner = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,



    };

    return (
        <div className="slider">
            <div className="slider-container text-center">

                <Slider className=" " {...settings}>

                    <div className="focus:outline-none">
                        <div className="banner">
                            <img className="" src={image1} alt="" />
                            <div className="banner-content">
                                <h1 className="sm:text-7xl text-4xl text-white font-bold italic">The best medical center<br />
                                </h1>
                                <button className="h-10 w-52 mt-5 px-5 text-white font-bold transition-colors duration-150 border  rounded-lg focus:shadow-outline hover:bg-indigo-500 ">Read More</button>
                            </div>
                        </div>

                    </div>
                    <div className="focus:outline-none">
                        <div className="banner">
                            <img className="" src={image2} alt="" />
                            <div className="banner-content">
                                <h1 className="sm:text-6xl text-4xl text-white font-bold italic">Making Health Care Better Together</h1>
                                <button className="h-10 w-52 mt-5 px-5 text-white font-bold transition-colors duration-150 border  rounded-lg focus:shadow-outline hover:bg-indigo-500 ">Read More</button>
                            </div>
                        </div>

                    </div>
                    <div className="focus:outline-none">
                        <div className="banner">
                            <img className="" src={image3} alt="" />
                            <div className="banner-content">
                                <h1 className="sm:text-7xl text-4xl text-white font-bold italic">Awesome
                                    Health Service</h1>
                                    <button className="h-10 w-52 mt-5 px-5 text-white font-bold transition-colors duration-150 border  rounded-lg focus:shadow-outline hover:bg-indigo-500 ">Read More</button>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default SliderBanner;