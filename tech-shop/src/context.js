import React, {Component} from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detaiProduct: detailProduct
    };
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts}
        });
    };
    handleDetaile = () => {
        console.log("details P");
    };

    addToCart = () => {
        console.log("cart add");
    };
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetaile: this.state.handleDetaile,
                addToCart: this.state.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};