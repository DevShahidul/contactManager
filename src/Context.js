import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (action, state) => {
    switch(action.type){
        case 'DELETE_CONTACT' :
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        default :
            return state;
    }
}

class Provider extends Component {
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
        ],
        dispatch: action => this.setState(state => reducer(action, state))
    };

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Provider;

export const Consumer = Context.Consumer;

