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
                <h4>Learners – Online Exam Platform</h4>
                <p>
                    Worked as the Frontend Developer, building an educational platform that enables teachers to create and manage timed tests/exams remotely while students take them using unique access codes. Built with React, Vite, and CSS, using Redux for predictable state management. Integrated API calls for exam setup, submissions, and scoring. Delivered features such as teacher dashboards, instant scoring with results display, community question bank reuse, and real-time exam monitoring.
                </p>
                    
                <div className="code">
                    <Link to="https://app.buildeapp.org/">View Project</Link>
                    <Link to="https://github.com/seyifash/Learner.git">Source Code</Link>
                </div>
            </div>
            <div className="projects-descrip">
                <h4>Shoppers – Multi-Vendor E-Commerce Platform</h4>
                <p>Worked as the Frontend Developer, building vendor and customer interfaces with React (Vite) and CSS. Integrated Paystack multisplit payments, 2FA authentication, dark/light mode, and real-time notifications. Managed application state with Zustand while consuming backend APIs for products, orders, and vendor operations.
                </p>
                <div class="code">
                    <Link to="https://shopit.buildeapp.org/">View Project</Link>
                    <Link to="https://github.com/seyifash/MPEcomm.git">Source Code</Link>
                </div>
            </div>
            <div className="projects-descrip">
                <h4>Fastrasuite – ERP Management Platform</h4>
                <p>A web-based ERP solution designed to streamline business operations such as purchases, invoicing, vendor management, and multi-level approvals. Built with React, Next.js, CSS, and TailwindCSS, using Context API for global state management and role-based access. Delivered modular UI components, approval workflows, and scalable designs integrated with backend APIs for efficient enterprise resource planning.
                </p>
                <div class="code">
                    <Link to="https://app.fastrasuite.com/">View Project</Link>
                </div>
            </div>

            <div className="projects-descrip">
                <h4>Elsa David – Portfolio Website</h4>
                <p>A modern personal portfolio built with React, Vite, and TailwindCSS. Designed with a focus on clean UI/UX and responsive layouts. A website development, showcasing branding and project highlights with a dynamic, scalable frontend architecture</p>
                <div class="code">
                    <Link to="https://elsa-dave-portfolio.vercel.app/">View Project</Link>
                     <Link to="https://github.com/seyifash/ElsaDave-portfolio.git">Source Code</Link>
                </div>
            </div>
            <div className="projects-descrip">
                <h4>Adeola – Portfolio Website</h4>
                <p>A fast, SEO-optimized portfolio designed to highlight personal branding and projects. Built with Next.js and pure CSS, emphasizing performance, accessibility, and a polished professional look across devices.</p>
                <div class="code">
                    <Link to="https://adeola-portfolio-peach.vercel.app/">View Project</Link>
                     <Link to="https://github.com/seyifash/Adeola-portfolio.git">Source Code</Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Projects
