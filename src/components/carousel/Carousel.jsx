const Carousel = () => {
    return ( 


   
     <section className="classCarousel">
    <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
   
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-2" data-slide-to="1"></li>
      <li data-target="#carousel-example-2" data-slide-to="2"></li>
    </ol>
 
    <div class="carousel-inner" role="listbox" style={{borderRadius:"10px"}}>
      <div class="carousel-item active">
        <div class="view">
          <img class="d-block w-100" src="https://res.cloudinary.com/dmndm9fre/image/upload/v1693861776/cld-sample-3.jpg"
            alt="First slide" style={{height:"650px",width:"200px"}}/>
          <div class="mask rgba-black-light"></div>
        </div>
        <div class="carousel-caption">
          <h3 class="h3-responsive">Light mask</h3>
          <p>First text</p>
        </div>
      </div>
      <div class="carousel-item">
        
        <div class="view">
          <img class="d-block w-100" src="https://res.cloudinary.com/dmndm9fre/image/upload/v1695076432/tomaaoj25k1nlbhdzpwm.jpg"
            style={{height:"650px",width:"200px"}}  alt="Second slide"/>
          <div class="mask rgba-black-strong"></div>
        </div>
        <div class="carousel-caption">
          <h3 class="h3-responsive">Strong mask</h3>
          <p>Secondary text</p>
        </div>
      </div>
      <div class="carousel-item">
       
        <div class="view">
          <img class="d-block w-100" src="https://res.cloudinary.com/dmndm9fre/image/upload/v1693861777/cld-sample-5.jpg"
           style={{height:"650px",width:"200px"}}  alt="Third slide"/>
          <div class="mask rgba-black-slight"></div>
        </div>
        <div class="carousel-caption">
          <h3 class="h3-responsive">Slight mask</h3>
          <p>Third text</p>
        </div>
      </div>
    </div>
    
    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
   
  </div>
  


     </section>
      



     );
}
 
export default Carousel;