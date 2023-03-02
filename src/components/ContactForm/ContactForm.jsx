import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
import { getIsloading } from 'redux/selectors';
import { useState } from 'react';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';


import {
  Form,
  Title,
  Text,
  Input,
  Wrapper,
  Button,
} from './ContactForm.styled';
export function ContactForm({onAddContact}) {
  const isLoading = useSelector(getIsloading);
   const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  

  const inputChange = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: formData.name,
      number: formData.number,
      
      
    };

   
    if (contacts.some(p => p.name === contact.name)) {
      alert(`Friend ${contact.name} is already exists!`);
      return;
    }
    dispatch(addContacts( contact));
    
    reset();
  };
  const reset = () => {
    setFormData({
      name: '',
      number: '',
    });
  };

  return (
    <>
    {isLoading && <Loader/>}
    <Form onSubmit={handleSubmit}>
      <Title>Add your friend</Title>
      <Wrapper>
        <Text>Name</Text>
        <Input
          onChange={inputChange}
          value={formData.name}
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
          onChange={inputChange}
          value={formData.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Wrapper>
      <Button type="submit">Add contact</Button>
    </Form>
    </>
  );
}
