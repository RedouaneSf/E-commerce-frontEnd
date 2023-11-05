import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch ,useSelector} from "react-redux";
import { create } from "../../redux/apiCalls/orderApiCall";
import { useParams } from "react-router-dom";

const Order3 = () => {
    const dispatch = useDispatch();
    const {id}=useParams();
    const { auth } = useSelector((state) => state.auth);
    const { cartItems } = useSelector((state) => state.cart);

   
   
    const [adress, setAdress] = useState("");
    const [productId, setProductId] = useState("");
    const [userId, setUserId] = useState("");
    
    const blog={adress,productId,userId};
     // Form Submit Handler
     
  const formSubmitHandler = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/orders3/create',{
          method:'POST',
          headers:{
            "Content-type":"application/json",
           
            
            
          },
          body:JSON.stringify(blog)
        }).then(()=>{
          console.log(adress,productId,userId);
          
        })
    
     
 
    console.log("adddd");
  
  };

    
   

    return ( 
        <>
        

<section className="cart">
<h1 className="cart-title">Your Cart</h1>
<div className="cart-wrapper">
  <div className="cart-items">
    {cartItems.map((item) => (
      <div key={item.id} className="cart-item">
        <div className="cart-item-img-wrapper">
          <img
            className="cart-item-img"
            src={item.image.url}
            alt={item.lib}
          />
        </div>
        <div className="cart-item-info">
        <div className="cart-item-quantity">
            id product:
            <span>{item.id}</span>
          </div>
          <div className="cart-item-title">{item.title}</div>
          <div className="cart-item-quantity">
            qte :
            <span>{item.qte}</span>
          </div>
          <div className="cart-item-quantity">
            lib :
            <span>{item.lib}</span>
          </div>
          <div className="cart-item-price">
            prix :
            <span>{(item.prix * item.qte)} Dh</span>
          </div>
          <div className="cart-item-price">
            Category :
            <span>{item.category}</span>
          </div>
          <form onClick={formSubmitHandler}>

          <input 
             type="text" 
             placeholder="Address" 
             className="add-comment-input"
             value={adress}
             onChange={(e) => setAdress(e.target.value)}
            />
            <input 
             
             
             type="text" 
             placeholder="productID" 
             className="add-comment-input"
             value={item.id}
             onChange={(e) => setProductId(e.target.value)}
            />
            
            <input 
           
            type="text" 
            placeholder="userId" 
            className="add-comment-input"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
           />
            <button type="submit" className="add-comment-btn">
                Order now
            </button>
          </form>
          
        </div>
      </div>
    ))}
  </div>
  <div className="cart-summary">
    <div className="cart-summary-text">
      <i className="bi bi-check-circle-fill"></i>
      جزء من طلبك مؤهل للشحن المجاني. قم بتحدید هذا الخیار عند دفع
      التفاصیل
    </div>
    <div className="cart-summary-total">
      المجموع:
      <span>
        {cartItems
          .reduce((acc, cur) => acc + cur.prix * cur.qte, 0)
          }
        Dh
      </span>
    </div>
    
    
  </div>
</div>
</section>
    </> );
}
 
export default Order3 ;