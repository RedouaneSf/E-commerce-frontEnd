import { Link } from "react-router-dom";

const HeaderLeft = ({toggle,setToggle}) => {
    return ( 
    <div className="header-left">
        <div className="header-logo">
          <Link to="/" style={{color:"white"}}> <strong>BIGG HOUSE</strong></Link> 
        <i className="bi bi-shop-window"></i>
        </div>
         <div onClick={()=>setToggle(prev=>!prev)}  className="header-menu">
           {toggle ? <i className="bi bi-x-lg"></i> :  <i className="bi bi-list"></i>}
                 
            
         </div>

    </div>
     );
}
 
export default HeaderLeft;