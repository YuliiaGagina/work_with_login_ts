import {Title, List, Item, Button } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selector';
import { deleteContact } from 'redux/contactsSlice';
function ContactList() {

  // const contacts = useSelector(state => state.contacts.contacts );
  
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  return (
    <div>
        <Title>Contacts</Title>
      {contacts.length > 0 && (
        <List>
          {contacts.map(({name, number, id}) => {
            return (
              <Item key={name}>
                <p>{name}:</p>
                <p>{number}</p>
                <Button  onClick={()=>{dispatch(deleteContact(id))}}>Delete</Button>
               </Item>
              
              
            );
          })}
        </List>
      )}
    </div>
  );
}
ContactList.propTypes ={
    contacts: PropTypes.array.isRequired,
}
export default ContactList;
