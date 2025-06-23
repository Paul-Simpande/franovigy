import { Link } from 'react-router-dom';
import './home.css';
import { FaRegHeart } from "react-icons/fa";
import heroImage from '../../../assets/hero-ban-image.png';
import agricultureImage from '../../../assets/agriculture_post.avif';
import construtorImage from '../../../assets/construction_post.avif';
import transprtImage from '../../../assets/transport_post.avif';
import agircultureCons from '../../../assets/agriculter_con.jpeg';
import logisticsMang from '../../../assets/logistic_mang.jpeg';
import constructionServ from '../../../assets/construction_ser.jpeg';
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

            {/*============== SERVICES SECTION ==============*/}
            <section className="section services">
                <div className="services-title">
                    <h1>Services</h1>
                </div>
                <div className="services-list">
                    <div className="col">
                        <div className="img-col">
                            <img src={agircultureCons} alt="image" />
                        </div>
                        <div className="detail-col">
                            <h1>Agricultural Consultation</h1>
                            <p>Enhance your farming practices with our expert agricultural consultation. Our services focus on sustainable and innovative methods to improve productivity and empower local farmers. Benefit from our expertise to contribute towards national food security.</p>
                            <hr/>
                            <div className="check-out-btn">
                                <div className="btn">
                                    <Link to="/">Check Out</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img-col">
                            <img src={logisticsMang} alt="image" />
                        </div>
                        <div className="detail-col">
                            <h1>Logistics Management</h1>
                            <p>Streamline your logistics and transport needs with Franovigy Enterprises. We offer comprehensive logistics management services to ensure efficient and timely delivery of your goods. Our professional team is committed to providing seamless, hassle-free solutions for your business.</p>
                            <hr/>
                            <div className="check-out-btn">
                                <div className="btn">
                                    <Link to="/">Check Out</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img-col">
                            <img src={constructionServ} alt="image" />
                        </div>
                        <div className="detail-col">
                            <h1>Construction Service</h1>
                            <p>Transform your ideas into reality with our top-notch construction services. We provide quality and durable construction solutions, tailored to meet your specific needs. Our team ensures timely delivery while adhering to the highest standards. Choose Franovigy Enterprises to build your projects with precision and expertise.</p>
                            <hr/>
                            <div className="check-out-btn">
                                <div className="btn">
                                    <Link to="/">Check Out</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-services">
                    <Link to="/">More Services</Link>
                    <div className="skew up"></div>
                    <div className="skew down"></div>
                </div>
            </section>
        </>
    );
}

export default Home;
