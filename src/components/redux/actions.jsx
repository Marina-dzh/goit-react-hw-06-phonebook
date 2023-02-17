import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/AddContact",( {name, number} )=> {
    return {
        payload: {
            name,
            number,
            id: nanoid()
        }
    }
});
 export const deleteContact = createAction("contacts/DeleteContact");

export const setStatusFilter = createAction("filters/setStatusFilter");

//   const addContact = ({ name, number }) => {
//     for (const item of contacts) {
//       if (item.name === name & item.number===number) {
//         // alert(`Oooops, it seems like ${name} is already in contacts. `)
//         toast(`Oooops, it seems like ${name} is already in contacts. `, {
//           icon: '⚠️',
//           position: "top-left",
//           style: {
//             color: "black",
//         backgroundColor:"#ffa500"  } 
// });
//         return
//     }}
      
//     setContacts( pState => [...pState, { name, id:nanoid(), number  }]);

//   }