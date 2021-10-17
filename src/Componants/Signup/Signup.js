import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../images/google.png';
import image from '../../images/signup.jpg'

const Signup = () => {
    return (
        <div className="container mx-auto p-5">
            <section className="flex justify-center flex-col md:flex-row h-screen items-center">

                <div className=" hidden lg:block w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen  h-screen">
                    <img src={image} alt="" className="h-full " />
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen p-6 lg:px-16 xl:px-12 flex items-center border border-gray-200 justify-center">

                    <div className="w-full h-100">

                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-2">Create your account</h1>

                        <form className="mt-6">
                            <div>
                                <label className="block text-gray-700">Your Name</label>
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter Email Address"
                                    className="w-full px-4 py-2 rounded-lg border-gray-400 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus
                                    autoComplete="true"
                                    required />
                            </div>
                            <div>
                                <label className="mt-4 block text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Enter Email Address"
                                    className="w-full px-4 py-2 rounded-lg border-gray-400 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus
                                    autoComplete="true"
                                    required />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Enter Password"
                                    minLength="6"
                                    className="w-full px-4 py-2 rounded-lg border-gray-400 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    required />
                            </div>

                            <button
                                type="submit"
                                className="w-full block bg-purple-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Create account</button>
                        </form>

                        <hr className="my-6 border-gray-300 w-full" />

                        <button
                            type="button"
                            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                            <div className="flex justify-evenly">
                                <img src={google} alt="" />
                                <span>SignUp with google</span>
                            </div>
                        </button>

                        <p className="mt-8 text-center">Already have an account?

                            <Link
                                className="text-blue-500 hover:text-blue-700 font-semibold"
                                to="/login">Login</Link>
                        </p>


                    </div>
                </div>


            </section>

        </div>
    );
};

export default Signup;