import { useSelector } from "react-redux";
import { getContacts, getFilter } from "components/redux/selectors";
import React, { useEffect , useState} from "react";
import { ContactForm } from "../Form/Form";
import { ContactList } from "../List/List";
import { Container } from "./App.styled";
import { Toaster } from 'react-hot-toast';



export const App = () => {
  const contacts = useSelector(getContacts);
//console.log(contacts)
 const filter = useSelector(getFilter);
  //  console.log(filter)
  
   const [filteredCon, setFilteredCon] = useState()

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
