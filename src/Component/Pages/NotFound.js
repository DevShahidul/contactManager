import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
    render() {
        return (
            <div className="container mt-5">
            <h2 className="display-4 text-danger">OPPS 404 error!</h2>
            <p className="lead">The existing page not found!</p>
            <p>Please go back to <Link to="/" className="text-success">home</Link></p>
        </div>
        )
    }
}
