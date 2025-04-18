import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Home({ darkMode, toggleDarkMode }) {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const domains = [
        "Software Engineer",
        "Healthcare & Medicine",
        "Data Scientist",
        "UI/UX Designer",
        "AI/ML Engineer",
        "Web Developer",
        "DevOps Engineer",
        "Cybersecurity Analyst",
        "Doctor (General Practitioner)",
        "Marketing Manager",
        "Business Analyst",
        "Graphic Designer",
        "Information Technology",
        "Software Developer",
        "Data Analyst",
    ];

    const matches = query
        ? domains.filter((d) => d.toLowerCase().startsWith(query.toLowerCase()))
        : [];

    const handleSearch = () => {
        if (domains.includes(query)) {
            navigate(`/domain/${encodeURIComponent(query)}`);
        }
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <main className="main">
                <div className="intro text-center">
                    <h1>RESUME ANALYSER</h1>
                    <p>
                        <span role="img" aria-label="magic wand">🪄</span>
                        Select or search your preferred job domain for tailored insights
                    </p>
                </div>

                <div className="search-wrapper">
                    <div className="search-container">
                        <span
                            role="img"
                            className="search-icon"
                            onClick={handleSearch}
                            style={{ cursor: "pointer" }}
                        >
                            🔍
                        </span>
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={onKeyDown}
                            placeholder="Type here..."
                        />
                    </div>
                    {matches.length > 0 && (
                        <ul className="suggestions-list">
                            {matches.map((d) => (
                                <li
                                    key={d}
                                    onClick={() => setQuery(d)}
                                >
                                    {d}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="cards-grid">
                    {domains.slice(0, 6).map((d) => (
                        <Link key={d} to={`/domain/${encodeURIComponent(d)}`} className="card">
                            {d}
                        </Link>
                    ))}
                </div>
            </main>
        </>
    );
}