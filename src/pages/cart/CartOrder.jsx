import "./cart-order.css";

import { useSelector, useDispatch } from "react-redux";
const CartOrder = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    return (
<section className="">
<div className="div-cart-order">
    <h2>Enter your information</h2>
  <form className="form-cart-order">
        <div className="form-group">
          <label for="exampleInputEmail1">address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter address"/>
         
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Ville</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Ville"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Code Postal</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Code Postal"/>
        </div>
        
     
    </form>
    
    </div>

    
    
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
                  <div className="cart-summary-total">
              المجموع:
              <span>
                {cartItems
                  .reduce((acc, cur) => acc + cur.prix * cur.qte, 0)
                  }Dh
              </span>
            </div>
                  
                </div>
              </div>
            ))}
           </div> 

    <div class="container p-0">
        <div class="card px-4">
            <p class="h8 py-3">Payment Details</p>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Person Name</p>
                        <input class="form-control mb-3" type="text" placeholder="Name" value="Barry Allen"/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input class="form-control mb-3" type="text" placeholder="1234 5678 435678"/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input class="form-control mb-3" type="text" placeholder="MM/YYYY"/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input class="form-control mb-3 pt-2 " type="password" placeholder="***"/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="btn btn-primary mb-3">
                        <span class="ps-3">Pay $243</span>
                        <span class="fas fa-arrow-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>


             
</section>

        );
}
 
export default CartOrder;