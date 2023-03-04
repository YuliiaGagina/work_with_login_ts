import { createSlice } from "@reduxjs/toolkit";
import { getContcts, deleteContacts ,addContacts} from "./operations";

const initialState = {
   contacts : [],
   isLoading: false,
   error: null,
   
}

const contactsSlice = createSlice({
  
  name: "contacts",

  initialState: initialState,

  extraReducers: (builder) =>  
  builder.addCase( getContcts.pending, (state) => {
    state.isLoading = true;
    
  })
   .addCase( getContcts.fulfilled, (state, {payload}) =>{
        state.isLoading = false;
        state.contacts = [...payload].reverse();
   })
   .addCase( getContcts.rejected, (state, action) =>{
    state.isLoading = false;
    state.error = action.payload;
   })
  //  delete contact
  .addCase( deleteContacts.pending, (state) => {
    state.isLoading = true;
    
  })
  .addCase( deleteContacts.fulfilled, (state, {payload}) =>{

        state.contacts = state.contacts.filter(item => item.id!== payload.id);
        state.isLoading = false;
   })
  .addCase( deleteContacts.rejected, (state, action) =>{
    
    state.error = action.payload;
    state.isLoading = false;
   })
  //  add contact 
  .addCase(addContacts.pending, (state, action) =>{
    state.isLoading = true;
  })
  .addCase(addContacts.fulfilled, (state, {payload}) =>{
    state.contacts = [payload,  ...state.contacts ];
    state.isLoading = false;

  })
  .addCase(addContacts.rejected, (state, action) =>{
    state.error = action.payload;
    state.isLoading = false;
  })

 
  
});



export const contactReducer =  contactsSlice.reducer;

