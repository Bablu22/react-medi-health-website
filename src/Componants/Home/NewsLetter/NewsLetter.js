import React from 'react';
import './NewsLetter.css'
const NewsLetter = () => {

    return (
        <div className="newsletter bg-gradient-to-r from-green-400 to-blue-500 flex justify-center text-center py-24 ">
            <div>
                <h4 className="sm:text-5xl text-2xl text-white  italic py-10">SUBCRIBE TO OUR NEWSLETTER</h4>
                <div class="flex items-center p-2">
                    <input type="email" class="w-full mr-2  bg-transparent shadow-inner rounded-full py-3 px-6 border border-white-400 focus:outline-none text-white placeholder-gray-700 font-bold" required placeholder="Enter Email address" />
                    <button className="bg-transparent text-gray-800 font-bold   py-3 px-3 rounded-full w-36  border border-white" >Subscribr</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;