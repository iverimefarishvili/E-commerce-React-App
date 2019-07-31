import React from 'react';
import {Link} from 'react-router-dom';
import storeProducts from './data';
import cart from '../cart.png';
import styled from 'styled-components';
class Product extends React.Component{
   render(){
      return(
         
        <div className="d-flex row">
         <Main className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
               <div className="img-container p-5">
                  <Link to="/details">
                     <img 
                     src={this.props.name.img} 
                     alt="product"
                     className="card-img-top"
                     />
                  </Link>
                  <button className="cart-btn" 
                  disabled={this.props.name.inCart ? true : false } 
                  onClick={() => {console.log('added to cart');}}
                  >
                  {this.props.name.inCart ? (
                     <p className="text-capitalize mb-0" disabled style={{color: "aqua"}}>
                     In Cart
                     </p>
                  ) : (
                 <img src={cart} style={{width: 25}}/>
                     //<i className="fas fa-cart-plus" />
                  )
                  }
                  </button>
                  <div className="card-footer d-flex justify-content-between">
                     <p className="align-self-center mb-0">
                        {this.props.name.title}
                     </p>
                     <h5 className="text-blue font-italic mb-0">
                        <span className="mr-1">$</span>
                        {this.props.name.price}
                     </h5>
                  </div>
               </div>
               
            </div>   
         </Main>
         </div>
      )
   } 
}
const Main = styled.div`
 .card{
   
   transition:all 1s linear;
 }
 .card-footer{
    background-color:transparent;
    border-top:transparent;
    
 }
 .img-container{
    position: relative;
    overflow:hidden;
 }
 .card-img-top{
    transition:all 0.5s linear;
 }
 .card-footer{
    transition:all 0.5s linear;
 }
 .cart-btn{
    transition:all 0.5s linear;
 }
 .img-container:hover .card-footer{
    transform: scale(1.2);
 }
 .img-container:hover .card-img-top{
    transform: scale(1.2);
 }
 .img-container:hover .cart-btn{
   transform: translate(0,0);
 }
 .cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--gray);
    border:none;
    border-radius:0.4rem 0 0 0;
    transform:translate(100%, 100%);
 }
 .cart-btn:hover{
      background-color:white;
 }
 &:hover{
    .card{
       border
    }
 }
`;
export default Product;