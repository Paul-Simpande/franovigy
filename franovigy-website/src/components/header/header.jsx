// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navLinks from "../../constants/headerConstants/navLinks.js"; // external nav links
import './header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hideHeader, setHideHeader] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const location = useLocation();
    const navigate = useNavigate();

    // Toggle the hamburger menu
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    // Hide header on scroll down
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    setHideHeader(true);
                    setMenuOpen(false); // close menu when scrolling down
                } else {
                    setHideHeader(false);
                }
            } else {
                setHideHeader(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Reset menu and scroll position on route change
    useEffect(() => {
        setMenuOpen(false);
        setHideHeader(false);
        setLastScrollY(0);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <div className={`header ${hideHeader ? "hide" : ""}`}>
                <nav className="nav">
                    <div className="col">
                        <img src="/Franovigy.png" alt="logo" />
                        <p className="company-name">FRANOVIGY ENTERPRISES LIMITED</p>
                    </div>
                    <div className="col">
                        <button className="discover-btn" onClick={() => navigate("/services")}>
                            Discover Our Services
                        </button>
                    </div>
                    <div className="col menu">
                        <div className={`menu-icon ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                            <div className="line l1"></div>
                            <div className="line l2"></div>
                            <div className="line l3"></div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className={`menu-box ${menuOpen ? "active" : ""}`}>
                <ul className="menu-list">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Header;
