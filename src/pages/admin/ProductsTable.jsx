import AdminSidebar from "./AdminSideBar";
import "./admin-table.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts,deleteProduct } from "../../redux/apiCalls/productApiCall";

const ProductTable = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);

    useEffect(() => {
     dispatch(getAllProducts());
    }, []);

  // Delete Product Handler
  const deleteProductHandler = (postId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProduct(postId));
      }
    });
  };

    return ( 
        <section className="table-container">
            <AdminSidebar />
            <div className="table-wrapper">
                <h1 className="table-title">Posts</h1>
                <Link to="/products/create-products"  className="nav-link">
                <i className="bi bi-journal-plus" style={{color:"black"}}></i><p style={{color:"black"}}>Create Product</p>
                 </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Count</th>
                            <th>User</th>
                            <th>Product Title</th>
                            <th>qte</th>
                            <th>prix</th>
                            
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="table-image">
                                        <img 
                                         src={item.productOwner.profilePhoto.url}
                                         alt=""
                                         className="table-user-image"
                                        />
                                        <span className="table-username">
                                          {item.productOwner.username}
                                            
                                        </span>
                                    </div>
                                </td>
                                <td>{item.lib}</td>
                                <td>{item.qte}</td>
                                <td>{item.prix}</td>
                                <td>
                                    <div className="table-button-group">
                                        <button>
                                            <Link to={`/products/details/${item._id}`}>
                                               View product
                                            </Link>
                                        </button>
                                        <button onClick={() => deleteProductHandler(item._id)}>
                                            Delete Product
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
 
export default ProductTable ;