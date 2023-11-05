import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const Navbar = ({toggle,setToggle}) => {
    const {user}=useSelector(state=>state.auth);
    const { cartItems } = useSelector((state) => state.cart);
    
    return ( 
    
     

        <nav  style={{clipPath:toggle &&"polygon(0 0, 100% 0, 100% 99%, 0 100%)",marginTop:"20px"}} className="navbar">

        <ul className="nav-links">
        
            <Link  to="/accueil" onClick={()=>setToggle(false)}  className="nav-link">
                <i className="bi bi-house"></i>Acceuil
            </Link>
            <Link  to="/products"onClick={()=>setToggle(false)}  className="nav-link">
            <i class="bi bi-basket2"></i>Product
            </Link>
            
           
            <Link to="/About" onClick={()=>setToggle(false)}  className="nav-link">
            <i class="bi bi-info-square"></i>About
            </Link>
            <Link to="/Contact" onClick={()=>setToggle(false)}  className="nav-link">
                <i className="bi bi-stickies"></i>Contact
            </Link>
            
           
        
            

            
            
            
            {
                user   &&  user?.isAdmin===false ? 
             
                <Link
                  to={`/profile/${user?._id}`} onClick={()=>setToggle(false)}  className="nav-link">
            <i class="bi bi-bag-check"></i>My Orders
            </Link> :<></>
            }
      
          

            {
                user?.isAdmin===true ? <>
                

               

            <Link to="/admin" onClick={()=>setToggle(false)}  className="nav-link">
                <i className="bi bi-person-check"></i>Admin Dashboard
            </Link>
                </>  :
                <>
               
                 <Link to="/cart" className="header-right-link" style={{ marginLeft:"200px"}}>
                    
                 <i class="bi bi-cart2"></i>
                 
                 {cartItems.length > 0 && (
                     <span>({cartItems.length})</span>
                  )}  
                 
                 
                
                </Link>
                </>
            }
        </ul>
    </nav>
    
     );
}
 
export default Navbar;