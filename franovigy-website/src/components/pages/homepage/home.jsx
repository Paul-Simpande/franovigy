
import './home.css';
import heroImage from '../../../assets/hero-ban-image.png';

function Home() {
    return (
        <>
            <section className="section hero">
                <div className="left-col">
                    <div className="hero-title">
                        <h1>Innovation at the core</h1>
                        <p>Empowering Communities through Innovation</p>
                    </div>
                    <div className="spacer" />
                    <div className="cta">
                        <p>At Franovigy Enterprises Limited, we are dedicated
                            to providing quality services in construction,
                            agriculture, transport, and logistics. We focus
                            on empowering local farmers and contributing to
                            national food security through sustainable practices.</p>
                        <button className="hero-btn">Get Started</button>
                    </div>
                </div>
                <div className="right-col">
                    <img src={heroImage} alt="image" />
                </div>
            </section>
        </>
    );
}

export default Home;
