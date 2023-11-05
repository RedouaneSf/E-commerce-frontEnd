import { Link ,useNavigate} from "react-router-dom";
import "./form.css";
import { useState } from "react";
import { toast } from "react-toastify";
import {useDispatch,useSelector} from "react-redux";
import {registerUser} from "../../redux/apiCalls/authApiCall";
import swal from "sweetalert";


const Register = () => {
    const dispatch=useDispatch();
    const {registerMessage} =useSelector(state=>state.auth);
    
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

//form submit handler
    const formSubmitHandler=(e)=>{
      e.preventDefault();
         if(username.toString()==="")return toast.error("username is required");
         if(email.trim()==="")return toast.error("email is required");
         if(password.trim()==="")return toast.error("password is required");
        
        dispatch(registerUser({username,email,password}));
    }
    const navigate=useNavigate();
    if(registerMessage)
    {  
      swal({
        title:registerMessage,
        icon:"success"
      }).then(isOk =>{
        if(isOk){
          
          navigate("/login");
        }
      })
    }
    

    return ( <h1>
        <section className="form-container">
            <h1 className="form-title"> Create new account</h1>

            <form  className="form" >
               <div className="form-group">
                 <label htmlFor="username" className="form-label">
                    User name
                 </label>
                 <input type="text" className="form-input"  id="username" placeholder="Enter your username"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                 />
               </div>

               <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    email
                 </label>
                 <input type="text" className="form-input"  id="email" placeholder="Enter your email"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 />
               </div>
               

               <div className="form-group">
                  <label htmlFor="password" className="form-label">
                  password
                 </label>
                 <input type="password" className="form-input"  id="password" placeholder="Enter your password" 
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 />
               </div>
               <button type="submit" className="form-btn" onClick={formSubmitHandler}> register</button>

            </form>
            <div className="form-footer">
                      Already have an account? <Link to="/login"> Login</Link>
            </div>
            

        </section>
    </h1> );
}
 
export default Register;