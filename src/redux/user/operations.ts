import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {IUser} from './userSlise'
export const instance = axios.create({
  baseURL: 'https://technical-task-api.icapgroupgmbh.com/api',
});

const setAuthHeader = token  => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials : IUser,  thunkAPI ) => {
    try {
      const res = await instance.post('/login/', credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
