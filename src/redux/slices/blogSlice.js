import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
   name: "blog",
   initialState: {
    blogs: [],
    blogsCount: null,
    blog: null,
   },
   reducers: {
      addBlog(state, action) {
        state.blogs.push(action.payload)
      },
      setBlogs(state, action) {
        state.blogs = action.payload;
      },
       setBlogsCount(state, action) {
         state.blogsCount = action.payload;
       },
       setBlog(state,action) {
         state.blog = action.payload;
       },
       updateBlog(state,action) {
        state.blog = action.payload;
      },
   
   },
});

const blogReducer = blogSlice.reducer;
const blogActions = blogSlice.actions;

export { blogActions, blogReducer }