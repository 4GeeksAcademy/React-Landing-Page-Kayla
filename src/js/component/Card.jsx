import React from "react";

const Card = () => {
    return(
        
        <div className="card p-2" style={{width: '18rem'}}>
        <img src="http://via.placeholder.com/500x325" className="card-img-top" alt="Card image"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.</p>
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
      
    )
}
   
        
       
     

export default Card