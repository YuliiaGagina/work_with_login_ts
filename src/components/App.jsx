import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import storage from 'helpers/storage';

const CONTACTS = [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},];

export function App(){
  const [contacts, setContacts] = useState(()=>storage.load('contacts-list') ?? CONTACTS);
  const [filter, setFilter] = useState('');

  
  useEffect(()=>{
  storage.save('contacts-list', contacts);
  }, [contacts])

 const addContact = contact => {
    if (contacts.some(p => p.name === contact.name)) {
      alert(`Friend ${contact.name} is already exists!`);
      return;
    }

    setContacts(prevState =>
      [...prevState, {...contact, id: nanoid()}],
    );
  };
 const onFilterContacts = ({ target: { value } }) => {
    setFilter(value)
  };
 const deleteContact = contactId => {
   setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  
    const filteredContacts = contacts.filter(contact =>
      contact.name 
        .toLowerCase() 
        .trim() 
        .includes(filter.toLowerCase())
    );
   
     
    return (
      <>
        <ContactForm onAddContact={addContact} />

        <Filter
          onFilterChange={onFilterContacts}
          value={filter}
        />

        <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      </>
    );
  
}
