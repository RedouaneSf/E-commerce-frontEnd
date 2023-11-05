import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createBlog} from "../../redux/apiCalls/blogApiCall";
import { toast } from "react-toastify";
import {useParams} from "react-router-dom";

const Blog = ({total_ttc}) => {
   
    const orderInfo=JSON.parse(sessionStorage.getItem('cartItems'));
    const { cartItems } = useSelector((state) => state.cart);
    const orderItems=cartItems.map(({_id,qte,prix,lib,image,...rest})=>({...rest,product:_id,qte:qte,prix:prix,lib:lib,image:image}));
    
    const [adress,setTAdress]=useState("");
    const [codePostal,setCodePostal]=useState("");
    const [ville,setVille]=useState("");
    
   
    
    
  
     
    
    const dispatch=useDispatch();
    const formSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(createBlog({adress,orderItems,codePostal,ville,total_ttc}))
        console.log(orderItems,adress,codePostal,ville,total_ttc);
          
    }
    return (  
        <section>
            <h3>Enter your Information :</h3>
            
            <form action="" >
            <input
          type="text"
          placeholder="adress "
          className="create-post-input"
          value={adress}
          onChange={(e) => setTAdress(e.target.value)}
        />
                 <input
          type="text"
          placeholder="codePostal"
          className="create-post-input"
          value={codePostal}
          onChange={(e) => setCodePostal(e.target.value)}
        />
             <input
          type="text"
          placeholder="ville"
          className="create-post-input"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />

<div className="container p-0">
        <div className="card px-4">
            <p className="h8 py-3">Payment Details</p>
            <div className="row gx-3">
                
                <div className="col-12">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Card Number</p>
                        <input className="form-control mb-3" type="text" placeholder="1234 5678 435678"/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">Expiry</p>
                        <input className="form-control mb-3" type="text" placeholder="MM/YYYY"/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="d-flex flex-column">
                        <p className="text mb-1">CVV/CVC</p>
                        <input className="form-control mb-3 pt-2 " type="password" placeholder="***"/>
                    </div>
                </div>
                
                 
                <div className="col-12" >
                    <div className="btn btn-primary mb-3" style={{width: "350px",marginLeft: "50px"}}>
                        <span className="ps-3" ><strong>Total :  {cartItems
                  .reduce((acc, cur) => acc + cur.prix * cur.qte, 0)
                  }Dh</strong> 
                  <span>
              
                
                
              </span></span>
                        <span className="fas fa-arrow-left"></span>
                    </div>
                </div>
             
            </div>
        </div>
    </div>
            
           
             <button className="btn-payment" type="submit"onClick={formSubmitHandler}> Order Now</button>
            </form>
        </section>
    );
}
 
export default Blog;