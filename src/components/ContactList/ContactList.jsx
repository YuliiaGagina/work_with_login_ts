import {Title, List, Item, Button } from './ContactList.styled';

import { useSelector,  } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selector';

import { getContcts } from 'redux/operations';
import { useEffect } from 'react';
import { deleteContacts } from 'redux/operations';

function ContactList() {



const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();
  
 const handleDelete = (id) => {
    dispatch(deleteContacts(id));
  };

 
  useEffect(() => {
   dispatch(getContcts())
  }, [dispatch]);

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
                <Button  onClick={()=> handleDelete(id) }>Delete</Button>
               </Item>
              
              
            );
          })}
        </List>
      )}
    </div>
  );
}

export default ContactList;
