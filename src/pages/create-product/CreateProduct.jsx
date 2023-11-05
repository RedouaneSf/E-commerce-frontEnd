import { useState, useEffect } from "react";
import "./create-product.css";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../redux/apiCalls/productApiCall";
import { RotatingLines } from "react-loader-spinner";
import { fetchCategories } from "../../redux/apiCalls/categoryApiCall";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { loading, isProductCreated } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);

  const [lib, setLib] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [prix, setPrix] = useState("");
  const [qte, setQte] = useState("");
  const [file, setFile] = useState(null);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (lib.trim() === "") return toast.error("Product Title is required");
    if (qte.trim() === "") return toast.error("Product qte is required");
    if (prix.trim() === "") return toast.error("Product prix is required");
    if (category.trim() === "") return toast.error("Product Category is required");
    if (description.trim() === "")
      return toast.error("Post Description is required");
    if (!file) return toast.error("Post Image is required");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("lib", lib);
    formData.append("qte", qte);
    formData.append("prix", prix);
    formData.append("description", description);
    formData.append("category", category);

    dispatch(createProduct(formData));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isProductCreated ) {
      navigate("/accueil");
    }
  }, [isProductCreated , navigate]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <section className="create-post">
      <h1 className="create-post-title">Create New Product</h1>
      <form onSubmit={formSubmitHandler} className="create-post-form">
        <input
          type="text"
          placeholder="Product lib"
          className="create-post-input"
          value={lib}
          onChange={(e) => setLib(e.target.value)}
        />
         <input
          type="text"
          placeholder="Product prix"
          className="create-post-input"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />
         <input
          type="text"
          placeholder="Product qte"
          className="create-post-input"
          value={qte}
          onChange={(e) => setQte(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="create-post-input"
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
          className="create-post-textarea"
          rows="5"
          placeholder="Post Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="file"
          name="file"
          id="file"
          className="create-post-upload"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="create-post-btn">
          {loading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="40"
              visible={true}
            />
          ) : (
            "Create"
          )}
        </button>
      </form>
    </section>
  );
};

export default CreateProduct ;
