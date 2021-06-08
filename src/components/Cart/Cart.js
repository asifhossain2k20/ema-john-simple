import React from 'react';

const Cart = (props) => {

    const cart=props.cart;
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price;
        
    }
    let shipping=0;
    if(total>40){
        shipping=22;
    }
    else if(total>20){
        shipping=30;
    }
    const taxStr=(total*0.1).toFixed(2);
    const tax=Number(taxStr);
    return (
        <div>
                 <h1>This is Card</h1>
                <h3>Product Added {props.cart.length}</h3>
                <h3>Shipping Cost : {shipping}</h3>
                <h2>Tax : {tax}</h2>
                <h3>Total : {total+shipping+tax}</h3>
            
        </div>
    );
};

export default Cart;