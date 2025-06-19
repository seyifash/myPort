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
            <div className="projects-descrip">
                <h4>PetPulse</h4>
                <p>An affiliate pet product website built with Next.js and Tailwind CSS. Users can browse and compare pet food and accessories; clicking a product redirects them to the actual affiliate store to make a purchase. Includes an admin dashboard for uploading products and blogs, managing content (CRUD), and updating profiles.
                </p>
                <div class="code">
                    <Link to="https://petpulse-phi.vercel.app/">View Project</Link>
                    <Link to="https://github.com/seyifash/petpulse.git">Source Code</Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Projects
