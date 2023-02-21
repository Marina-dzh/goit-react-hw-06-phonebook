import { Filter } from "../Filter/Filter"
import { List, Item, Number, Button } from "./List.styled"
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactSlice"
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "components/redux/selectors";

export const ContactList = ( ) => {
    const contacts = useSelector(getContacts);
     const filterQ = useSelector(getFilter);
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterQ.toLowerCase())
    );
    return (
        <>
            <Filter  />
        <List>
            {visibleContacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} deleteContact={ deleteContact} />
    
            ))}
        </List></>
    )
}

const ContactItem = ({ contact:{name, number, id}}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));
    return (
        <Item>
            <div>
                <div>{name}</div>
                <Number>{number}</Number>
            </div>
            <Button type="button" onClick={handleDelete} >Delete</Button>
        </Item>
        
    )
   
}

ContactItem.propTypes = {
    contact: PropTypes.exact({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string
    }),
    deleteContact:PropTypes.func,
    
}
 Filter.propTypes = {
     changeFilter: PropTypes.func,
     filter: PropTypes.string
    
}