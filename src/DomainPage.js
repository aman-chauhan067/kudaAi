import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

// Domain descriptions and skills
const domainInfo = {
    "Software Engineer": {
        description: "A software engineer designs, develops, tests, and maintains software applications or systems.",
        skills: [
            "Strong programming skills (e.g., Java, Python, C++)",
            "Problem-solving and analytical thinking",
            "Understanding of software development life cycle (SDLC)",
            "Collaboration and communication"
        ]
    },
    "Data Scientist": {
        description: "Data scientists analyze and interpret complex data to help organizations make informed decisions.",
        skills: [
            "Proficiency in Python/R, SQL",
            "Knowledge of statistics and machine learning",
            "Data visualization skills",
            "Curiosity and critical thinking"
        ]
    },
    "AI/ML Engineer": {
        description: "An AI/ML engineer builds intelligent systems that can learn and make decisions.",
        skills: [
            "Strong understanding of ML algorithms",
            "Deep learning frameworks (e.g., TensorFlow, PyTorch)",
            "Applied math and statistics",
            "Ability to work with large datasets"
        ]
    },
    "Web Developer": {
        description: "Web developers build and maintain websites and web applications.",
        skills: [
            "Knowledge of HTML, CSS, JavaScript",
            "Familiarity with frontend or backend frameworks (React, Node.js, Django)",
            "Problem-solving and UI/UX understanding",
            "Version control (e.g., Git)"
        ]
    },
    "DevOps Engineer": {
        description: "DevOps engineers bridge the gap between development and IT operations to improve software delivery.",
        skills: [
            "CI/CD tools (e.g., Jenkins, GitHub Actions)",
            "Cloud platforms (AWS, Azure)",
            "Scripting and automation (Shell, Python)",
            "Attention to reliability and performance"
        ]
    },
    "Cybersecurity Analyst": {
        description: "Cybersecurity analysts protect systems and networks from cyber threats.",
        skills: [
            "Knowledge of network security, firewalls, encryption",
            "Risk assessment skills",
            "Familiarity with tools like Wireshark, Nessus",
            "Alertness and investigative mindset"
        ]
    },
    "UI/UX Designer": {
        description: "UI/UX designers focus on user experience and interface design for digital products.",
        skills: [
            "Design tools (Figma, Adobe XD)",
            "Understanding of user behavior",
            "Creativity and empathy",
            "Wireframing and prototyping"
        ]
    },
    "Doctor (General Practitioner)": {
        description: "A doctor diagnoses and treats common illnesses and provides preventive healthcare.",
        skills: [
            "Medical knowledge and degree (MBBS/MD)",
            "Compassion and communication",
            "Clinical decision-making",
            "Attention to patient care"
        ]
    },
    "Marketing Manager": {
        description: "A marketing manager creates and oversees campaigns to promote products or services.",
        skills: [
            "Creativity and strategic thinking",
            "Knowledge of digital and traditional marketing",
            "Communication and leadership",
            "Data analysis and customer insight"
        ]
    },
    "Business Analyst": {
        description: "Business analysts identify business needs and provide solutions through data and processes.",
        skills: [
            "Analytical thinking",
            "Requirement gathering and documentation",
            "Tools like Excel, Tableau, SQL",
            "Communication with stakeholders"
        ]
    },
    "Graphic Designer": {
        description: "A graphic designer creates visual content for branding, advertising, and digital media.",
        skills: [
            "Creativity and artistic sense",
            "Proficiency in Adobe Suite (Photoshop, Illustrator)",
            "Attention to detail",
            "Understanding of branding and layout"
        ]
    },
    "Information Technology": {
        description: "IT professionals manage and support computer systems, networks, and ensure organizational tech infrastructure runs smoothly.",
        skills: [
            "Network administration",
            "System maintenance",
            "IT security",
            "Technical support"
        ]
    },
    "Software Developer": {
        description: "Software developers design, develop, test, and maintain software applications or systems.",
        skills: [
            "Programming languages (Java, Python, C++)",
            "SDLC understanding",
            "Problem-solving",
            "Version control (Git)"
        ]
    },
    "Data Analyst": {
        description: "Data analysts collect, clean, and interpret complex datasets to help organizations make informed decisions.",
        skills: [
            "Proficiency in Python/R",
            "SQL querying",
            "Data visualization",
            "Statistical analysis"
        ]
    },
    "Healthcare & Medicine": {
        description: "Healthcare professionals diagnose, treat, and care for patients, promoting health and well-being.",
        skills: [
            "Medical knowledge",
            "Clinical decision-making",
            "Patient communication",
            "Preventive care"
        ]
    }
};

export default function DomainPage({ darkMode, toggleDarkMode }) {
    const { domainName } = useParams();
    const decoded = decodeURIComponent(domainName);
    const info = domainInfo[decoded] || { description: "Information not available.", skills: [] };
    const fileInput = useRef();
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
        if (e.type === "dragleave") setDragActive(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const files = e.dataTransfer.files;
        console.log("Dropped files:", files);
        // TODO: process files...
    };

    return (
        <>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <main className="domain-main">
                <h2 className="domain-title">{decoded}</h2>

                <div className="domain-info">
                    <p>{info.description}</p>
                    {info.skills.length > 0 && (
                        <>
                            <h3>Key Qualities/Skills:</h3>
                            <ul>
                                {info.skills.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>

                <div
                    className={`drop-zone ${dragActive ? "active" : ""}`}
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInput.current.click()}
                >
                    <input
                        type="file"
                        ref={fileInput}
                        className="hidden-file-input"
                        onChange={(e) => console.log("Selected:", e.target.files)}
                    />
                    <div className="drop-content">
                        <div className="cloud-icon">☁️</div>
                        <p>Drag and drop here</p>
                        <p>or</p>
                        <button className="browse-btn">Browse here</button>
                    </div>
                </div>
            </main>
        </>
    );
}