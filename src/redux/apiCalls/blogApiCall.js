import { blogActions } from "../slices/blogSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";



// Create 
export function createBlog(newBlog) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.post(`/api/blogs`, newBlog, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
        },
        
      });
      dispatch(blogActions.addBlog(data));
      
     
      toast.success("Your order ");
      localStorage.removeItem("cartItems");
      
      
      
     
      
      
    } catch (error) {
      toast.error(error);
    }
  };
}

/////////////
// Get Blogs Count

export function getBlogsCount() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/blogs/count`);
      dispatch(blogActions.setBlogsCount(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

///////////////
// Fetch Single Blog
export function fetchSingleBlog(blogId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/blogs/${blogId}`);
      dispatch(blogActions.setBlog(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
///////////////////
// get All Comments
export function getAllBlogs() {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.get("/api/blogs");
      dispatch(blogActions.setBlogs(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
// Update Profile
export function updateBlog(blogId,status) {
  return async (dispatch, getState) => {
    try {
      const { data } = await request.put(
        `/api/blogs/${blogId}`,
        status,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );

      dispatch(blogActions.updateBlog(data));
      

  
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
