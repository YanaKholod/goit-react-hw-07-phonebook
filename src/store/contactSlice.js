import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: [
      { id: 'cont1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'cont2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'cont3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'cont4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactSlice.reducer;

export const { addContact, deleteContact } = contactSlice.actions;
