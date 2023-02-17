
import { addContact, deleteContact } from "./actions"
import { createReducer } from "@reduxjs/toolkit";

const contactsInitialState = [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }];

// export const contactsReducer = (state = contactsInitialState, action) => {
//   // Reducer code
    
//       switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//     case deleteContact.type:
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };
// const filtersInitialState = [];
// export const filtersReducer = (state = filtersInitialState, action) => {
//     return state
//   // Reducer code
// };

export const contactsReducer = createReducer(contactsInitialState, {
    [addContact]: (state, action) => {
        if(action.payload.name)
        return [...state, action.payload]
  },
  [deleteContact]: (state, action) => { return state.filter(task => task.id !== action.payload)},
  
});

