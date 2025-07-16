// src/components/shared/NotFound.jsx

import { useNavigate } from "react-router-dom";
import "./notfound.css";

function NotFound({ message = "Page not found", showBackButton = true }) {
    const navigate = useNavigate();

    return (
        <section className="not-found">
            <div className="container">
                <h1>404</h1>
                <p>{message}</p>
                {showBackButton && (
                    <button onClick={() => navigate(-1)} className="back-btn">
                        Go Back
                    </button>
                )}
            </div>
        </section>
    );
}

export default NotFound;
