import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: '1',
                name: 'Shahidul Islam',
                email: 'ishahin56@gmail.com',
                phone: '+880 1620 290055',
                address: 'Bhatara, Bhatara, Sarishabari, Jamalpur, Bangladesh'
            },
            {
                id: '2',
                name: 'Shepon Islam',
                email: 'shepon@gmail.com',
                phone: '+880 1610 290056',
                address: 'Bhatara, Bhatara, Sarishabari, Jamalpur, Bangladesh'
            },
            {
                id: '3',
                name: 'Sohag Islam',
                email: 'sohag@gmail.com',
                phone: '+880 1966 894700',
                address: 'Bhatara, Bhatara, Sarishabari, Jamalpur, Bangladesh'
            }
        ]
    };

    deleteContact = (id) => {
        const { contacts } = this.state;
        const newContact = contacts.filter(contact => contact.id !== id);
        this.setState({
            contacts: newContact
        })
    }

    render(){
        const { contacts } = this.state;
        return(
            <div className="container mt-5">
                <h1><span className="text-success">Contacts</span> list</h1>
                {
                contacts.map(
                        contact => <Contact key={contact.id} contact={contact} onDeleteHandler={this.deleteContact.bind(this, contact.id)}/>
                    )
                }
            </div>
        )
    }
}
export default Contacts;