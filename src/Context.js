import React, { Component } from 'react';
import axios from "axios";

const Context = React.createContext();

const reducer = (action, state) => {
    switch(action.type){
        case 'DELETE_CONTACT' :
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT' :
            return{
                ...state,
                contacts: [
                    action.payload,
                    ...state.contacts
                ]
            };
        case 'EDIT_CONTACT' :
            return{
                ...state,
                contacts: [
                    action.payload,
                    ...state.contacts
                ]
            };
        default :
            return state;
    }
}


class Provider extends Component {
   async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    
        this.setState({
            contacts: res.data
        })

        console.log(res.data)
    }

    state = {
        contacts: [],
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

