import React from "react";
import CartThing from "./CartThing";


function CartList({value}) {
    
    const { cart } = value
    console.log(value,cart);
    return (
        <div className="container-fluid">
           {cart.map(item=> {
             return  <CartThing key={item.id} item={item} value={value} /> ;
           })}
        </div>
    );
}

export default CartList;