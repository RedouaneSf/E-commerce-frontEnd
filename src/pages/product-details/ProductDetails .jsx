import { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import "./product-details.css";
import { toast } from "react-toastify";

import swal from "sweetalert";
import UpdateProductModal from "./UpdateProductModal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchSingleProduct,
  toggleLikeProduct,
  updateProductImage
} from "../../redux/apiCalls/productApiCall";
import "./add-to-cart.css";
import { addToCart } from "../../redux/apiCalls/cartApiCall";
import Spinner from "../../components/spinner/Spinner";

const ProductDetails= () => {
  const dispatch = useDispatch();
  const { product,loading } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

  const { id } = useParams();

  const[qte,SetQte]=useState(1);

  const [file, setFile] = useState(null);
  const [updateProduct, setUpdateProduct] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSingleProduct(id));
  }, [id]);

  //Add to cart
  const addToCartHandler=()=>{
          dispatch(addToCart({
            id:product?.id,
            qte:qte,
            prix:product?.prix,
            lib:product?.lib,
            image:product?.image,
            category:product?.category
          }))

          toast.info("add to cart");
  }

  // Update Image Submit Handler
  const updateImageSubmitHandler = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("there is no file!");

    const formData = new FormData();
    formData.append("image", file);
    dispatch(updateProductImage(formData,product?._id));
  };

  const navigate = useNavigate();

  // Delete Product Handler
  const deleteProductHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch( deleteProduct(product?._id));
        navigate(`/profile/${user?._id}`);
      }
    });
  };

  if(loading)
  {
    return <Spinner/>
  }

  return (
    <section className="post-details">
      <div className="post-details-image-wrapper">
        <img
          src={file ? URL.createObjectURL(file) : product?.image.url}
          alt=""
          className="post-details-image"
        />
        {user?.isAdmin===true &&
         (
          <form
            onSubmit={updateImageSubmitHandler}
            className="update-post-image-form"
          >
            <label htmlFor="file" className="update-post-label">
              <i className="bi bi-image-fill"></i>
              Select new image
            </label>
            <input
              style={{ display: "none" }}
              type="file"
              name="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button type="submit">upload</button>
          </form>
        )}
      
      </div>
      <h1 className="post-details-title">{product?.lib}</h1>
      <div className="post-details-user-info">
        <img
          src={product?.productOwner.profilePhoto?.url}
          alt=""
          className="post-details-user-image"
        />
        <div className="post-details-user">
          <strong>
            Bigg house
          </strong>
          <span>{new Date(product?.createdAt).toDateString()}</span>
        </div>
      </div>
      <p className="post-details-description">
        {product?.description}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est
        reprehenderit, molestiae officia non corrupti iusto, molestias quod
        repellat, distinctio temporibus explicabo? Placeat, dolorum atque fugiat
        vitae suscipit ratione quo? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Vero est reprehenderit, molestiae officia non corrupti
        iusto, molestias quod repellat, distinctio temporibus explicabo?
        Placeat, dolorum atque fugiat vitae suscipit ratione quo?
      </p>
      
      <input className="input-number"
              value={qte}
              onChange={(e) => SetQte(e.target.value)}
              type="number"
              min="1"
              max="10"
            />
      <button class="addtocart"  onClick={addToCartHandler} style={{marginRight:"50px",marginLeft:"200px"}}>
        <div class="pretext">
         <i class="fas fa-cart-plus"></i> ADD TO CART
        </div>
  
          <div class="pretext done">
          <div class="posttext"><i class="fas fa-check"></i> ADDED</div>
        </div>
  
      </button>
     


      <div className="post-details-icon-wrapper">
        <div>
        {user && (
            <i
              onClick={() => dispatch(toggleLikeProduct(product?._id))}
              className={
                product?.likes.includes(user?._id)
                  ? "bi bi-hand-thumbs-up-fill"
                  : "bi bi-hand-thumbs-up"
              }
            ></i>
          )}
          <small>{product?.likes.length} likes</small>
          <span></span><br />
          
        </div>
        {user?._id === product?.productOwner?._id && (
          <div>
            <i
              onClick={() =>setUpdateProduct(true)}
              className="bi bi-pencil-square"
            ></i>
            <i onClick={deleteProductHandler} className="bi bi-trash-fill"></i>
          </div>
        )}
      </div>
     
      {updateProduct && (
        <UpdateProductModal product={product} setUpdateProduct={setUpdateProduct} />
      )}
    </section>
  );
};

export default ProductDetails;
