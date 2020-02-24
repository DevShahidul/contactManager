import React, { Component } from 'react'

export default class InputFieldGroup extends Component {
    render() {
        const { label, name, type, placeholder, onChange, value } = this.props;
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input className="form-control form-control-lg" type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
        )
    }
}

InputFieldGroup.defaultProps = {
    type: 'text'
}
