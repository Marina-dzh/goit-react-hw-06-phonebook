import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer,filtersReducer  } from "./reducer";
// import { persistStore, persistReducer } from 'redux-persist'

import { persistContactsReducer } from "./slice";
import { filterSlice } from "./slice"; 
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'




export const store = configureStore({
    reducer: {
        contacts: persistContactsReducer,
        filter: filterSlice.reducer,
        

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)