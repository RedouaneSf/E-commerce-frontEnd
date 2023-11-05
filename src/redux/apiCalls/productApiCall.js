import { productActions } from "../slices/productSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// Fetch Posts Based On Page Number
export function fetchProducts(pageNumber) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/products?pageNumber=${pageNumber}`);
      dispatch( productActions.setProducts(data));
    } catch (error) {
        
    }
  };
}
// Get Posts Count
export function getProductsCount() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/products/count`);
      dispatch(productActions.setProductsCount(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Fetch Posts Based On Category
export function fetchProductBasedOnCategory(category) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/products?category=${category}`);
      dispatch(productActions.setProductsCate(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Create Product
export function createProduct(newPost) {
  return async (dispatch, getState) => {
    try {
      dispatch(productActions.setLoading());
      await request.post(`/api/products`, newPost, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("product created");

      dispatch(productActions.setIsProductCreated());
      setTimeout(() => dispatch(productActions.clearIsProductCreated()), 2000); // 2s
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(productActions.clearLoading());
    }
  };
}

// Fetch Single Product
export function fetchSingleProduct(postId) {
  return async (dispatch) => {
    try {
      dispatch(productActions.setLoading());
      const { data } = await request.get(`/api/products/${postId}`);
      dispatch(productActions.setProduct(data));
      dispatch(productActions.clearLoading());
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(productActions.clearLoading());
    }
  };
}

// Toggle Like Product
export function toggleLikeProduct(postId) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.put(`/api/products/like/${postId}`, {}, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(productActions.setLike(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Update Product Image
export function updateProductImage(newImage,postId) {
  return async (dispatch,getState) => {
    try {
      await request.put(`/api/products/update-image/${postId}`, newImage, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type":"multipart/form-data",
        }
      });
      toast.success("New post image uploaded successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Update Product
export function updateProduct(newPost,postId) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.put(`/api/products/${postId}`, newPost, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(productActions.setProduct(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Delete Post
export function deleteProduct(postId) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.delete(`/api/products/${postId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        }
      });
      dispatch(productActions.deleteProduct(data.postId));
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

// Get All Products
export function getAllProducts() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/products`);
      dispatch( productActions.setProducts(data));
    } catch (error) {
      toast.error(error.response.data.message);
     
    }
  };
}