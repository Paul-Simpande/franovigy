import './aboutUs.css'
import '../../../scrollAnimation/scrollAnimation.css'
import img1 from '../../../assets/About-Our Team-1.jpg'
import img2 from '../../../assets/About-Our Team-2.jpg'
import img3 from '../../../assets/About-Our Team-3.jpg'
import {useEffect} from "react";
function AboutUs() {

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

    return (
        <>
            {/*============== ABOUT SECTION ==============*/}
            <section className="aboutus">
                <div className="container">
                    <div className="row1">
                        <p className="p-title scroll-animate left">Crafting Sustainable Solutions</p>
                        <p className="scroll-animate left">Our Vision</p>
                    </div>
                    <div className="row2">
                        <div className="col1">
                            <p className="scroll-animate right">At Franovigy Enterprises Limited, we are
                                dedicated to providing quality services
                                in construction, agriculture, transport,
                                and logistics sectors. Our commitment
                                to excellence, durability, and timeliness
                                sets us apart in the industry. We pride
                                ourselves on empowering local farmers
                                and contributing to national food
                                security through sustainable and
                                innovative practices. Our mission is to
                                make a positive impact by creating
                                lasting solutions that benefit both our
                                clients and the community.</p>
                        </div>
                        <div className="col2">
                            <p className="scroll-animate right">With a focus on quality,
                            sustainability, and reliability, we strive
                            to be a trusted partner for all your
                            business needs.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*============== MEET OUR SECTION ==============*/}
            <section className="our-team">
                <div className="container">
                    <div className="row">
                        <p className="title scroll-animate left">Team</p>
                        <p className="description scroll-animate right">Meet Our Team</p>
                    </div>
                    <div className="det">
                        <div className="col scroll-animate left">
                            <div className="image">
                                <img src={img1} alt="image"/>
                            </div>
                            <div className="detail">
                                <p>Virginia Simpande</p>
                                <p>CEO</p>
                            </div>
                        </div>
                        <div className="col scroll-animate down">
                            <div className="image">
                                <img src={img2} alt="image"/>
                            </div>
                            <div className="detail">
                                <p>Lucky Mbewe</p>
                                <p>CCO</p>
                            </div>
                        </div>
                        <div className="col scroll-animate right">
                            <div className="image">
                                <img src={img3} alt="image"/>
                            </div>
                            <div className="detail">
                                <p>Paul Simpande</p>
                                <p>CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*============== JOIN US SECTION ==============*/}
            <section className="join-us">
                <div className="container">
                    <div className="row">
                        <div className="left-col scroll-animate left">
                            <p className="title">Join</p>
                            <p className="description">Grow With Us</p>
                        </div>
                        <div className="right-col scroll-animate right">
                            <p>Interested in joining our team? We are
                                always looking for talented individuals
                                who share our passion for excellence
                                and innovation. Explore our current
                                openings and start your journey with
                                Franovigy Enterprises Limited.</p>
                        </div>
                    </div>
                    <div className="row r2">
                        <div className="col scroll-animate left">
                            <p className="title">Career Opportunities</p>
                            <p className="description">Discover exciting
                                career opportunities at Franovigy
                                Enterprises Limited that will challenge,
                                motivate, and inspire you to grow both
                                personally and professionally.</p>
                        </div>
                        <div className="col scroll-animate down">
                            <p className="title">Employee Benefits</p>
                            <p className="description">As a member of
                                our team, you will enjoy competitive
                                compensation packages, professional
                                development opportunities, and a
                                supportive work environment that
                                values collaboration and creativity.</p>
                        </div>
                        <div className="col scroll-animate right">
                            <p className="title">Work Culture and Values</p>
                            <p className="description">At Franovigy
                                Enterprises Limited, we foster a
                                culture of respect, integrity, and
                                teamwork. Our core values drive
                                every aspect of our business and
                                create a positive and inclusive
                                work environment for all employees.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default AboutUs;