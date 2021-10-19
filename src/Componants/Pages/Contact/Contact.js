import React from 'react';
import '../About/About.css'
const Contact = () => {
    return (
        <div>
            <div className="about-banner">
                <h1 className="text-5xl text-center italic text-white font-medium">Contact Us</h1>
            </div>

            <div className="container mx-auuto sm:p-20 p-5">
                <div className="sm:grid grid-cols-2 gap-20">
                    <div className="w-full">
                        <div className="sm:grid grid-cols-2 gap-5">
                            <div className="bg-gray-200 p-5 text-center rounded-lg m-2">
                                <i className="fas fa-map-marked-alt text-5xl text-blue-500 py-3"></i>
                                <h3 className="text-xl font-medium py-5">ADDRESS</h3>
                                <p className="text-gray-600">198 West 21th Street, Suite 721 New York NY 10016</p>
                            </div>
                            <div className="bg-gray-200 p-5 text-center rounded-lg m-2 ">
                                <i class="fas fa-phone-square text-5xl text-blue-500 py-3"></i>
                                <h3 className="text-xl font-medium py-5">CONTACT NUMBER</h3>
                                <p className="text-gray-600">+ 1235 2355 98</p>
                            </div>
                            <div className="bg-gray-200 p-5 text-center rounded-lg m-2">
                                <i class="fas fa-paper-plane text-blue-500 py-3 text-5xl"></i>
                                <h3 className="text-xl font-medium py-5">EMAIL ADDRESS</h3>
                                <p className="text-gray-600">1info@yoursite.com</p>
                            </div>
                            <div className="bg-gray-200 p-5 text-center rounded-lg m-2">
                                <i class="fas fa-blog text-blue-500 py-3 text-5xl"></i>
                                <h3 className="text-xl font-medium py-5">WEBSITE</h3>
                                <p className="text-gray-600">yoursite.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="border  sm:p-10 p-5 w-full">
                            <h3 className="sm:text-5xl text-4xl mb-10 font-light "><span className="font-medium text-gray-800">Contact </span></h3>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        Your Name
                                    </label>
                                    <input className=" block w-full  text-gray-700 border border-gray-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Name" />
                                </div>

                            </div>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        Your Email
                                    </label>
                                    <input className=" block w-full  text-gray-700 border border-gray-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="Email" />

                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-3">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        Your Message
                                    </label>
                                    <textarea className=" block w-full  text-gray-700 border border-gray-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Message" />
                                </div>
                            </div>

                            <button class="w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-800 rounded-lg focus:shadow-outline font-bold hover:bg-purple-800">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;