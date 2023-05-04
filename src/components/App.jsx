import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Styled } from './StyleApp';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <Styled.AppWrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </Styled.AppWrapper>
  );
};
