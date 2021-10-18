import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('../doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="container mx-auto my-32">
            <h2 className="text-center text-5xl font-medium italic text-indigo-900 py-10 mb-14">Our Qualified Doctors</h2>
            <div className="sm:grid grid-cols-3 gap-0">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;