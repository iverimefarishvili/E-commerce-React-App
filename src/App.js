import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/nav';
import Cart from './components/cart';
import Details from './components/details';
import Productlist from './components/productslist';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Navbar/>
      <Route exact path="/" component={Productlist}/>      
      <Route path="/cart" component={Cart}/>
      <Route path="/details" component={Details} />
    </React.Fragment>
    </Router>
  );
}

export default App;
