import "./project.css";
import React from "react";
import 'boxicons/css/boxicons.min.css'; 
import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-contain">
            <h2>Recent Projects</h2>
            <div className="projects-descrip">
                <h4>Shoppers</h4>
                <p>An e-commerce platform, seamlessly integrates JavaScript, HTML, and CSS for the frontend, offering a user-friendly experience for both merchants and buyers. 
                    Powered by Python, Flask, and SQLAlchemy, it empowers merchants to 
                    effortlessly upload their goods while providing buyers with a centralized hub to explore and purchase products. This platform fosters a dynamic online marketplace,
                    enhancing accessibility and convenience for all users
                </p>
                <div class="code">
                    <Link to="">View Project</Link>
                    <Link to="https://github.com/seyifash/Shoppers">Source Code</Link>
                </div>
            </div>
            <div className="projects-descrip">
                <h4>Learners</h4>
                <p>Contributed as the frontend developer for the “Learners” project, a web-based application designed to streamline communication between teachers and students
                </p>
                <div className="code">
                    <Link to="https://learner-one.vercel.app">View Project</Link>
                    <Link to="https://github.com/seyifash/Learner.git">Source Code</Link>
                </div>
            </div>
            <div className="projects-descrip">
                <h4>Shoppers</h4>
                <p>An E-commerce website design that provides an interactive interface creating a seamless user
                    experience using only HTML Javascript and CSS.
                </p>
                <div class="code">
                    <Link to="https://seyifash.github.io/demo_shoppers/">View Project</Link>
                    <Link to="https://github.com/seyifash/demo_shoppers">Source Code</Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Projects
