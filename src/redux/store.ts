import { configureStore } from '@reduxjs/toolkit';

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
import {contactReducer}   from './contactsSlice';
import { filterReducer } from './filterSlice';
import { userReducer } from './user/userSlise';

// const persistConfig = {
//   key: 'user',
//   version: 1,
//   storage,
//   whitelist: ['token'],
// };
// const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    user: userReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


// export const persistor = persistStore(store);
