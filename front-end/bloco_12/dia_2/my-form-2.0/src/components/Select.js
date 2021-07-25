import React from 'react';

class Select extends React.Component {
  render() {
    const { label, name, value, handleChange, options } = this.props;
    return(
        <section>
            <label>{label}</label>
            <select
            name={name}
            value={value}
            onChange={handleChange}>
            {options.map((option) => <option value={option} key={option}>{option}</option>)}
            </select>
        </section>
    )
  }
}

export default Select;
