import{configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/authSlice";
import { profileReducer } from "./slices/profileSlice";
import { categoryReducer } from "./slices/categorySlice";
import { commentReducer } from "./slices/commentSlice";
import { passwordReducer} from "./slices/passwordSlice";
import { productReducer } from "./slices/productSlice";
import { orderReducer } from "./slices/orderSlice";
import { cartReducer } from "./slices/cartSlice";
import { blogReducer } from "./slices/blogSlice";




const store= configureStore({
    reducer:{
         auth:authReducer,
         profile:profileReducer,
         
         category:categoryReducer,
         comment:commentReducer,
         password: passwordReducer,
         product:productReducer,
         order:orderReducer,
         cart:cartReducer,
         blog:blogReducer,
        
         
         
    }
})
export default store;