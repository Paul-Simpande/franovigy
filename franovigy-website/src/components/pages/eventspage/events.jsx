import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

import './events.css';
import '../../../scrollAnimation/scrollAnimation.css';

import { EVENT_LIST } from '../../../constants/eventsConstants/eventContent.js';

function Events() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="events">
            <div className="container">

                {/* Section Title */}
                <div className="title">
                    <p className="scroll-animate reveal-left">Exciting Events</p>
                </div>

                {/* Events List */}
                <div className="content">
                    {EVENT_LIST.map((event, index) => {
                        const isExpanded = expandedIndex === index;

                        return (
                            <div className="event" key={event.id || index}>
                                {/* Left Column: Event Info */}
                                <div className="left-col">
                                    <p className="title">{event.title}</p>
                                    <p className="date">{event.date}</p>

                                    {/* Toggleable Header */}
                                    <p className="contert" onClick={() => toggleExpand(index)}>
                                        {event.title}
                                        <span className="locale"> / {event.location}</span>
                                        <span className={`drop-down ${isExpanded ? 'hide' : ''}`}>
                      <SlArrowDown />
                    </span>
                                        <span className={`close-up ${isExpanded ? 'show' : ''}`}>
                      <SlArrowUp />
                    </span>
                                    </p>

                                    <p className="more-label" onClick={() => toggleExpand(index)}>
                                        More Info
                                    </p>

                                    {/* Expandable Info */}
                                    <div className={`more-info ${isExpanded ? 'show-info' : ''}`}>
                                        <p>{event.time}</p>
                                        <p>{event.address}</p>
                                        <p className="description">{event.description}</p>
                                    </div>
                                </div>

                                {/* Right Column: RSVP Button */}
                                <div className="right-col">
                                    <div className="rvsp-btn">
                                        <Link to={`/eventdetail/${event.id}`}>RSVP</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default Events;
