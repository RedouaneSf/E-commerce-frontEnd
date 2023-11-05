import { useState, useEffect } from "react";
import "./update-product.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../redux/apiCalls/productApiCall";
import { fetchCategories } from "../../redux/apiCalls/categoryApiCall";

const UpdateProductModal = ({ setUpdateProduct, product }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  const [lib, setlib] = useState(product.lib);
  const [description, setDescription] = useState(product.description);
  const [category, setCategory] = useState(product.category);
  const [qte, setQte] = useState(product.qte);
  const [prix, setPrix] = useState(product.prix);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (lib.trim() === "") return toast.error("Product Title is required");
   
    
    if (category.trim() === "") return toast.error("Product  Category is required");
    if (description.trim() === "")
      return toast.error("Post Description is required");

    dispatch(updateProduct({ lib, category, description,prix,qte }, product?._id));
    setUpdateProduct(false);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="update-post">
      <form onSubmit={formSubmitHandler} className="update-post-form">
        <abbr title="close">
          <i
            onClick={() => setUpdateProduct(false)}
            className="bi bi-x-circle-fill update-post-form-close"
          ></i>
        </abbr>
        <h1 className="update-post-title">Update Product</h1>
        <input
          type="text"
          className="update-post-input"
          value={lib}
          onChange={(e) => setlib(e.target.value)}
        />
        <input
          type="text"
          className="update-post-input"
          value={qte}
          onChange={(e) => setQte(e.target.value)}
        />
        <input
          type="text"
          className="update-post-input"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />
        <select
          className="update-post-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled value="">
            Select A Category
          </option>
          {categories.map((category) => (
            <option key={category._id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
        <textarea
          className="update-post-textarea"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit" className="update-post-btn">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProductModal;
