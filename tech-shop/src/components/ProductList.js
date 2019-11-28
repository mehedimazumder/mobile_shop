import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
export default class   extends Component {
    state={
        Products: storeProducts
    }
    render() {
        console.log(this.state.Products);
        return ( 
           <React.Fragment>
               <div className="py-5">
                   <div className="container">
                        <Title name="our" title="products" />
                       <div className="row">

                       </div>
                   </div>
               </div>
           </React.Fragment>
        )
    }
}
