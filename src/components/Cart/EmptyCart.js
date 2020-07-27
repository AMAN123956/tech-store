import React from "react";



function EmptyCart() {
    return(
        <div className="container mt-5">
            <div className="row">
                <div ClassName="col-10 mx-auto text-center text-empty">
                    <h1 style={{color:"blue",textTransform:"capitalize"}}>your cart is currently empty</h1>
                </div>
            </div>
        </div>
    );
}


export default EmptyCart;