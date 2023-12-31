import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    productsCount: null,
    productsCate: [],
    loading: false,
    isProductCreated: false,
    product:null,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProductsCount(state, action) {
      state.productsCount = action.payload;
    },
    setProductsCate(state, action) {
      state.productsCate = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setIsProductCreated(state) {
      state.isProductCreated= true;
      state.loading = false;
    },
    clearIsProductCreated(state) {
      state.isProductCreated = false;
    },
    setProduct(state,action) {
      state.product = action.payload;
    },
    setLike(state,action) {
      state.product.likes = action.payload.likes;
    },
    deleteProduct(state,action) {
      state.products = state.products.filter(p => p._id !== action.payload);
    },
    addCommentToProduct(state,action) {
      state.product.comments.push(action.payload);
    },
    updateCommentProduct(state,action) {
      state.product.comments = state.product.comments.map(commment => 
        commment._id === action.payload._id ? action.payload : commment
      )
    },
    deleteCommentFromProduct(state, action) {
      const comment = state.product.comments.find(c => c._id === action.payload);
      const commentIndex = state.product.comments.indexOf(comment);

      state.product.comments.splice(commentIndex, 1);
    }
  },
});

const productReducer = productSlice.reducer;
const productActions = productSlice.actions;

export { productActions, productReducer };

