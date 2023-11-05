import { orderActions } from "../slices/orderSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

/////////////////////
export function createOrder(newBlog) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.post(`/api/orders/create`, newBlog, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
        
      });
      dispatch(orderActions.addOrder(data));
      
     
      toast.success("Your order ");
      
      
      
      
     
      
      
    } catch (error) {
      toast.error(error);
    }
  };
}
// Create Comment
export function createOrd(orders) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.post(`/api/orders/create`, orders, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(orderActions.CreateOrder(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}


// get All Comments
export function getAllOrders() {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.get(`/api/orders`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
      });
      dispatch(orderActions.setOrders(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
