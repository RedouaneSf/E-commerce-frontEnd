import "./product-page.css";
import ProductList from "../../components/products/ProductList";
import Sidebar from "../../components/sidebar/Sidebar";
import Pagination from "../../components/pagination/Pagination";
import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts,getProductsCount } from "../../redux/apiCalls/productApiCall";

const POST_PER_PAGE = 3;

const ProductPage = () => {
  const dispatch = useDispatch();
  const { productsCount, products } = useSelector(state => state.product);

  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(productsCount / POST_PER_PAGE);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    dispatch(getProductsCount());
  }, []);

  return (
    <>
    <div className="home-hero-header">
                <div className="home-hero-header-layout">
                    <div className="home-title">
                      <strong>Products</strong>
                    </div>
                </div>
             </div>
      <section className="posts-page">
        <ProductList products={products} />
        <Sidebar />
      </section>
      <Pagination 
       pages={pages} 
       currentPage={currentPage}
       setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default ProductPage ;
