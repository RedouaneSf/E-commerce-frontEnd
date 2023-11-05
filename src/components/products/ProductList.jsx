import ProductItem from "./ProductItem";
import "./product.css";


const ProductList = ({ products }) => {
    
    return ( 
    <div className="" >
        {products?.map(item => <ProductItem product={item} key={item._id} />)}
    </div> 
    );
}
 
export default ProductList;