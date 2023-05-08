import { useDispatch, useSelector } from 'react-redux';
import { Styled } from './StyleContactList';
import { useEffect } from 'react';
import { deleteContact, fetchingData } from 'store/contactSlice';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'store/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const status = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingData());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
    dispatch(fetchingData());
  };
  return (
    <>
      {!filteredContacts?.length && !error && !status && (
        <div>No contacts found.</div>
      )}
      {error && <div>{error}</div>}
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
    </>
  );
};
