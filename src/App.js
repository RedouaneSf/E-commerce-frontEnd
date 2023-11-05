import Header from "./components/header/Header";
import {ToastContainer} from "react-toastify";
import {BrowserRouter,Routes,Route}  from "react-router-dom";
import Home from "./pages/home/Home"; 
import Home1 from ".//pages/home/Home1";
import Login from "./pages/forms/Login";
import Register from "./pages/forms/Register"; 

import AdminDashboard from "./pages/admin/AdminDashboard"; 

import CreateProduct from "./pages/create-product/CreateProduct";
import Footer from "./components/footer/Footer";


import Category from "./pages/category/Category";
import Profile from "./pages/profile/Profile";
import UsersTable from "./pages/admin/UsersTable";

import CategoriesTable from "./pages/admin/CategoriesTable";

import ProductsTable from "./pages/admin/ProductsTable";
import OrdersTable from "./pages/admin/OrdersTable";
import ForgotPassword from "./pages/forms/ForgotPassword";
import ResetPassword from "./pages/forms/ResetPassword";
import NotFound from "./pages/not-found/NotFound";

import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import VerifyEmail from "./pages/verify-email/VerifyEmail";
import Accueil from "./pages/home/Accueil";

import ProductDetails from "./pages/product-details/ProductDetails ";
import ProductPage from "./pages/product-page/ProductPage";

import Cart from "./pages/cart/Cart";
import CartOrder from "./pages/cart/CartOrder";
import CreateOrder from  "./pages/orders/CreateOrder";
import Order2 from "./pages/order2/Oder2";
import Order3 from "./pages/orders/Order3";

import Blog from "./pages/blogs/Blog";
import BlogPayment from "./pages/blogs/BlogPayment";
import GetAllBlog from "./pages/blogs/GetAllBlog";
import BlogsTable from "./pages/admin/BlogsTable";
import Blogdetails from "./pages/blogs/Blogdetails";
import UpdateBlogModal from "./pages/blogs/UpdateBlogModal";
import About from "./pages/about/About";
import Contact from "./pages/Contact/Contact";






function App() {
  const {user}= useSelector(state=>state.auth);
  return (
    <BrowserRouter>
      <ToastContainer  theme="colored"  position="top-center" />
        <Header/>

        <Routes>
           <Route path="/" element={<Home1/>}/>
           <Route path="/accueil" element={<Accueil/>}/>
           <Route path="/login" element={!user ?  <Login/> :<Navigate to="/"/>}/>
           <Route path="/register" element={!user ? <Register/> : <Navigate to="/"/>}/>
           <Route path="/About" element={<About/>}/>
           <Route path="/Contact" element={<Contact/>}/>
           <Route
          path="/users/:userId/verify/:token"
          element={!user ? <VerifyEmail /> : <Navigate to="/" />}
        />
           <Route path="/forgot-password" element={<ForgotPassword/>}/>
           <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />
           <Route path="/profile/:id" element={<Profile/>}/>
           
           <Route path="/products/create-products" element={user?.isAdmin===true ? <CreateProduct/> :  <Navigate to="/"/>}/>
           <Route path="/products" element={<ProductPage/>}/>
           <Route path="/products/details/:id" element={<ProductDetails/>}  />
           <Route path="/products/categories/:category" element={<Category/>} />
           

           <Route path="/cart" element={<Cart/>}  />
           <Route path="/cart/orders" element={<CartOrder/>}  />
           <Route path="/cart/create-order" element={<CreateOrder/>}  />

           <Route path="/order2-create" element={<Order2/>}/>
           <Route path="/order3-create" element={<Order3/>}/>
          
           <Route path="/order-payment" element={<BlogPayment/>}/>
           <Route path="/blogs" element={<Blog/>}/>
           <Route path="/blogs/All" element={<GetAllBlog/>}/>
           <Route path="/blogs/update/:id" element={<UpdateBlogModal/>}/>


           

         

           
           <Route path="/admin" element={   user?.isAdmin===true ? <AdminDashboard/> : <Navigate to="/"/>}/>
           <Route path="/admin/users-table" element={user?.isAdmin===true ? <UsersTable/> : <Navigate to="/"/>}/>
          
           <Route path="/admin-dashboard/categories-table" element={user?.isAdmin===true ? <CategoriesTable/>  : <Navigate to="/"/>}/>
           
           <Route path="/admin-dashboard/products-table" element={user?.isAdmin===true ?<ProductsTable/> : <Navigate to="/"/>}/>
           <Route path="/admin-dashboard/orders-table" element={user?.isAdmin===true ?<OrdersTable/>  : <Navigate to="/"/>}/>
           <Route path="/admin-dashboard/blogs-table" element={user?.isAdmin===true ?<BlogsTable/>  : <Navigate to="/"/>}/>
           <Route path="/products/details/:id" element={<ProductDetails/>}/>
           <Route path="/products/blogs/:id" element={<Blogdetails/>}/>
          
          <Route   path="*" element={<NotFound/>}/>
        </Routes>
         
         <Footer/>

    </BrowserRouter>
  );
}

export default App;
