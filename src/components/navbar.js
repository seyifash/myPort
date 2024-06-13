import React,  {useState, useEffect} from "react";
import { Link, useLocation} from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import "./NavbarStyle.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(prevState => !prevState);

    const location = useLocation();

    useEffect(() => {
        setClick(false);
    }, [location]);

    return (
        <div className="header">
            <Link to="/">
                <h1>Portfolio.</h1>
            </Link>
            <ul className={`nav-menu ${click ? "active" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="hambur" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style={{ color: "#FFF"}} />
            ) : (
            <div className="hamburger">
            </div>)}
            </div>
        </div>
    );
};

export default Navbar