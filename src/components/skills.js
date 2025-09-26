import React from "react";
import "./skills.css";
import hcon from "../assets/logohtml.png";
import ccon from "../assets/logocss.png";
import jcon from "../assets/logojava.png";
import pcon from "../assets/logopython.png";
import rcon from "../assets/logoreact.png";



const Skill = () => {
    return (
        <div className="skills">
            <h2 className="head-line">
                    My Skills
            </h2>
            <div className="skill-set">
                <p className="desc">
                    Frontend Developer with 3 years of experience building responsive, 
                    user-friendly web applications. Proficient in JavaScript (ES6+), 
                    React, Next.js, HTML, CSS, and TailwindCSS. Skilled in state 
                    management with Redux, Zustand, and Context API, and experienced 
                    in integrating RESTful APIs. Adept at creating performant, 
                    accessible, and visually appealing interfaces, with strong 
                    knowledge of Git, VS Code, and modern development workflows.
                </p>
                <div className="lang-icon">
                    <div className="lang-1">
                        <img src={rcon} alt="html-logo"/>
                    </div>
                    <div className="lang-1">
                        <img src={hcon} alt="html-logo"/>
                    </div>
                    <div className="lang-1">
                        <img src={ccon} alt="html-logo"/>
                    </div>
                    <div className="vert-lang">
                        <div className="lang-2">
                            <img src={jcon} alt="html-logo"/>
                        </div>
                        <div className="lang-2">
                            <img src={pcon} alt="html-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill
