
import AdminSidebar from "./AdminSideBar";
import "./admin-table.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
 import { getAllBlogs } from "../../redux/apiCalls/blogApiCall";



const BlogsTable = () => {
    
    const dispatch = useDispatch();
    const [updateBlog, setUpdateBlog] = useState(false);
    const { blogs } = useSelector(state => state.blog);
    const {user}=useSelector(state=>state.auth);
    useEffect(() => {
        dispatch(getAllBlogs());
        
       }, []);

    return ( 
      
        <section className="table-container">
         <AdminSidebar /> 
         
          
            <div className="table-wrapper">
                <h1 className="table-title">Orders</h1>
                <table className="table">
                    <thead>
                        <tr>
                            
                            <th>Count</th>
                             <th>Order ref</th>
                            <th>user Name</th>
                          
                            
                            <th>Date Order</th>
                            <th>status</th>
                            <th>total_ttc</th>
                            <th>Change status:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item?._id}</td>
                                <td>{item.username}</td>
                                
                                
                               
                                <td>{new Date(item.createdAt).toDateString()}</td>
                                <td>{item.orderStatus}</td>
                                
                                <td>{item.total_ttc}Dh</td>
                                <td>
                                    <div className="table-button-group">
                                        <button>
                                        <Link to={`/products/blogs/${item._id}`}>
                                               View details..
                                            </Link>
                                        </button>
                                        <button>
                                        <Link to={`/blogs/update/${item._id}`}>
                                               update status
                                            </Link>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

       
        </section>
     );
}
 
export default BlogsTable ;