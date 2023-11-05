import "./home.css";
import  ProductList from "../../components/products/ProductList";
import  Carousel from "../../components/carousel/Carousel";

import  Sidebar from "../../components/sidebar/Sidebar";
import{Link} from "react-router-dom";
import{useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";


const Accueil = () => {
     const dipsatch= useDispatch();
     const {products}= useSelector(state=>state.product);
    useEffect(()=>{
                dipsatch(fetchProducts(1))
    },[]);
      

    return ( <section className="home">

             
              <Carousel/>
             <div className="home-latest-post">
                Latest Product
             </div>
             <div className="home-container">
  
             <div class="row" style={{width: "1000px"}}>
             {products?.map(item => 
  <div class="col-sm-6">
    <div class="card" style={{marginBottom:"50px"}}>
    <img src={item.image.url} alt=""   style={{width: "470px",height: "300px"}}/>
      <div class="card-body">
      <h5> <span class="badge badge-secondary">New</span></h5> 
        <h5 class="card-title">{item.lib}</h5>
        <h4><span class="badge badge-light">prix:{item.prix}Dh</span></h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <span class="badge badge-info" style={{marginRight:"20px"}}>Category:{item.category}</span>
        <Link className="post-item-link" to={`/products/details/${item?._id}`}>
                   Read More...
                </Link>
      </div>
    </div>
  </div>
  )}
  
</div>
                   <Sidebar />
                    
             </div>
              <div className="home-see-post-link">
                      <Link to="/products" className="home-link">see all products</Link>

              </div>
                
         </section>);
}
 
export default Accueil ;