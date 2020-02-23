import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../Context';

class Contacts extends Component {
    
    render(){
        
        return(
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return(
                        <div className="container mt-5">
                            <h1><span className="text-success">Contacts</span> list</h1>
                            {
                            contacts.map(
                                    contact => <Contact key={contact.id} contact={contact} />
                                )
                            }
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
export default Contacts;