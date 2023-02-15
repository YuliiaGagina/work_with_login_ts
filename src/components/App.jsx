import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import storage from 'helpers/storage';

const CONTACTS = [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},];

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
   
  };
  componentDidMount() {
    const savedContacts = storage.load('contacts-list') ?? CONTACTS;
    this.setState({ contacts: savedContacts });
  }
  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      storage.save('contacts-list', contacts);
     
    }
  }

  addContact = contact => {
    if (this.state.contacts.some(p => p.name === contact.name)) {
      alert(`Friend ${contact.name} is already exists!`);
      return;
    }

    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState({
      contacts: [finalContact, ...this.state.contacts],
    });
  };
  onFilterContacts = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };
  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name 
        .toLowerCase() 
        .trim() 
        .includes(this.state.filter.toLowerCase())
    );
   
     
    return (
      <>
        <ContactForm onAddContact={this.addContact} />

        <Filter
          onFilterChange={this.onFilterContacts}
          value={this.state.filter}
        />

        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </>
    );
  }
}
