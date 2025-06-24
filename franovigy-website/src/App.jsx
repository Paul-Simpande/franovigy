import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './components/pages/homepage/home.jsx';
import Footer from './components/footer/footer.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
