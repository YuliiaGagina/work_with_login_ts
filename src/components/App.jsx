import { ContactForm } from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export function App() {
  return (
    <>
      <ContactForm />

      <Filter />

      <ContactList />
    </>
  );
}
