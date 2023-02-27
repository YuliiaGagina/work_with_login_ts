import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const instance = axios.create({
    baseURL: 'https://63fc9ff48ef914c5559bab4d.mockapi.io/',
   
  });


export const getContcts = createAsyncThunk("contacts/fetchAllcontacts", async () => {
  const response = await instance.get("/friends");
  return response.data;
});

export const deleteContacts = createAsyncThunk("contacts/deleteContacts", async (contactId, ) => {
    const response = await instance.delete(`/friends/${contactId}`);
    return response.data;
  });

  export const addContacts = createAsyncThunk("contacts/addContacts", async (contact ) => {
    const response = await instance.post(`/friends`, contact);
    return response.data;
  });