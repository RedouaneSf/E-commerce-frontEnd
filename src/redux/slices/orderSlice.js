import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    
    ordersCount: null,
    ordersCate: [],
    loading: false,
    isOrderCreated: false,
    order:null,
  },
  reducers: {
    setOrders(state, action) {
      state.orders = action.payload;
    },
    CreateOrder(state,action) {
      state.order = action.payload;
   },
    
   addOrder(state, action) {
    state.orders.push(action.payload)
  },
    deleteOrder(state,action) {
      state.orders = state.orders.filter(c => c._id !== action.payload);
     },
     setOrdersCount(state, action) {
      state.ordersCount = action.payload;
    },
    setOrdersCate(state, action) {
      state.ordersCate = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setIsOrderCreated(state) {
      state.isOrderCreated= true;
      state.loading = false;
    },
    clearIsOrderreated(state) {
      state.isOrderCreated = false;
    },
    
  },
});

const orderReducer = orderSlice.reducer;
const orderActions = orderSlice.actions;

export { orderActions, orderReducer};
