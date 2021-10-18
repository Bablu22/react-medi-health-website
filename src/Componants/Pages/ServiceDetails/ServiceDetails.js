import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AppoinmentForm from '../../AppoinmentForm/AppoinmentForm';

const ServiceDetails = () => {
    const { serviceID } = useParams()

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const item = services.find(service => service?.id == serviceID)

    return (
        <div className="container mx-auto mt-8">
            <div className="sm:flex justify-between ">
                <div className="sm:p-10 p-4 w-full  bg-white">
                    <div className="">
                        <div className="">
                            <div className=" w-full  h-4/6  border rounded-lg overflow-hidden"
                            >
                                <img className="w-full h-full object-cover" src={item?.img} alt='' />
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h1 className=" mb-4 uppercase text-4xl font-extrabold">{item?.name}</h1>
                                <p className="text-lg text-justify text-gray-500	">{item?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:p-10 p-4 w-full bg-white">
                    <AppoinmentForm></AppoinmentForm>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;