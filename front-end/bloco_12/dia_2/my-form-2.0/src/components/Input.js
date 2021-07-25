import React from 'react';

class Input extends React.Component {
  render() {
    const { label, name, value, handleChange, type, handleCityChange } = this.props;
    return(
        <section>
        <label>{label}</label>
        <input 
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        onBlur={handleCityChange}
        required
        />
        </section>
    )
  }
}

export default Input;
