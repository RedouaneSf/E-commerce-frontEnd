import { Link } from "react-router-dom";

const PostItem = ({ blog ,username, userId}) => {

  

    return (
        
        <div className="post-item">
        <div className="post-item-image-wrapper">
            
        {blog?.orderItems?.map((item) => ( <img src={item.image.url} alt="" className="post-item-image" />))}
        </div>
        <div className="post-item-info-wrapper">
            <div className="post-item-info">
                <div className="post-item-author">
                    <strong>Author: </strong>
                     <Link 
                     className="post-item-username" 
                     to="/">
                        bigg store shop 
                    </Link> 
                </div>
                <div className="post-item-date">
                    {new Date(blog?.createdAt).toDateString()}
                </div>
            </div>
            <div className="post-item-details">
                <h4 className="post-item-category">Status:{blog?.orderStatus}</h4>
                <Link className="post-item-category" >
                {blog?.orderItems?.map((item) => ( <p> Prix:{item.prix} Dh</p>))}
                </Link>
            </div>
            
           
        </div>
    </div>
     );
}
 
export default PostItem;