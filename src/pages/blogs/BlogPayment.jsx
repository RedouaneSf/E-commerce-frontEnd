import "../cart/CartOrder";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/apiCalls/cartApiCall";
import { Link } from "react-router-dom";
import Blog from "./Blog";

const BlogPayment = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return cartItems.length < 1 ? (
    <div className="empty-cart">
        <h1>Your Cart </h1>
        <p>Your cart is empty</p>
        <Link className="empty-cart-link" to="/products">
            go to home page
        </Link>
    </div>
  ) : (
    <>
      <section className="cart">
        <h1 className="cart-title">Your Cart</h1>
        <div className="cart-wrapper">
          <div className="cart-items" style={{width:"500px"}}>
            
            
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
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-quantity">
                    qte :
                    <span>{item.qte}</span>
                  </div>
                  <div className="cart-item-quantity">
                    id :
                    <span>{item.id}</span>
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
                  
                 
                  
                  
                  
                  <i style={{marginLeft: "300px"}}
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bi bi-trash fill cart-item-delete-icon"
                  ></i>
                 
                  
                  
                  
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-text">
             
              
            </div>
            <div className="cart-summary-total">
              
              <Blog  total_ttc={cartItems
                  .reduce((acc, cur) => acc + cur.prix * cur.qte, 0)
                  } />
                  
            </div>
            
   
            
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPayment;
