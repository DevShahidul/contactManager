import React, { Component } from 'react';
import axios from 'axios';
import InputFieldGroup from '../Layout/InputFieldGroup';
//import uuid from 'uuid';
import { Consumer } from '../../Context';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        address: '',
        error: {}
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone, address } = this.state;

        // Check error
        if(name === ''){
            this.setState({
                error: {name: 'Name is required'}
            });
            return;
        }

        if(email === ''){
            this.setState({
                error: {email: 'Email is required'}
            });
            return;
        }

        if(phone === ''){
            this.setState({
                error: {phone: 'Phone is required'}
            });
            return;
        }

        const newContact = {
            name,
            email,
            phone,
            address
        };

        axios.post('https://jsonplaceholder.typicode.com/users', newContact).then(res => dispatch({
            type: 'ADD_CONTACT',
            payload: res.data
        })); 

        this.setState({
            name: '',
            email: '',
            phone: '',
            address: '',
            error: {}
        });

        this.props.history.push('/');

    }

    render() {
        const { name, email, phone, address, error } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="container mt-5">
                            <div className="card w-100">
                                <div className="card-header">Add new contact</div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                        <InputFieldGroup name="name" label="Name" placeholder="Enter name" onChange={this.onChange} value={name} error={error.name}/>
                                        <InputFieldGroup name="email" label="Email" type="email" placeholder="Enter email" value={email} onChange={this.onChange} error={error.email}/>
                                        <InputFieldGroup name="phone" label="Phone" placeholder="Enter phone" value={phone}  onChange={this.onChange} error={error.phone}/>
                                        <div className="form-group">
                                            <label htmlFor="address">Address</label>
                                            <textarea className='form-control form-control-lg' name="address" placeholder="Enter your address"  onChange={this.onChange} value={address}></textarea>
                                        </div>
                                        <input className="btn btn-light btn-block" type="submit" value="Add contact"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;
