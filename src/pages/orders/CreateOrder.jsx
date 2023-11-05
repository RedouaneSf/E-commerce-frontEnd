import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch ,useSelector} from "react-redux";
import { createOrder} from "../../redux/apiCalls/orderApiCall";
import { useParams } from "react-router-dom";

const CreateOrder = () => {
    const dispatch = useDispatch();
    

    
    

   
   
  
    const [adress, setAdress] = useState("");
    

    
     // Form Submit Handler
  const formSubmitHandler = (e) => {
      e.preventDefault();
      
      dispatch(createOrder(adress));
 
    console.log(adress);
     alert("xxxx");
  };

    
   

    return ( 
        <>
        <form onClick={formSubmitHandler} action=""className="add-comment">
           
            <input 
             type="text" 
             placeholder="Add adress" 
             className="add-comment-input"
             
             onChange={(e) => setAdress(e.target.value)}
            />
            <button className="btn-payment"> Order Now</button>
        </form>


    
    
  


    </> );
}
 
export default CreateOrder ;