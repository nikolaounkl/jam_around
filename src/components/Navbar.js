import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="hero-head">
            <header className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">
                            <img src="jam_logo.png" alt="Logo" />
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
