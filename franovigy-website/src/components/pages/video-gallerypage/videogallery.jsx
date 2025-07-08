import React from 'react';
import visual_effects from '../../../assets/visual_effects.mp4';
import './videogallery.css';

const Videogallery = () => {
    return (
        <div className="video-gal">
            <section className="title-section">
                <p>Visual Showcase</p>
            </section>
            <section className="video-section">
                <video
                    src={visual_effects}
                    width="100%"
                    controls
                    loop
                    muted
                    autoPlay
                />
            </section>
        </div>
    );
};

export default Videogallery;
