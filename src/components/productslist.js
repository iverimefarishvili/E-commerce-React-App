import React from 'react';
import Product from './product';
import Title from './title';
import storeProducts from './data';



class Productslist extends React.Component{
   state = {
      products: storeProducts
   }
   render(){
      
      return(
         <div>
            {
               this.state.products.map(items => {
                  return <Product key={items.id} name={items} />
               })
            }
         </div>
      )
   } 
}
export default Productslist;