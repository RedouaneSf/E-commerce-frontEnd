import { Link } from "react-router-dom";
import AddCategoryForm from "./AddCategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../redux/apiCalls/categoryApiCall";
import { getUsersCount } from "../../redux/apiCalls/profileApiCall";

import { fetchAllComments } from "../../redux/apiCalls/commentApiCall";
import { getProductsCount } from "../../redux/apiCalls/productApiCall";
import { getBlogsCount } from "../../redux/apiCalls/blogApiCall";

const AdminMain = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.category);
    const { usersCount } = useSelector(state => state.profile);
    
    const { comments } = useSelector(state => state.comment);
    const { productsCount } = useSelector(state => state.product);
    const { blogsCount } = useSelector(state => state.blog);

    useEffect(() => {
     dispatch(fetchCategories());
     dispatch(getUsersCount());
    
     dispatch(getProductsCount());
     dispatch(getBlogsCount());
     dispatch(fetchAllComments());
    }, []);

    return ( 
        <div className="amdin-main">
            <div className="admin-main-header">
                <div className="admin-main-card">
                    <h5 className="admin-card-title">Users</h5>
                    <div className="admin-card-count">
                        {usersCount}
                    </div>
                    <div className="admin-card-link-wrapper">
                        <Link 
                         to="/admin/users-table"
                         className="admin-card-link"
                        >
                           See all users
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-person"></i>
                        </div>
                    </div>
                </div>
                
                    
                    
                    
                  
                <div className="admin-main-card">
                    <h5 className="admin-card-title">   Orders</h5>
                    <div className="admin-card-count">
                        {blogsCount}
                    </div>
                    
                    
                    <div className="admin-card-link-wrapper">
                        <Link 
                         to="/admin-dashboard/blogs-table"
                         className="admin-card-link"
                        >
                           See all posts
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-file-post"></i>
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">Categories</h5>
                    <div className="admin-card-count">
                        {categories.length}
                    </div>
                    <div className="admin-card-link-wrapper">
                        <Link 
                         to="/admin-dashboard/categories-table"
                         className="admin-card-link"
                        >
                           See all categories
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-tag-fill"></i>
                        </div>
                    </div>
                </div>
                <div className="admin-main-card">
                    <h5 className="admin-card-title">Products</h5>
                    <div className="admin-card-count">
                        {productsCount}
                    </div>
                    <div className="admin-card-link-wrapper">
                        <Link 
                         to="/admin-dashboard/products-table"
                         className="admin-card-link"
                        >
                           See all products
                        </Link>
                        <div className="admin-card-icon">
                            <i className="bi bi-chat-left-text"></i>
                        </div>
                    </div>
                </div>
            </div>
            <AddCategoryForm />
        </div>
     );
}
 
export default AdminMain;