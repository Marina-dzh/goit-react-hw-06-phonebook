
import { Input, Text } from "./Filter.styled"
import { setStatusFilter } from "../redux/slice"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
 
export const Filter = () => {
    
    
    const changeFilter = (e) => {
        e.preventDefault();
    //   console.log(e.currentTarget.value)
    dispatch(setStatusFilter(e.currentTarget.value))
   }

  
 const dispatch = useDispatch();
    return (
       <>
            <Text>Find contacts by name</Text>
            <Input type="text" onChange={ changeFilter} />
            
        </>     
    )
}
