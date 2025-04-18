import React from "react";
import { Link } from "react-router-dom";

export default function Header({ darkMode, toggleDarkMode }) {
    return (
        <header className="header">
            <div className="logo">LOGO</div>
            <nav className="nav">
                <Link to="/">Home</Link>
            </nav>
            <button className="dark-toggle" onClick={toggleDarkMode}>
                {darkMode ? "🌞" : "🌙"}
            </button>
        </header>
    );
}