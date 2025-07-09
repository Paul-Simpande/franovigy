import React from 'react';
import './portfolio.css';
import { PROJECTS } from '../../../constants/portfolioConstants/projects';

const Portfolio = () => {
    return (
        <section className="portfolio-section">
            <div className="container">
                <div className="title">
                    <p>Our Portfolio</p>
                </div>
                <div className="content">
                    <p>
                        Welcome to our portfolio. Here you'll find a selection of our work.
                        Explore our projects to learn more about what we can do.
                    </p>
                </div>
                <div className="projects">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="project"
                            style={{ backgroundImage: `url(${project.banner})` }}
                        >
                            <p className="project-title">{project.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
