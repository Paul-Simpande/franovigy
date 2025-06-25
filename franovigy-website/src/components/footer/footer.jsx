import {Link} from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import addFormImage from "../../assets/add_form.png"
import '../../scrollAnimation/scrollAnimation.css';
import './footer.css'
import {useEffect} from "react";

function Footer() {

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

    return(
        <>
            <footer>
                <div className="container">
                    <div className="col col1">
                        <Link to={"/"} className="scroll-animate left"><p>Franovigy Enterprises Limited</p></Link>
                        <div className="address scroll-animate left">
                            <p>+260 97 947 4830</p>
                            <p>info@mysite.com</p>
                            <p>Plot No. 6248, NAPSA Building</p>
                            <p>Jacaranda Road, Ridgeway</p>
                            <p>Lusaka, Zambia</p>
                        </div>
                        <div className="media-links">
                            <a className="scroll-animate up" href="http://www.facebook.com"><FaFacebookF /></a>
                            <a className="scroll-animate up"><FaInstagram /></a>
                            <a className="scroll-animate up"><BsTwitterX /></a>
                            <a className="scroll-animate up"><FaTiktok /></a>
                        </div>
                    </div>
                    <div className="col col2">
                        <h3 className="scroll-animate right">Your Success Partner</h3>
                        <Link>
                            <div className="form">
                                <div className="img scroll-animate right">
                                    <img className="form-img" src={addFormImage} alt="image"/>
                                </div>
                                <div className="info scroll-animate right">
                                    <p><b>Add Form</b></p>
                                    <p>Choose an existing form or create a new one.</p>
                                    <p>Click Here</p>
                                </div>
                            </div>
                        </Link>
                        <div className="legal">
                            <Link to={"/"} className="scroll-animate right">Privacy Policy</Link>
                            <Link to={"/"} className="scroll-animate right">Accessibility Statement</Link>
                            <Link to={"/"} className="scroll-animate right">Terms & Conditions</Link>
                            <Link to={"/"} className="scroll-animate right">Refund Policy</Link>
                        </div>
                        <p className="scroll-animate down">&#169;2025 by Franovigy Enterprises Limited.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer