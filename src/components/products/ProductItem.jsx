import { Link } from "react-router-dom";

const ProductItem = ({ product ,username, userId}) => {

   

    return ( 
        <div className="post-item">
            <div className="post-item-image-wrapper">
                
                <img src={product?.image.url} alt="" className="post-item-image" />
            </div>
            <div className="post-item-info-wrapper">
                <div className="post-item-info">
                    <div className="post-item-author">
                        
                         <Link 
                         className="post-item-username" 
                         to="/">
                            bigg store shop 
                        </Link> 
                       
                    </div>
                    <div className="post-item-date">
                        {new Date(product?.createdAt).toDateString()}
                    </div>
                </div>
                <div className="post-item-details">
                    <h4 className="post-item-title">{product?.lib}<span></span> <br /><br /><Link className="post-item-category" 
                     to={`/products/categories/${product?.category}`}>
                    Category: {product?.category } 
                    </Link></h4>
                    
                    
                    <Link className="post-item-category" 
                     to={`/posts/categories/${product?.category}`}>
                     {product?.prix} Dh 
                    </Link>
                </div>
                <p className="post-item-description">
                    {product?.description}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo hic assumenda necessitatibus in voluptatibus sapiente 
                    debitis. Perspiciatis, ipsam eos? Tempora dolorem itaque sed 
                    assumenda maiores iure animi et magnam quae!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo hic assumenda necessitatibus in voluptatibus sapiente 
                    debitis. Perspiciatis, ipsam eos? Tempora dolorem itaque sed 
                    assumenda maiores iure animi et magnam quae!
                </p>
                <Link className="post-item-link" to={`/products/details/${product?._id}`}>
                   Read More...
                </Link>
            </div>
        </div>
     );
}
 
export default  ProductItem;