import { useState } from "react";
import "./update-blog.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBlog } from "../../redux/apiCalls/blogApiCall";
import { Link } from "react-router-dom";

const UpdateBlogModal = () => {
    const dispatch = useDispatch();
      
    const {id}=useParams();
    const [orderStatus, setOrderStatus] = useState("");

    // Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();
        
        const updatedBlog = { orderStatus }

        

        dispatch(updateBlog(id, updatedBlog));
        
    }

    return ( 
        <div className="update-profile">
            <form onSubmit={formSubmitHandler} className="update-profile-form">
                
                <h1 className="update-profile-title">Update status</h1>
                
               
        <select
          className="update-post-input"
          value={orderStatus}
          onChange={(e) => setOrderStatus(e.target.value)}
        >
          <option disabled value="">
            Select A Category
          </option>
          
            <option key={1} value="Processing">
            Processing
            </option>
            <option key={2} value="Shipped">
            Shipped
            </option>
            <option key={3} value="Delivered">
            Delivered
            </option>
            <option key={3} value="Cancel">
            Cancel
            </option>
         
        </select>
                <button type="submit" className="update-profile-btn">
                    Update Profile
                </button>
                <button className="update-profile-btn" style={{backgroundColor:"red"}}>
                <Link to="/admin-dashboard/blogs-table" style={{textDecoration:"none",color:"white"}}>
                                                Fermer
                                            </Link>
                     
                </button>
            </form>

            
         
        </div>
     );
}
 
export default UpdateBlogModal;