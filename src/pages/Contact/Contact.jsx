import "./contact.css";
const Contact = () => {
    return (  
       <section>
        <div className="home-hero-header">
                <div className="home-hero-header-layout">
                    <div className="home-title">
                      <strong>Contact</strong>
                    </div>
                </div>
             </div>
        <div class="container mt-5">

        
        
        <section class="dark-grey-text mb-5">
          
          
         
    
          
          <h3 class="font-weight-bold text-center mb-4">Contact Us</h3>
      
          <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
            eum porro a pariatur veniam.</p>
    
         
          <div class="row">
    
           
            <div class="col-lg-5 mb-lg-0 pb-lg-3 mb-4">
    
              
              <div class="card">
                <div class="card-body">
                  
                  <div class="form-header blue accent-1">
                    <h3 class="mt-2"><i class="fas fa-envelope"></i> Write to us:</h3>
                  </div>
                  <p class="dark-grey-text">We'll write rarely, but only the best content.</p>
                  
                  <div class="md-form">
                    <i class="fas fa-user prefix grey-text"></i>
                    <input type="text" id="form-name" class="form-control"/>
                    <label for="form-name">Your name</label>
                  </div>
                  <div class="md-form">
                    <i class="fas fa-envelope prefix grey-text"></i>
                    <input type="text" id="form-email" class="form-control"/>
                    <label for="form-email">Your email</label>
                  </div>
                  <div class="md-form">
                    <i class="fas fa-tag prefix grey-text"></i>
                    <input type="text" id="form-Subject" class="form-control"/>
                    <label for="form-Subject">Subject</label>
                  </div>
                  <div class="md-form">
                    <i class="fas fa-pencil-alt prefix grey-text"></i>
                    <textarea id="form-text" class="form-control md-textarea" rows="3"></textarea>
                    <label for="form-text">Send message</label>
                  </div>
                  <div class="text-center">
                    <button class="btn btn-light-blue" style={{backgroundColor:"InfoText",color:"white"}} >Submit</button>
                  </div>
                </div>
              </div>
             
    
            </div>
            
            <div class="col-lg-7">
    
              
              <div id="map-container-section" class="z-depth-1-half map-container-section mb-4" style={{height: "400px"}}>
                <iframe src="https://maps.google.com/maps?q=Manhatan&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0"
                  style={{border:"0"}} allowfullscreen></iframe>
              </div>
             
              <div class="row text-center">
                <div class="col-md-4">
                  <a class="btn-floating blue accent-1">
                    <i class="fas fa-map-marker-alt"></i>
                  </a>
                  <p>New York, 94126</p>
                  <p class="mb-md-0">United States</p>
                </div>
                <div class="col-md-4">
                  <a class="btn-floating blue accent-1">
                    <i class="fas fa-phone"></i>
                  </a>
                  <p>+ 01 234 567 89</p>
                  <p class="mb-md-0">Mon - Fri, 8:00-22:00</p>
                </div>
                <div class="col-md-4">
                  <a class="btn-floating blue accent-1">
                    <i class="fas fa-envelope"></i>
                  </a>
                  <p>info@gmail.com</p>
                  <p class="mb-0">sale@gmail.com</p>
                </div>
              </div>
    
            </div>
           
    
          </div>
       
    
        </section>
       
    
    
      </div>
    </section>
    );
}
 
export default Contact;