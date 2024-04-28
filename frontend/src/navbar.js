import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/jurassic">The Jurassic Intro</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/tectonics">Tectonics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/biosphere">Biosphere</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/atmosphere">Atmopshere</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/temperature">Temperature</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;