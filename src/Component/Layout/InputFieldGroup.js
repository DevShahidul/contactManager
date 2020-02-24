import React, { Component } from 'react'
import classnames from 'classnames';

export default class InputFieldGroup extends Component {
    render() {
        const { label, name, type, placeholder, onChange, value, error } = this.props;
        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input 
                    className={classnames("form-control form-control-lg", {
                        'is-invalid' : error
                    })} 
                    type={type} 
                    name={name} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={onChange} 
                />
                {error && (<div className="invalid-feedback">{error}</div>)}

            </div>
        )
    }
}

InputFieldGroup.defaultProps = {
    type: 'text'
}
