import './aboutUs.css';
import '../../../scrollAnimation/scrollAnimation.css';
import { useEffect } from "react";

import aboutContent from '../../../constants/aboutConstants/aboutContent';
import teamData from '../../../constants/aboutConstants/teamData';

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
                        <p className="p-title scroll-animate left">{aboutContent.vision.title}</p>
                        <p className="scroll-animate left">{aboutContent.vision.subtitle}</p>
                    </div>
                    <div className="row2">
                        <div className="col1">
                            <p className="scroll-animate right">{aboutContent.vision.paragraphs[0]}</p>
                        </div>
                        <div className="col2">
                            <p className="scroll-animate right">{aboutContent.vision.paragraphs[1]}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*============== MEET OUR TEAM SECTION ==============*/}
            <section className="our-team">
                <div className="container">
                    <div className="row">
                        <p className="title scroll-animate left">Team</p>
                        <p className="description scroll-animate right">Meet Our Team</p>
                    </div>
                    <div className="det">
                        {teamData.map((member, index) => (
                            <div className={`col scroll-animate ${index === 0 ? 'left' : index === 1 ? 'down' : 'right'}`} key={index}>
                                <div className="image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="detail">
                                    <p>{member.name}</p>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*============== JOIN US SECTION ==============*/}
            <section className="join-us">
                <div className="container">
                    <div className="row">
                        <div className="left-col scroll-animate left">
                            <p className="title">{aboutContent.join.left.title}</p>
                            <p className="description">{aboutContent.join.left.description}</p>
                        </div>
                        <div className="right-col scroll-animate right">
                            <p>{aboutContent.join.right}</p>
                        </div>
                    </div>
                    <div className="row r2">
                        {aboutContent.join.highlights.map((item, index) => (
                            <div className={`col scroll-animate ${index === 0 ? 'left' : index === 1 ? 'down' : 'right'}`} key={index}>
                                <p className="title">{item.title}</p>
                                <p className="description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;
