import React from 'react';
import './Doctor.css'
const Doctor = ({ doctor }) => {
    const { img, title, name } = doctor
    return (

        <div className="flex justify-center items-center mb-40 mt-20">
            <div className="shadow-lg w-10/12 card">
                <div className="card-img">
                    <img src={img} alt="" className="mx-auto rounded-full" />
                </div>
                <div className="card-desc w-full mx-auto">
                    <h2 className="text-2xl font-bold italic  text-center">{name}</h2>
                    <h3 className="text-xl text-blue-400 text-center">{title}</h3>

                    <div className=" flex justify-center mt-20 card-actions">
                        <div className="icon"><i className="fab fa-facebook-f"></i></div>
                        <div className="icon"><i className="fab fa-twitter"></i></div>
                        <div className="icon"><i className="fab fa-google"></i></div>
                        <div className="icon"><i className="fab fa-instagram"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;