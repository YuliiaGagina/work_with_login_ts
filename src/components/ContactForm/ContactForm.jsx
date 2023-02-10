import { Component } from 'react';
import {Form, Title, Text, Input, Wrapper, Button} from './ContactForm.styled'
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onAddContact(contact);

    this.reset();
  };
  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>Contact list</Title>
        <Wrapper>
        <Text>Name</Text>
        <Input
          onChange={this.inputChange}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </Wrapper>
        <Wrapper>
        <Text>Number</Text>
        <Input
          onChange={this.inputChange}
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        </Wrapper>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
