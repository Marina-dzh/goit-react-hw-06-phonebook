import { createSlice,nanoid } from "@reduxjs/toolkit";

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const initialItem = {item:[{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }]}
  

export const contactsSlice = createSlice({
  name: 'contacts',
    initialState: initialItem,
  reducers: {
      addContact: {
          
          reducer(state, action) { console.log(state)
              return [...state, action.payload]
          },
          prepare({ name, number }) {
              return {
        payload: {
            name,
            number,
            id: nanoid()
        }
    }}
    },
      deleteContact(state, action) {
          console.log(state)
          
      return state.filter(contact => contact.id !== action.payload)
    },
   
  },
})



export const filterSlice = createSlice({
  name: 'filter',
  initialState : '',
  reducers: {
    setStatusFilter(state,action) {
       return state = action.payload
    }
  },
})

export const { addContact, deleteContact} = contactsSlice.actions
export const { setStatusFilter } = filterSlice.actions


 const persistConfig = {
  key: 'root',
    storage,
//   whitelist:["item"]
}

export const persistContactsReducer = persistReducer(persistConfig,contactsSlice.reducer )





















// actions
// import { createAction, nanoid } from "@reduxjs/toolkit";

// export const addContact = createAction("contacts/AddContact",( {name, number} )=> {
//     return {
//         payload: {
//             name,
//             number,
//             id: nanoid()
//         }
//     }
// });
//  export const deleteContact = createAction("contacts/DeleteContact");

// export const setStatusFilter = createAction("filters/setStatusFilter");


// //   const addContact = ({ name, number }) => {
// //     for (const item of contacts) {
// //       if (item.name === name & item.number===number) {
// //         // alert(`Oooops, it seems like ${name} is already in contacts. `)
// //         toast(`Oooops, it seems like ${name} is already in contacts. `, {
// //           icon: '⚠️',
// //           position: "top-left",
// //           style: {
// //             color: "black",
// //         backgroundColor:"#ffa500"  } 
// // });
// //         return
// //     }}
      
// //     setContacts( pState => [...pState, { name, id:nanoid(), number  }]);

// //   }



// reducer 

// import { addContact, deleteContact, setStatusFilter } from "./actions"
// import { createReducer } from "@reduxjs/toolkit";

// const contactsInitialState = [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }];


// export const contactsReducer = createReducer(contactsInitialState, {
//     [addContact]: (state, action) => {
//         return [...state, action.payload]
//   },
//   [deleteContact]: (state, action) => { return state.filter(contact => contact.id !== action.payload)},
  
// });

// const filterInitialState = ""

// export const filtersReducer = createReducer(filterInitialState, {
//     [setStatusFilter]: (state, action) => {
        
//        return state = action.payload
       
//     }
// })