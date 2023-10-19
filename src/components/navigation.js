import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">Links</Link>
                </li>
                <li>
                    <Link  to="/stuff">Stuff</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;