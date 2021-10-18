import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'
const Service = ({ service }) => {

    const { id, name, img } = service
    const history = useHistory()

    const serviceDetails = () => {
        history.push(`service/${id}`)
    }

    return (
        <div>

            <button
                onClick={serviceDetails}
                className="max-w-lg mx-auto">
                <div className="bg-white shadow-md border h-96 border-gray-200 rounded-lg max-w-sm mb-5">
                    <div className="service-img">
                        <img className="rounded-t-lg w-5/6 mx-auto mt-5" src={img} alt="" />
                        <div className="service-text">
                            <h5 className="font-bold text-2xl tracking-tight mb-2">{name}</h5>
                        </div>
                    </div>
                </div>

            </button>
        </div>
    );
};

export default Service;