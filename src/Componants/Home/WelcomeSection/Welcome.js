import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/welcome.webp'
const Welcome = () => {
    return (
        <div className="container mx-auuto sm:p-20 p-5">
            <div className="sm:flex justify-evenly ">
                <div className="w-full">
                    <img src={image} alt="" />
                </div>
                <div className="w-full p-5">
                    <h1 className="sm:text-6xl text-4xl mb-10 italic">Welcome To <br /> <span className="font-medium">Modern Clinic.</span> </h1>
                    <p className="text-gray-500 text-justify mb-10">Give their their without moving were stars called so divide female be moving night may fish him own male vreated great Give their their without moving were. Stars called so divide female moving night may fish him own male created great opportunity deal.</p>

                    <div className="flex items-center mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="purple">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl ml-5 text-gray-700">Primary Care</h3>
                    </div>

                    <div className="flex items-center mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="purple">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl ml-5 text-gray-700">Emergency Cases</h3>
                    </div>

                    <div className="flex items-center mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="purple">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl ml-5 text-gray-700">Online Appointment</h3>
                    </div>
                    <div className="flex items-center mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="purple">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl ml-5 text-gray-700">Health Consultation</h3>
                    </div>
                    <Link to="/about">
                        <button
                            className=" w-6/12 mt-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            About Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Welcome;