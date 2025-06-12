import { useState } from "react";
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };
    return (
        <>
            <div className="header">
                <nav className="nav">
                    <div className="col">
                        <img src="/Franovigy.png" alt="logo" />
                        <p className="company-name">FRANOVIGY ENTERPRISES</p>
                    </div>
                    <div className="col">
                        <button className="discover-btn">Discover Our Services</button>
                    </div>
                    <div className="col menu">
                        <div className={`menu-icon ${menuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}>
                            <div className="line l1"></div>
                            <div className="line l2"></div>
                            <div className="line l3"></div>
                        </div>
                        <div className={`menu-box ${menuOpen ? 'active' : ''}`}>
                        <ul className="menu-list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/video_gallery">Video Gallery</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/search_results">Search Results</Link></li>
                                <li><Link to="/book_online">Book Online</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Header