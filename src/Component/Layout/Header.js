import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <header className="navbar navbar-dark bg-success navbar-expand-lg">
                <div className="container">
                    <a href="/contactManager" className="navbar-brand">Contact Manager</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link">Add contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header;