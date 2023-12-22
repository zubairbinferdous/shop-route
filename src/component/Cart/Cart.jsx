/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({ cartData , removeFromCart}) => {
    
   let sms ;
   if(cartData.length === 0 ){
        sms = <p> add something here  </p>
    }

    return (
        <div>
            <h1>this is cart area {cartData.length}</h1>
            {sms}
            <div className="cart_info">
                {
                    cartData.map( data => <p key={data._id}> {data.name}  <button onClick={ () => removeFromCart(data._id)}>X</button> </p> )
                }
            </div>
        </div>
    );
};

export default Cart;


// contisitonal rendaring 