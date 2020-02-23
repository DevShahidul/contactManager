import React, { Component } from 'react';

class Header extends Component {
    render(){
        return(
            <header className="navbar navbar-dark bg-success navbar-expand-lg">
                <div className="container">
                    <a href="/" className="navbar-brand">Contact Manager</a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">About</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header;