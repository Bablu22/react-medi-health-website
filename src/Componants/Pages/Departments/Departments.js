import React, { useEffect, useState } from 'react';
import Service from '../../Home/Service/Service';
import '../About/About.css'
const Departments = () => {


    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="about-banner">
                <h1 className="text-5xl text-center italic text-white font-medium">Our Services</h1>
            </div>
            <div className="container mx-auto mt-10">
                <div className="sm:grid grid-cols-3 gap-1">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Departments;