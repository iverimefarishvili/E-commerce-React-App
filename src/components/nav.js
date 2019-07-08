import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';

class Navbar extends React.Component{
   render(){
       return(
       <nav className="navbar navbar-expand bg-secondary navbar-dark">
          
            <Link to="/">
              
              <LogoComponent className="logo" src={logo}/>
              
            </Link>
            <ul className="navbar-nav align-items-center">
              
              <li className="nav-item ml-5">
                <Link to="/productlist">
                  
                  <button className="btn btn-default">
                      <Text>
                      Products
                      </Text>
                    </button>
                </Link>
              </li>
              <li className="nav-item ml-5 ">
                  <Link to="/cart">
                    <button className="btn btn-info">
                      
                      My Cart
                    </button>
                  </Link>
              </li>
              
            </ul>
            
        
         </nav>
            
    );
} 
}

const Text = styled.h2`
  color:white;
  &:hover {
    list-style:none;
    text-decoration:none;
    border-bottom:none !important;
  }
`
const LogoComponent = styled.img`
  width:60px;
`




export default Navbar;
