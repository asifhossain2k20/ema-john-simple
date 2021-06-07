import React from 'react';

import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
    const {name,img,seller,price,stock}=props.product;
    return (
        <div class='product'>
            <div className="product-img">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="product-details">
                <h2 className='product-name'>{name}</h2>
                <p><small>By {seller}</small></p>
                <br />
                <p>${price}</p>
                <p>Only {stock} in stock order soon</p>
                <button onClick={()=>props.handleAddProduct(props.product)} className='btn'><FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;