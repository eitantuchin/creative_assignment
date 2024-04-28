import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/store">My Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-product">Create a Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/delete-product">Delete a Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/update-product">Update a Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/student-info">Student Info</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;