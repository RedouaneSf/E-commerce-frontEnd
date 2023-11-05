import {Link,Navigate, useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { useState } from "react";
import { logoutUser } from "../../redux/apiCalls/authApiCall";


const HeaderRight = () => {

    const dispatch= useDispatch();
    const {user}=useSelector(state=>state.auth);
    const [dropdown, setDropdown] = useState(false);

    //logout handler
    const logoutHandler=()=>{
      setDropdown(false);
      dispatch(logoutUser());
      
       
    }
    return (  
        <div className="header-right">

          

      { user ? <>
          
          <div className="header-right-user-info">
          <span
            
              className="header-right-username"
            >
              {user?.username}
            </span>

            <Link><img src={user?.profilePhoto.url} alt="user photo" className="header-right-user-photo"  onClick={() => setDropdown((prev) => !prev)}
            /></Link>
            {dropdown && (
              <div className="header-right-dropdown">
                <Link
                  to={`/profile/${user?._id}`}
                  className="header-dropdown-item"
                  onClick={() => setDropdown(false)}
                >
                  <i className="bi bi-file-person"></i>
                  <span>Profile</span>
                </Link>
                <div onClick={logoutHandler} className="header-dropdown-item">
                  <i className="bi bi-box-arrow-in-left"></i>
                  <Link  to="/" style={{textDecoration:"none"}}>  Logout</Link>
                </div>
              </div>
            )}
            
          </div>
      </> :(
        <>
          
             <Link to="/login" className="header-right-link">
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Login</span>
             </Link>
             <Link to="/register" className="header-right-link">
                <i className="bi bi-person-plus"></i>
                <span>Register</span>
             </Link>
        </>
      )
      }

        </div>
    );
}
 
export default HeaderRight ;