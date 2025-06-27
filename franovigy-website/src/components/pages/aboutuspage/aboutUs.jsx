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
                        <p className="p-title">Crafting Sustainable Solutions</p>
                        <p>Our Vision</p>
                    </div>
                    <div className="row2">
                        <div className="col1">
                            <p>At Franovigy Enterprises Limited, we are
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
                            <p>With a focus on quality,
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
                        <p className="title">Team</p>
                        <p className="description">Meet Our Team</p>
                    </div>
                    <div className="det">
                        <div className="col">
                            <div className="image">
                                <img src={img1} alt="image"/>
                            </div>
                            <div className="detail">
                                <p>Virginia Simpande</p>
                                <p>CEO</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="image">
                                <img src={img2} alt="image"/>
                            </div>
                            <div className="detail">
                                <p>Lucky Mbewe</p>
                                <p>CCO</p>
                            </div>
                        </div>
                        <div className="col">
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
        </>
    );
}
export default AboutUs;