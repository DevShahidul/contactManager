import React, { Component } from 'react';

class Contact extends Component {
    state = {
        showInfo: false
    };

    showOnClick = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    };

    removeContact = () => {
       this.props.onDeleteHandler();
    }
    render(){
        const { name, email, phone, address } = this.props.contact;
        return(
            <div className="card card-body mt-3">
                <h2 className="card-title">
                    {name}
                    <span style={{cursor: 'pointer', marginLeft: '5px'}} onClick={this.showOnClick} ><i className="fas fa-sort-down"></i></span>
                    <span style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.removeContact} ><i className="fas fa-times"></i></span>
                </h2>
                {this.state.showInfo ? (<ul className="list-group">
                    <li className="list-group-item">
                        Email: {email}
                    </li>
                    <li className="list-group-item">
                        Phone: {phone}
                    </li>
                    <li className="list-group-item">
                        Address: {address}
                    </li>
                </ul>) : null}
            </div>
        )
    }
}

export default Contact;