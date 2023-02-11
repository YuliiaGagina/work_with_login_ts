import {Title, List, Item, Button } from './ContactList.styled';
import PropTypes from 'prop-types';
function ContactList({ contacts, deleteContact }) {
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
                <Button  onClick={()=>{deleteContact(id)}}>Delete</Button>
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
