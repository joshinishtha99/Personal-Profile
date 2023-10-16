import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
export default function Header() {
    return (
        <header>
            <h1>Nishtha Joshi</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Profile</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>    
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li>    
                </ul>
            </nav>
        </header>
    );
}

