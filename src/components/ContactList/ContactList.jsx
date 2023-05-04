import { useDispatch, useSelector } from 'react-redux';
import { Styled } from './StyleContactList';
import { deleteContact } from 'store/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  if (!filteredContacts?.length) {
    return <div>No contacts found.</div>;
  }

  return (
    <Styled.List>
      {filteredContacts.map(({ id, name, number }) => (
        <Styled.Item key={id}>
          <div>
            {name}: {number}
          </div>
          <Styled.Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Styled.Button>
        </Styled.Item>
      ))}
    </Styled.List>
  );
};
