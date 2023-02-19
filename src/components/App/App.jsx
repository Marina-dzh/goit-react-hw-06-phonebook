import { useSelector } from "react-redux";


import React, { useEffect , useState} from "react";
import { ContactForm } from "../Form/Form";
import { ContactList } from "../List/List";
import { Container } from "./App.styled";
// import { useState } from "react";
import { Toaster } from 'react-hot-toast';




// const initialContacts = [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }]
    
// const localContacts =()=>{
// const savedContacts = localStorage.getItem('contacts')
//     if (savedContacts !== null) {
//       const parsedContacts = JSON.parse(savedContacts)
//       return parsedContacts
//     } else {
    
//       return initialContacts
//     }}



export const App = () => {
  const contacts = useSelector(state => state.contacts.initial
);
console.log(contacts)
 const filter = useSelector(state => state.filter);
  //  console.log(filter)
  // const [contacts, setContacts] = useState(localContacts())
  // const [filter, setFilter] = useState("")
   const [filteredCon, setFilteredCon] = useState()


  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts))
  // }
  // )

   useEffect(
   () => {
   if (!filter) {
     setFilteredCon(null)
      return
  }
       const normFilter = filter.toLowerCase();
      //  console.log(filter)
    setFilteredCon(contacts.filter(contact => contact.name.toLowerCase().includes(normFilter)))
   },
[filter,contacts]

)

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


    return (
      <Container>
        <h1>PhoneBook</h1>
        <ContactForm contacts={ contacts} />
        <h2>Contacts</h2>
        {(contacts.length !== 0) && <ContactList contacts={filteredCon||contacts} 
       />}
        {(!contacts.length) && <p style={{ fontSize:14,  }}>The PhoneBook is empty!</p>}
         {(filteredCon && filteredCon.length === 0) && <p style={{ fontSize: 14, }}>There is no result</p>}
        <Toaster  toastOptions={{duration: 2000} }/>
      </Container >
      
    )

}

    // return (
    //   <Container>
    //     <h1>PhoneBook</h1>
    //     <ContactForm  />
    //     <h2>Contacts</h2>
    //     { (contacts.length!==0) && <ContactList contacts={filteredCon||contacts} filter={filter} changeFilter={changeFilter} deleteContact={deleteContact} /> }
    //     {(!contacts.length) && <p style={{ fontSize:14,  }}>The PhoneBook is empty!</p>}
    //     {(filteredCon && filteredCon.length === 0) && <p style={{ fontSize: 14, }}>There is no result</p>}
    //     <Toaster  toastOptions={{duration: 2000} }/>
    //   </Container >
      
    // )