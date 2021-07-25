import React from 'react';
import Input from './Input';
import Select from './Select';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  typeOfResidence: '',
}
const campos = ['city', 'email', 'cpf'];
const limites = [28, 50, 11]

class Form extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }

//   handleNameChange(event) {
//     console.log(event.target.value)
//     this.setState({ name: event.target.value })
//   }

//   handleEmailChange(event) {
//     this.setState({ email: event.target.value })
//   }

  handleChange({target}) {
    const { name , value } = target;

    campos.forEach((campo, index) => {
      if(name === campo && value.length > limites[index]) {
        alert(`Mais de ${limites[index]} caracteres`);
        return;
      }
    })

    this.setState({ [name]: value })
  }

  handleNameChange({ target }) {
    const { name , value } = target;
    this.setState({ [name]: value.toUpperCase() })
    if (value.length > 40) {
      alert('Mais de 40 caracteres');
      return;
    }
  }

  handleAddressChange({ target }) {
    const { name , value } = target;
    //Referencia para remover caracteres especiais https://www.codegrepper.com/code-examples/javascript/remove+special+characters+from+react
    this.setState({ [name]: value.replace(/[^a-zA-Z ]/g, "") })
    if (value.length > 200) {
      alert('Mais de 200 caracteres');
      return;
    }
  }

  handleCityChange({target}) {
    const { name , value } = target;
    const numbers = ['0', '1','2','3','4','5','6','7','8','9'];
    numbers.forEach((number) => {
      if (value[0] === number) {
        this.setState({ [name]: '' })
        return;
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(INITIAL_STATE);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Informacoes basicas</legend>

            <Input 
            label = 'Name'
            name='name' 
            value={this.state.name}
            handleChange={this.handleNameChange}
            type='text'/>

            <Input
            label = 'Email'
            name='email' 
            value={this.state.email}
            handleChange={this.handleChange}
            type='email'/>

            <Input
            label = 'CPF'
            name='cpf' 
            value={this.state.cpf}
            handleChange={this.handleChange}
            type='text'/>

            <Input
            label = 'Endereco'
            name='address' 
            value={this.state.address}
            handleChange={this.handleAddressChange}
            type='text'/>

            <Input
            label = 'Cidade'
            name='city' 
            value={this.state.city}
            handleChange={this.handleChange}
            handleCityChange={this.handleCityChange}
            type='text'/>

            <Select
            label='Estado'
            name='state'
            value={this.state.state}
            handleChange={this.handleChange}
            options={['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']}
            />
            <section>
                <label>Tipo</label>
                <br></br>
                <input type='radio' value='Casa' name='typeOfResidence' onChange={this.handleChange}/>Casa
                <input type='radio' value='Apartamento' name='typeOfResidence' required={true} onChange={this.handleChange}/>Apartamento
            </section>
          </fieldset>

          <button type='submit' >Cadastrar</button>
      </form>
    )
  }
}

export default Form;
