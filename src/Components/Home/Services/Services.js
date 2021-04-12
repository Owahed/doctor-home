import React from 'react';
import Fluoride from '../../../images/001-dental.png';
import Cavity from '../../../images/tooth (1).png';
import Teeth from '../../../images/tooth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const serviceData=[
    {
        name:'Fluoride Treatment',
        img:Fluoride
    },
    {
        name:'Cavity Filling',
        img:Cavity
    },
    {
        name:'Teeth WHitening',
        img:Teeth
    }
]

const Services = () => {
    return (
        <section className="mt-5">
            <div className="text-center ">
            <h5 className="text-uppercase" style={{color:"#1CC7C1"}}>Our Services</h5>
            <h2 >Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;