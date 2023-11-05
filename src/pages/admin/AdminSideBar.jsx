import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return ( 
        <div className="admin-sidebar">
            <Link to="/admin" className="admin-sidebar-title">
                <i className="bi bi-columns"></i>
                Dashboard
            </Link>
            <ul className="admin-dashboard-list">
                <Link 
                 className="admin-sidebar-link" 
                 to="/admin/users-table">
                    <i className="bi bi-person"></i>
                    Users
                </Link>
                
                <Link className="admin-sidebar-link" to="/admin-dashboard/categories-table">
                    <i className="bi bi-tag-fill"></i>
                    Categories
                </Link>
             
                <Link className="admin-sidebar-link" to="/admin-dashboard/products-table">
                
                <i class="bi bi-archive"></i>
                    Products
                </Link>
          
                <Link className="admin-sidebar-link" to="/admin-dashboard/blogs-table">
                <i class="bi bi-clipboard2-check"></i>
                    Orders
                </Link>
            </ul>
        </div>
     );
}
 
export default AdminSidebar;