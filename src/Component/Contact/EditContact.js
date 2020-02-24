import React, { Component } from 'react'
import InputFieldGroup from '../Layout/InputFieldGroup';
import axios from 'axios';
//import uuid from 'uuid';
import { Consumer } from '../../Context';

class EditContact extends Component {
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

    async componentDidMount(){
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contacts = res.data;
        const { street, suite, city, zipcode } = contacts.address;

        this.setState({
            name: contacts.name,
            email: contacts.email,
            phone: contacts.phone,
            address: street + ', ' + suite + ', ' + city + ', Zip: ' +zipcode
        })


    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

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
                                <div className="card-header">Edit contact</div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                        <InputFieldGroup name="name" label="Name" placeholder="Enter name" onChange={this.onChange} value={name} error={error.name}/>
                                        <InputFieldGroup name="email" label="Email" type="email" placeholder="Enter email" value={email} onChange={this.onChange} error={error.email}/>
                                        <InputFieldGroup name="phone" label="Phone" placeholder="Enter phone" value={phone}  onChange={this.onChange} error={error.phone}/>
                                        <div className="form-group">
                                            <label htmlFor="address">Address</label>
                                            <textarea className='form-control form-control-lg' name="address" placeholder="Enter your address"  onChange={this.onChange} value={address}>{address}</textarea>
                                        </div>
                                        <input className="btn btn-light btn-block" type="submit" value="Update contact"/>
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

export default EditContact;
