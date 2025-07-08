import './events.css';
import '../../../scrollAnimation/scrollAnimation.css';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { EVENT_LIST } from '../../../constants/eventsConstants/eventContent.js';

function Events() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="events">
            <div className="container">
                <div className="title">
                    <p className="scroll-animate reveal-left">Exciting Events</p>
                </div>
                <div className="content">
                    {EVENT_LIST.map((event, index) => (
                        <div className="event" key={index}>
                            <div className="left-col">
                                <p className="title">{event.title}</p>
                                <p className="date">{event.date}</p>
                                <p className="contert" onClick={() => handleToggle(index)}>
                                    {event.title}
                                    <span className="locale"> / {event.location}</span>
                                    <span className={`drop-down ${expandedIndex === index ? 'hide' : ''}`}><SlArrowDown /></span>
                                    <span className={`close-up ${expandedIndex === index ? 'show' : ''}`}><SlArrowUp /></span>
                                </p>
                                <p className="more-label" onClick={() => handleToggle(index)}>
                                    More Info
                                </p>
                                <div className={`more-info ${expandedIndex === index ? 'show-info' : ''}`}>
                                    <p>{event.time}</p>
                                    <p>{event.address}</p>
                                    <p className="description">{event.description}</p>
                                </div>
                            </div>
                            <div className="right-col">
                                <div className="rvsp-btn">
                                    <Link to={"/"}>RVSP</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Events;
