import { Link } from "react-router-dom";
import "./form.css";
import { useState } from "react";
import { toast } from "react-toastify";

import {useDispatch} from "react-redux";
import { loginUser } from "../../redux/apiCalls/authApiCall";

const Login = () => {

    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch =useDispatch();

//form submit handler
    const formSubmitHandler=(e)=>{
        e.preventDefault();
         
         if(email.trim()==="")return toast.error("email is required");
         if(password.trim()==="")return toast.error("password is required");
        console.log({email,password});
        dispatch(loginUser({email,password}));
    }
    

    return ( <h1>
        <section className="form-container">
            <h1 className="form-title"> Login</h1>

            <form  className="form" >
               

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
               <button type="submit" className="form-btn" onClick={formSubmitHandler}>Login</button>

            </form>
            <div className="form-footer">
            you don't have an account? <Link to="/register"> register</Link>
                      <br /> <br />
                       <h6>    did you forgot password? <Link to="/forgot-password"> forgot password</Link></h6>
            </div>
            

        </section>
    </h1> );
}
 
export default Login;