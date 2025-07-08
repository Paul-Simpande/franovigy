import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './components/pages/homepage/home.jsx';
import AboutUs from './components/pages/aboutuspage/aboutUs.jsx';
import Contact from './components/pages/contact/contact.jsx';
import Events from './components/pages/eventspage/events.jsx';
import Services from './components/pages/servicespage/services.jsx';
import Videogallery from "./components/pages/video-gallerypage/videogallery.jsx";
import Footer from './components/footer/footer.jsx';
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
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
