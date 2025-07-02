import './events.css'
import '../../../scrollAnimation/scrollAnimation.css'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Events() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(prev => (prev === index ? null : index));
    };

    const events = [
        {
            date: "Tue, 09 Jan",
            title: "Soul Concert",
            location: "Mountain View",
            time: "09, Jan 2035, 11:30",
            address: "Mountain View, 500 Terry Francine, San Francisco",
            description: "This is a great place to get your guests excited by telling them a little more about event"
        },
        {
            date: "Wed, 10 Jan",
            title: "Tech Expo",
            location: "Silicon Valley",
            time: "10, Jan 2035, 13:00",
            address: "Silicon Valley Convention Center",
            description: "Explore the future of innovation at the Tech Expo."
        },
        {
            date: "Thu, 11 Jan",
            title: "Art Gala",
            location: "Downtown LA",
            time: "11, Jan 2035, 18:00",
            address: "LA Art Gallery, Main Street",
            description: "An evening celebrating the finest contemporary art."
        }
    ];

    return (
        <section className="events">
            <div className="container">
                <div className="title">
                    <p className="scroll-animate reveal-left">Exciting Events</p>
                </div>
                <div className="content">
                    {events.map((event, index) => (
                        <div className="event" key={index}>
                            <div className="left-col">
                                <p className="title">{event.title}</p>
                                <p className="date">{event.date}</p>
                                <p className="contert"
                                    onClick={() => handleToggle(index)}>

                                    {event.title}
                                    <span className="locale"> / {event.location}</span>
                                    <span className={`drop-down ${expandedIndex === index ? 'hide' : ''}`}><SlArrowDown /></span>
                                    <span className={`close-up ${expandedIndex === index ? 'show' : ''}`}><SlArrowUp /></span>
                                </p>
                                <p
                                    className="more-label"
                                    onClick={() => handleToggle(index)}
                                >
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
