import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './components/pages/homepage/home.jsx';
import AboutUs from './components/pages/aboutuspage/aboutUs.jsx';
import Contact from './components/pages/contact/contact.jsx';
import Events from './components/pages/eventspage/events.jsx';
import Services from './components/pages/servicespage/services.jsx';
import Videogallery from "./components/pages/video-gallerypage/videogallery.jsx";
import Portfolio from './components/pages/portfoliopage/portfolio.jsx';
import Footer from './components/footer/footer.jsx';
import Privacy_Policy from "./components/pages/privacypolicypage/privacy_Policy.jsx";
import TermsConditions from "./components/pages/terms&conditions/termsConditions.jsx";
import Refund_Policy from "./components/pages/refundpolicy/refundPolicy.jsx";
import Accessibility_Statement from "./components/pages/accesbilitystatement/accessibilityStatement.jsx";
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about_us" element={<AboutUs/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/events" element={<Events />}/>
                <Route path="/services" element={<Services />}/>
                <Route path="/video_gallery" element={<Videogallery/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/privacy_policy" element={<Privacy_Policy/>}/>
                <Route path="/terms_conditions" element={<TermsConditions/>}/>
                <Route path="/refund_policy" element={<Refund_Policy/>}/>
                <Route path="/accessibility_statement" element={<Accessibility_Statement/>}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
