import { useParams, Link } from "react-router-dom";
import "./category.css";
import ProductList from "../../components/products/ProductList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductBasedOnCategory } from "../../redux/apiCalls/productApiCall";

const Category = () => {
  const dispatch = useDispatch();
  const { productsCate } = useSelector((state) => state.product);

  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchProductBasedOnCategory(category));
    window.scrollTo(0, 0);
  }, [category]);

  

  return (
    <section className="category">
      {productsCate.length === 0 ? (
        <>
          <h1 className="category-not-found">
            Posts with <span>{category}</span> category not found
          </h1>
          <Link to="/posts" className="category-not-found-link">
            Go to posts page
          </Link>
        </>
      ) : (
        <>
          <h1 className="category-title">Posts based on {category}</h1>
          <ProductList products={productsCate} />
        </>
      )}
    </section>
  );
};

export default Category;
