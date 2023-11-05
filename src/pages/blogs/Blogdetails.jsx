import { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleBlog
} from "../../redux/apiCalls/blogApiCall";


const Blogdetails= () => {
  const dispatch = useDispatch();
  const { blog} = useSelector((state) => state.blog);
  const { user } = useSelector((state) => state.auth);

  const { id } = useParams();

   useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSingleBlog(id));
  }, [id]);

 
  return (
    <section className="post-details">
      <h4>Order Ref:{blog?._id}</h4>
      <h3>Info</h3> <br /> 
      <span class="badge badge-light"style={{marginRight:"10px"}}>user:{blog?.username}</span> 
      <span class="badge badge-light"style={{marginRight:"10px"}}>email:{blog?.user?.email}</span> 
       
      <span class="badge badge-light" style={{marginRight:"10px"}}>Adress:{blog?.adress}</span> 
      <span class="badge badge-light"style={{marginRight:"10px"}}>Ville:{blog?.ville}</span>
      <span class="badge badge-light"style={{marginRight:"10px"}}>Code Postal:{blog?.codePostal}</span>  <br />
      <span class="badge badge-secondary"style={{marginRight:"10px"}}>status:{blog?.orderStatus}</span> <br />
      <span class="badge badge-light"style={{marginRight:"10px"}}> Shipping Date:{new Date(blog?.createdAt).toDateString()}</span> <span></span>
      {blog?.orderItems?.map((item) => (
<div class="card" style={{marginBottom:"10px",marginTop:"20px"}}>
        
  <div class="card-header">
   Product : {item?.lib}
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item"><img src={item?.image?.url}  style={{width:"200px",height:"200px"}} class="rounded mx-auto d-block" alt="..."/></li>
  
    <li class="list-group-item">Quantity:{item?.qte}</li>
    <li class="list-group-item">Prix:{item?.prix}</li>
    
   
   
  </ul>
</div> ))}
<h1>Total ttc : <span class="badge badge-secondary">{blog?.total_ttc}</span></h1>
      
    </section>
  );
};

export default Blogdetails;

