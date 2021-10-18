import React from 'react';


const Testimonial = ({ testimonial }) => {
    const { name, img, description } = testimonial

    return (
        <div className="shadow m-5">
            <div className="bg-white rounded-lg p-10">
                <div className="flex items-center space-x-6 mb-4">
                    <img className="h-28 w-28 object-cover object-center rounded-full" src={img} alt="" />
                    <div>
                        <p className="text-xl text-gray-700 font-normal mb-1">{name}</p>
                        <p className="text-base text-blue-600 font-normal">Patiient</p>
                    </div>
                </div>
                <div>
                    <p className="text-gray-400 leading-loose font-normal text-base">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;