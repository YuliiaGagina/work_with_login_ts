import {  configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { userReducer } from './user/userSlise';



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

const persistConfig = {
  key: 'user',
  version: 1,
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
 
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    user: persistedReducer,
  },
   

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



export const persistor = persistStore(store);