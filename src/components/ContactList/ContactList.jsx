import {Title, List, Item} from './ContactList.styled';
import PropTypes from 'prop-types';
function ContactList({ contacts }) {
  return (
    <div>
        <Title>Contacts</Title>
      {contacts.length > 0 && (
        <List>
          {contacts.map(({ name, number }) => {
            return (
              <Item key={name}>
                <p>{name}:</p>
                <p>{number}</p>
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
