import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Consumer } from '../../Context';

class Contact extends Component {
    state = {
        showInfo: false
    };

    showOnClick = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    };

    onDeleteContact = async (dispatch, id) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    }

    render(){
        const { id, name, email, phone, address } = this.props.contact;

        return(
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card card-body mt-3">
                            <h2 className="card-title">
                                {name}
                                <span style={{cursor: 'pointer', marginLeft: '5px'}} onClick={this.showOnClick} ><i className="fas fa-sort-down"></i></span>
                                <span style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.onDeleteContact.bind(this, dispatch, id)} ><i className="fas fa-times"></i></span>
                                <Link to={`/contact/edit/${id}`} style={{cursor: 'pointer', float: 'right', marginRight: '10px', fontSize: '1.5rem', lineHeight: '38px', color: 'black'}} ><i className="fas fa-pencil-alt"></i></Link>
                            </h2>
                            {this.state.showInfo ? (<ul className="list-group">
                                <li className="list-group-item">
                                    Email: {email}
                                </li>
                                <li className="list-group-item">
                                    Phone: {phone}
                                </li>
                                <li className="list-group-item">
                                    Address: {JSON.stringify(address)}
                                </li>
                                
                            </ul>) : null}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contact;