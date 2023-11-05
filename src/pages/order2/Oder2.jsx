import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";


const Order2 = () => {
  
    
    const [adress, setAdress] =useState("");
    const [ville, setVille] = useState("");
   const token=localStorage.getItem('userInfo');

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const blog={adress,ville};
        return async (getState) => {
          
        fetch('http://localhost:8000/api/orders2',{
          method:'POST',
          headers:{
            "Content-type":"application/json",
            Authorization: "Bearer " + getState().auth.user.token,
            
          },
          body:JSON.stringify(blog)
        }).then(()=>{
          console.log();
          
        })
       
     
        
        
      }};
    
    return (  

        <>
            <form onClick={formSubmitHandler }>
            <input 
             type="text" 
             placeholder="Add a ville" 
             className="add-comment-input"
             value={ville}
             onChange={(e) => setVille(e.target.value)}
            />
                 <input 
             type="text" 
             placeholder="Add a ville" 
             className="add-comment-input"
             value={adress}
             onChange={(e) => setAdress(e.target.value)}
            />

            <button type="submit">Add</button>
            </form>
        </>
    );
}
 
export default Order2;