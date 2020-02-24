import React, { Component } from 'react'
import InputFieldGroup from '../Layout/InputFieldGroup';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        address: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { name, email, phone, address } = this.state;
        return (
            <div className="container mt-5">
                <div className="card w-100">
                    <div className="card-header">Add new contact</div>
                    <div className="card-body">
                        <form>
                            <InputFieldGroup name="name" label="Name" placeholder="Enter name" onChange={this.onChange} value={name} />
                            <InputFieldGroup name="email" label="Email" type="email" placeholder="Enter email" value={email} onChange={this.onChange} />
                            <InputFieldGroup name="phone" label="Phone" placeholder="Enter phone" value={phone}  onChange={this.onChange}/>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <textarea className="form-control form-control-lg" name="address" placeholder="Enter your address"  onChange={this.onChange} value={address}></textarea>
                            </div>
                            <input className="btn btn-light btn-block" type="submit" value="Add contact"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContact;
