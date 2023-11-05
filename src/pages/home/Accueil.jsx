import "./home.css";
import  ProductList from "../../components/products/ProductList";

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

             <div className="home-hero-header">
                <div className="home-hero-header-layout">
                    <div className="home-title">
                      <strong>Accueil</strong>
                    </div>
                </div>
             </div>
             <div className="home-latest-post">
                Latest Product
             </div>
             <div className="home-container">
                   <ProductList  products={products}/>
                   <Sidebar />
                    
             </div>
              <div className="home-see-post-link">
                      <Link to="/products" className="home-link">see all post...</Link>

              </div>
                
         </section>);
}
 
export default Accueil ;