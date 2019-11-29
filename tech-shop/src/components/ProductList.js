import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer } from '../context';

export default class   extends Component {
    state={
        Products: storeProducts
    }
    render() {
        return ( 
           <React.Fragment>
               <div className="py-5">
                   <div className="container">
                        <Title name="our" title="products" />
                       <div className="row">
                            <ProductConsumer>
                                {output => {
                                return output.products.map(product => {
                                    return <Product key={product.id} product={product} />
                                });
                                }}
                            </ProductConsumer>
                       </div>
                   </div>
               </div>
           </React.Fragment>
        )
    }
}
