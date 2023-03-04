// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./user/operations";




export const getContcts = createAsyncThunk("contacts/getAll", async () => {
  const response = await instance.get("/contacts");
  return response.data;
});

export const deleteContacts = createAsyncThunk("contacts/deleteContacts", async (contactId, ) => {
    const response = await instance.delete(`/contacts/${contactId}`);
    return response.data;
  });

  export const addContacts = createAsyncThunk("contacts/addContacts", async (contact ) => {
    const response = await instance.post(`/contacts`, contact);
    return response.data;
  });