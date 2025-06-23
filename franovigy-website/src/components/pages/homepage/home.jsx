
import './home.css';
import { FaRegHeart } from "react-icons/fa";
import heroImage from '../../../assets/hero-ban-image.png';
import agricultureImage from '../../../assets/agriculture_post.avif';
import construtorImage from '../../../assets/construction_post.avif';
import transprtImage from '../../../assets/transport_post.avif';

function Home() {
    return (
        <>
            {/*============== HERO SECTION ==============*/}
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

            {/*============== LATEST POST SECTION ==============*/}
            <section className="section latest-post">
                <div className="latest-post-title">
                    <h1>Latest Post</h1>
                </div>
                <div className="post-list">
                    <div className="col">
                        <div className="img-col">
                            <img src={agricultureImage} alt="image" />
                        </div>
                        <div className="detail-col">
                            <p>Paul Simpande</p>
                            <h1>Empowering Local Farmers:</h1>
                            <h1>Franovigy Enterprises Agriculture Solutions</h1>
                            <p>In the heart of Lusaka, Zambia, stands a company</p>
                            <hr/>
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
                    <div className="col">
                        <div className="img-col">
                            <img src={construtorImage} alt="image" />
                        </div>
                        <div className="detail-col">
                            <p>Paul Simpande</p>
                            <h1>Building a Sustainable Future:</h1>
                            <h1>Franovigy Enterprises Construction Services</h1>
                            <p>In the heart of Lusaka, Zambia, stands a company</p>
                            <hr/>
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
                    <div className="col">
                        <div className="img-col">
                            <img src={transprtImage} alt="image" />
                        </div>
                        <div className="detail-col">
                            <p>Paul Simpande</p>
                            <h1>Optimizing Logistics Solutions:</h1>
                            <h1>Franovigy Enterprises Transport Services</h1>
                            <p>In the heart of Lusaka, Zambia, stands a company</p>
                            <hr/>
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
                </div>
            </section>

            {/*============== LATEST POST SECTION ==============*/}

        </>
    );
}

export default Home;
