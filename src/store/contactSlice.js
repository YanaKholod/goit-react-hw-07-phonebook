import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchingData = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await fetch(
        'https://642162bb86992901b2b2128d.mockapi.io/api/contacts'
      );

      if (!response.ok) {
        throw new Error('Oops, server error');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newData => {
    try {
      const response = await fetch(
        `https://642162bb86992901b2b2128d.mockapi.io/api/contacts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newData),
        }
      );
      if (!response.ok) {
        throw new Error('Can`t add todo');
      }
      const addedData = await response.json();
      return addedData;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const response = await fetch(
        `https://642162bb86992901b2b2128d.mockapi.io/api/contacts/${id}`,
        { method: 'DELETE' }
      );
      if (!response.ok) {
        throw new Error('Can`t delete todo');
      }
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const contactSlice = createSlice({
  name: 'phoneBook',
  initialState: {
    contacts: [],
    status: null,
    error: null,
  },
  filter: '',
  extraReducers: {
    [fetchingData.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchingData.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.contacts = action.payload;
    },
    [fetchingData.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [deleteContact.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [addContact.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.contacts = [action.payload, ...state.contacts];
    },
  },
});

export const contactsReducer = contactSlice.reducer;
