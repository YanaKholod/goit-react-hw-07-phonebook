import React from 'react';
import { Styled } from './StyleContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { addContact } from 'store/contactSlice';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };
    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (isExist) {
      return toast.warn(`${data.name} is already in contacts.`);
    }

    dispatch(addContact(data));
    e.currentTarget.reset();
  };
  return (
    <>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Label htmlFor={nanoid()}>
          Name
          <p>
            <Styled.Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id={nanoid()}
              required
            />
          </p>
        </Styled.Label>
        <Styled.Label htmlFor={nanoid()}>
          Number
          <p>
            <Styled.Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id={nanoid()}
              required
            />
          </p>
        </Styled.Label>
        <Styled.Button type="submit">Add contact</Styled.Button>
      </Styled.Form>
    </>
  );
};

export default ContactForm;
