import {Link} from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import addFormImage from "../../assets/add_form.png"

import './footer.css'

function Footer() {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="col col1">
                        <Link to={"/"}><p>Franovigy Enterprises Limited</p></Link>
                        <div className="address">
                            <p>+260 97 947 4830</p>
                            <p>info@mysite.com</p>
                            <p>Plot No. 6248, NAPSA Building</p>
                            <p>Jacaranda Road, Ridgeway</p>
                            <p>Lusaka, Zambia</p>
                        </div>
                        <div className="media-links">
                            <a href="http://www.facebook.com"><FaFacebookF /></a>
                            <a><FaInstagram /></a>
                            <a><BsTwitterX /></a>
                            <a><FaTiktok /></a>
                        </div>
                    </div>
                    <div className="col col2">
                        <h3>Your Success Partner</h3>
                        <Link>
                            <div className="form">
                                <div className="img">
                                    <img className="form-img" src={addFormImage} alt="image"/>
                                </div>
                                <div className="info">
                                    <p><b>Add Form</b></p>
                                    <p>Choose an existing form or create a new one.</p>
                                    <p>Click Here</p>
                                </div>
                            </div>
                        </Link>
                        <div className="legal">
                            <Link to={"/"}>Privacy Policy</Link>
                            <Link to={"/"}>Accessibility Statement</Link>
                            <Link to={"/"}>Terms & Conditions</Link>
                            <Link to={"/"}>Refund Policy</Link>
                        </div>
                        <p>&#169;2025 by Franovigy Enterprises Limited.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer