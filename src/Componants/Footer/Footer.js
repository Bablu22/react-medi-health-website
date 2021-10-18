import React from 'react';
import Logo from '../../images/logo.webp'

const Footer = () => {
    return (
        <div>
            <footer class="footer bg-gray-800 text-white relative pt-1">
                <div class="container mx-auto px-6">

                    <div class="sm:flex sm:mt-8">
                        <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                            <div class="flex flex-col mb-7">
                                <div>
                                    <img src={Logo} alt="" />
                                </div>
                                <h5 className="mt-4 text-gray-400">Far far away, behind the word mountains, <br /> far from the countries.</h5>
                                <div className=" flex mt-10 card-actions">
                                    <div className="icon"><i className="fab text-white fa-facebook-f"></i></div>
                                    <div className="icon"><i className="fab text-white fa-twitter"></i></div>
                                    <div className="icon"><i className="fab text-white fa-google"></i></div>
                                    <div className="icon"><i className="fab text-white fa-instagram"></i></div>
                                </div>

                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold text-gray-500 uppercase mb-2">DEPARTMENTS</span>
                                <span class="my-2">Neurology</span>
                                <span class="my-2">Ophthalmology</span>
                                <span class="my-2">X-Ray</span>
                                <span class="my-2">Surgical</span>
                                <span class="my-2">Cardiology</span>

                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold text-gray-500 uppercase mt-4 md:mt-0 mb-2">SERVICES</span>
                                <span class="my-2">Emergency Help</span>
                                <span class="my-2">Qualified Doctors</span>
                                <span class="my-2">Location & Directions</span>
                                <span class="my-2">Medical Treatment</span>

                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold text-gray-500 uppercase mt-4 md:mt-0 mb-2">Resources</span>
                                <span class="my-2">Guides</span>
                                <span class="my-2">Research</span>
                                <span class="my-2">Experts</span>
                                <span class="my-2">Agencies</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto px-6">
                    <div class="mt-16 border-t-2 border-gray-600 flex flex-col items-center">
                        <div class="sm:w-2/3 text-center py-6">
                            <p class="text-lg text-gray-400 font-bold mb-2">
                                Copyright © 2021 by Bablu Mia
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;