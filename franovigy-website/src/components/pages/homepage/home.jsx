import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './home.css';
import '../../../scrollAnimation/scrollAnimation.css';

import { FaRegHeart } from "react-icons/fa";

import heroImage from '../../../assets/hero-ban-image.png';
import aboutImg from '../../../assets/about_us.png';

import heroContent from '../../../constants/homeConstants/heroContent.js';
import latestPosts from '../../../constants/homeConstants/latestPosts.js';
import services from '../../../constants/homeConstants/servicesData.js';

function Home() {
    useEffect(() => {
        const elements = document.querySelectorAll('.scroll-animate');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        }, { threshold: 0.2 });

        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    const navigate = useNavigate();

    return (
        <>
            {/*============== HERO SECTION ==============*/}
            <section className="section hero">
                <div className="left-col">
                    <div className="hero-title">
                        <h1 className="scroll-animate left">{heroContent.title}</h1>
                        <p className="scroll-animate left">{heroContent.subtitle}</p>
                    </div>
                    <div className="spacer" />
                    <div className="cta">
                        <p className="scroll-animate left">{heroContent.paragraph}</p>
                        <button
                            className="hero-btn scroll-animate show"
                            onClick={() => navigate(heroContent.buttonLink)}
                        >
                            {heroContent.buttonText}
                        </button>
                    </div>
                </div>
                <div className="right-col">
                    <img className="scroll-animate right" src={heroImage} alt="hero" />
                </div>
            </section>

            {/*============== LATEST POST SECTION ==============*/}
            <section className="section latest-post">
                <div className="latest-post-title scroll-animate left">
                    <h1>Latest Post</h1>
                </div>
                <div className="post-list">
                    {latestPosts.map(({ author, title, subtitle, image }, index) => (
                        <div className="col" key={index}>
                            <div className="img-col">
                                <img className="scroll-animate left" src={image} alt="post" />
                            </div>
                            <div className="detail-col scroll-animate right">
                                <p>{author}</p>
                                <h1>{title}</h1>
                                <h1>{subtitle}</h1>
                                <p>In the heart of Lusaka, Zambia, stands a company</p>
                                <hr />
                                <div className="post-reaction">
                                    <div className="reaction">
                                        <div className="eye">
                                            <div className="eye-bow"></div>
                                        </div>
                                        <p>0</p>
                                    </div>
                                    <div className="spacer"></div>
                                    <div className="heart"><FaRegHeart /></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/*============== SERVICES SECTION ==============*/}
            <section className="section services">
                <div className="services-title scroll-animate left">
                    <h1>Services</h1>
                </div>
                <div className="services-list">
                    {services.map(({ title, desc, image }, index) => (
                        <div className="col" key={index}>
                            <div className="img-col">
                                <img className="scroll-animate left" src={image} alt="service" />
                            </div>
                            <div className="detail-col scroll-animate right">
                                <h1>{title}</h1>
                                <p>{desc}</p>
                                <hr />
                                <div className="check-out-btn">
                                    <div className="btn">
                                        <Link to="/services">Check Out</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="more-services scroll-animate left">
                    <Link to="/services">More Services</Link>
                    <div className="skew up"></div>
                    <div className="skew down"></div>
                </div>
            </section>

            {/*============== ABOUT US SECTION ==============*/}
            <section className="section about-us">
                <div className="container">
                    <div className="col scroll-animate left">
                        <img className="about-img" src={aboutImg} alt="about" />
                    </div>
                    <div className="col scroll-animate right">
                        <div className="container">
                            <div className="row"><h1>Our Story</h1></div>
                            <div className="row"><h3>Who We Are</h3></div>
                            <div className="row">
                                <p>
                                    FRANOVIGY ENTERPRISES LIMITED is a wholly
                                    Zambian-owned, woman-led enterprise.
                                    We are dedicated to delivering excellence
                                    in general construction, supplying a wide
                                    range of goods and services, and
                                    expanding our expertise into the
                                    agribusiness sector. Additionally, we
                                    offer reliable and efficient transport
                                    and logistics solutions, ensuring the
                                    seamless movement of goods and services
                                    across Zambia
                                    and beyond.
                                    <br />
                                    <br />
                                    By integrating agribusiness and logistics
                                    into our portfolio, we aim to drive local
                                    agricultural innovation, contribute to food
                                    security, empower rural communities, and
                                    support the efficient flow of commodities
                                    and materials essential to economic growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
