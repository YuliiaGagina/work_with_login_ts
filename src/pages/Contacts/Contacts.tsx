import { ContactForm } from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
// import { addFilter } from 'redux/filterSlice';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getFriends } from'redux/operations';
import { useSelector } from 'react-redux';
import { getIsloading } from '../../redux/selectors';
import { Loader } from '../../components/Loader/Loader';
import { Wrapper, FilterConractWrap } from './Friends.styled';

import { useDispatch } from 'react-redux';
import { getContcts } from '../../redux/operations';
import { useEffect } from 'react';

export function Contacts() {
  const isLoading = useSelector(getIsloading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContcts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}

      <Wrapper>
        <div>
          <ContactForm />
        </div>
        <FilterConractWrap>
          <Filter />
          <ContactList />
        </FilterConractWrap>
      </Wrapper>
    </>
  );
}
