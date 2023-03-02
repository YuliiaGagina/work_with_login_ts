import {ContactForm } from '../ContactForm/ContactForm';
import  ContactList  from 'components/ContactList/ContactList';
import Filter  from '../Filter/Filter';
// import { addFilter } from 'redux/filterSlice';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getFriends } from'redux/operations';
import { useSelector } from 'react-redux';
import {getIsloading} from 'redux/selectors';
import {Loader} from 'components/Loader/Loader';
import {Wrapper} from './Friends.styled'

// import Filter from './../Filter/Filter';


export function Friends() {
  const isLoading = useSelector(getIsloading);
//   const dispatch = useDispatch();
//   useEffect(() => {
//    dispatch(getFriends())
//   }, [dispatch]);

  return (
    <>
    {isLoading && <Loader />}
     
      <Wrapper>
      <div>
      <ContactForm />
      </div>
      <div> <Filter/>
        <ContactList /></div>
      </Wrapper>
      
     
       
    </>
  );
}
