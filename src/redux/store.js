import {  configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
import {
 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

// persistStore,
// persistReducer,

// const rootReducer = combineReducers({
//   contacts: contactReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'friends',
//   version: 1,
//   storage,
//   blacklist: ['filter'],
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
 
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
   

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



// export const persistor = persistStore(store);