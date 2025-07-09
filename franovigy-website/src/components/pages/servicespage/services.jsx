import React from 'react';
import './services.css';
import '../../../scrollAnimation/scrollAnimation.css';
import { servicesData } from '../../../constants/servicesConstants/servicesData';

function Services() {
    return (
        <>
            <section className="services-section intro-section">
                <div className="banner">
                    <p className="title">Our Services</p>
                </div>
            </section>
            <section className="services-section services">
                <div className="container">
                    {servicesData.map(service => {
                        const Icon = service.icon;
                        return (
                            <div className="service" key={service.id}>
                                <div className="service-icon"><Icon /></div>
                                <p className="name">{service.name}</p>
                                <p className="description">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default Services;
