// import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './user/operations';

export const getContcts = createAsyncThunk('people/getAll', async () => {
  const response = await instance.get('/table/');
  return response.data.results;
});

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async contactId => {
    const response = await instance.delete(`/table/${contactId}/`);
    return response.data;
  }
);

export const ChangeContact = createAsyncThunk(
  'contacts/changeContact',
  async ({ contactId, ContactData }) => {
    const response = await instance.patch(`/table/${contactId}/`, ContactData);
    return response.data;
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    const response = await instance.post(`/table/`, contact);

    return response.data;
  }
);
