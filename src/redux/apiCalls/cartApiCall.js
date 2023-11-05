import {cartActions} from "../slices/cartSlice";

//Add item to cart

export function addToCart(newItem)
{
    return (dispatch,getState )=>{
        dispatch(cartActions.addItemToCart(newItem));

        const {cart} = getState();
        localStorage.setItem("cartItems",JSON.stringify(cart.cartItems));
      
    }
}

//Remove item from cart
export function removeFromCart(id)
{
    return (dispatch,getState)=>{
        dispatch(cartActions.removeItemFromCart(id));

        const{cart}=getState();
        localStorage.setItem("cartItems",JSON.stringify(cart.cartItems));
    }
}