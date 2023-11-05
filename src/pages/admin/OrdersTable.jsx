
import AdminSidebar from "./AdminSideBar";
import "./admin-table.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
 import { getAllOrders } from "../../redux/apiCalls/orderApiCall";

const OrdersTable = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.order);

    useEffect(() => {
     dispatch(getAllOrders());
    }, []);



    return ( 
        <section className="table-container">
         <AdminSidebar /> 
          
            <div className="table-wrapper">
                <h1 className="table-title">Posts</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>ProductId</th>
                            <th>user Name</th>
                            <th>Adresse</th>
                            <th>Ville</th>
                            <th>User name</th>
                            <th>total_ttc</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="table-image">
                                        
                                        <span className="table-username">
                                            {item.productId}
                                            
                                        </span>
                                    </div>
                                </td>
                                <td>{item.username}</td>
                                <td>{item.adress}</td>
                                <td>{item.ville}</td>
                                <td>{new Date(item.createdAt).toDateString()}</td>
                                <td>{item.total_ttc}Dh</td>
                                <td>
                                    <div className="table-button-group">
                                        <button>
                                            <Link to={``}>
                                               View details
                                            </Link>
                                        </button>
                                        <button>
                                            Delete order
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
 
export default OrdersTable ;