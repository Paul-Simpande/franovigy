import React, { useState, useRef } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import './contact.css';

function Contact() {
    const formRef = useRef();
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        company: "",
        country: "",
        province: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            "service_jvalr9p",     // e.g. "service_xxx"
            "YOUR_TEMPLATE_ID",    // e.g. "template_yyy"
            formRef.current,
            "8HKypWeN1u5yJKqPt"      // e.g. "AbCdEfGhIjK"
        )
            .then(() => {
                setLoading(false);
                setSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    number: "",
                    company: "",
                    country: "",
                    province: "",
                    message: "",
                });
            })
            .catch((error) => {
                setLoading(false);
                alert("Failed to send message. Try again later.");
                console.error("EmailJS Error:", error);
            });
    };

    return (
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="title-container">
                        <p className="title">Contact Us</p>
                        <p className="description">Have any questions? Feel free to reach out to us. We're here to assist you!</p>
                    </div>
                </div>
                <div className="row">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        {submitted && <p className="success-msg">Thank you! Your message has been sent.</p>}

                        <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                        <input type="tel" name="number" placeholder="Phone Number" required value={formData.number} onChange={handleChange} />
                        <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
                        <input type="text" name="country" placeholder="Country" required value={formData.country} onChange={handleChange} />
                        <input type="text" name="province" placeholder="Province" required value={formData.province} onChange={handleChange} />
                        <textarea name="message" placeholder="Your Message" rows="5" required value={formData.message} onChange={handleChange}></textarea>

                        <button type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>
                <div className="row">
                    <div className="socialMedia-container">
                        <a href="http://www.facebook.com"><FaFacebookF /></a>
                        <a><FaInstagram /></a>
                        <a><BsTwitterX /></a>
                        <a><FaTiktok /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
