import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './eventdetail.css';
import NotFound from '../../../shared/norfound.jsx';
import { EVENT_LIST } from '../../../../constants/eventsConstants/eventContent.js';
import sendEventMail from '../../../../constants/eventsConstants/eventMail.js';

function Eventdetail() {
    const { id } = useParams();
    const event = EVENT_LIST.find((e) => e.id === id);

    // Handle 404 if event doesn't exist
    if (!event) return <NotFound message="Event not found" />;

    // Local UI State
    const [showMore, setShowMore] = useState(false);
    const [popUp, setPopUp] = useState(false);

    // Form State
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    // Lock scroll when popup is open
    useEffect(() => {
        document.body.style.overflow = popUp ? 'hidden' : 'auto';
        return () => (document.body.style.overflow = 'auto');
    }, [popUp]);

    const toggleShowMore = () => setShowMore((prev) => !prev);
    const togglePopUp = (open) => setPopUp(open);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await sendEventMail({
            ...form,
            event,
        });

        if (response.success) {
            alert("✅ Registration complete!\nYou’ll receive a confirmation email shortly.");
        } else {
            alert("❌ Something went wrong while sending the email. Please try again.");
        }

        // Reset form and close popup
        setForm({ firstName: '', lastName: '', email: '', phone: '' });
        setPopUp(false);
    };

    const { firstName, lastName, email, phone } = form;
    const shortText = event.description.split('\n')[0];

    return (
        <section className="eventdetail-section">
            <div className="container">
                {/* Header */}
                <p className="title">{event.title}</p>
                <p className="date-location">{event.date} | {event.location}</p>
                <p className="moto">{event.moto}</p>
                <button className="register-btn" onClick={() => togglePopUp(true)}>RSVP</button>

                <img src={event.banner} className="banner" alt={event.title} />

                {/* Time & Location */}
                <p className="subtitle">Time & Location</p>
                <p className="detail">{event.time}</p>
                <p className="detail">{event.address}</p>

                {/* About the Event */}
                <p className="subtitle">About the Event</p>
                <p className="detail d-1">
                    {showMore ? event.description : shortText}
                    <br />
                    <span className="toggle-link" onClick={toggleShowMore}>
            {showMore ? 'Show less' : 'Show more'}
          </span>
                </p>

                {/* RSVP Button Again */}
                <button className="register-btn secondary" onClick={() => togglePopUp(true)}>RSVP</button>

                {/* Map */}
                <div className="event-map">
                    <iframe
                        src={event.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Event Map"
                    ></iframe>
                </div>
            </div>

            {/* RSVP Popup */}
            <div className={`pop-up ${popUp ? 'show' : ''}`}>
                <form onSubmit={handleSubmit}>
                    <label className="title">Add your Details</label>

                    <label htmlFor="firstname">*First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="lastname">*Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">*Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="phone">*Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+260 97 777 7777"
                        value={phone}
                        onChange={handleChange}
                        required
                        inputMode="tel"
                        pattern="^\+260\s\d{2}\s\d{3}\s\d{4}$"
                    />

                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => togglePopUp(false)}>Close</button>
                </form>
            </div>
        </section>
    );
}

export default Eventdetail;
