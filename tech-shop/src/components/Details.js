import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return(
                        <div className="container py-5" onClick={() => console.log(id)}>
                            {/*title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="phone" className="img-fluid"/>
                                </div>
                                {/*product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>model: {title}</h1>
                                    <h4 className="text-uppercase text-title text-muted mt-3 mb-2">made by: <span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about the product:
                                    </p>
                                    <p className="text-muted lead mt-1"> {info}</p>
                                    {/*button */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                back to home
                                            </ButtonContainer>
                                        </Link> 
                                        <ButtonContainer cart
                                        disabled={inCart? true:false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id)
                                        }}>
                                           {inCart? "in cart" : "add to cart"}         
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
