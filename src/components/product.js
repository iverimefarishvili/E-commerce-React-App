import React from 'react';
import {Link} from 'react-router-dom';
import storeProducts from './data';
class Product extends React.Component{
   render(){
      return(
         

         <div className="col-9 mx-auto com-md-6 col-lg-3 my-3">
            <div className="card">
               <div className="img-container p-">
                  <Link to="/details">
                     <img src={this.props.name.img} />
                  </Link>
                  <button className="cart-btn" disabled={this.props.name.inCaart ? true : false }/>
               </div>
               
            </div>   
         </div>
      )
   } 
}
export default Product;