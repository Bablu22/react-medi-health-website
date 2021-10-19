import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'
const Service = ({ service }) => {

    const { id, name, img, description } = service
    const history = useHistory()

    const desc = description.slice(0, 100)

    const serviceDetails = () => {
        history.push(`service/${id}`)
    }

    return (
        <div className="max-w-lg mx-auto">
            <div className="bg-white shadow-md border service pb-20 border-gray-200 rounded-lg max-w-sm mb-5">
                <div className="service-img ">
                    <img className="rounded-t-lg w-5/6 mx-auto mt-5" src={img} alt="" />
                    <div className="service-text">
                        <h5 className="font-bold text-2xl tracking-tight mb-2">{name}</h5>
                    </div>
                </div>
                <p className="p-5">{desc}</p>
                <div className="flex justify-center items-end mt-5">
                    <button onClick={serviceDetails} className=" w-4/5 mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;