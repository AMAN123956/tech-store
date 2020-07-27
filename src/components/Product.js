import React from  "react";
import {Link} from "react-router-dom";
import {ProductConsumer}  from "../context";
import Styled from "styled-components";

function Product(props){
    const {id,title,img,price,inCart} = props.product;
    return(
       <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
           <div className="card">
           <ProductConsumer>
           {(value) => (
               <div className="img-container p-5 " 
               onClick={ () =>  value.handleDetail(id)
               }>
                   <Link to="/details">
                       <img src={img} alt="product-img" className="card-img-top showcase" />
                   </Link>
                   <button className="cart-btn" disabled={inCart?true:false} 
                   onClick={ () => {
                       value.addToCart(id);
                       value.openModal(id);
                   }} >
                       {inCart?(<p className="text-capitialize mb-0" disabled>inCart</p>):
                        (<i className="fa fa-cart-plus" aria-hidden="true" />)
                       }
                   </button>
               </div>)}
               </ProductConsumer>
               <div className="card-footer d-flex justify-content-between">
                   <p className="align-self-center mb-0">
                       {title}
                   </p>
                   <h5 className="text-blue font-italic mb-0">
                       <span className="mr-1">
                           Rs.
                       </span>
                       {price}
                   </h5>
               </div>
           </div>
       </ProductWrapper>

    );
}


export default Product;

const ProductWrapper = Styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.05rem solid rgba(0,0,0,0.3);
        box-shadow:2px 2px 5px 0 rgba(0,0,0,0.3);
    }
    .card-footer{
        background:rgba(247,247,247);
    }
    
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top:{
    transition:all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background:var(--lightBlue);
    color:var(--mainWhite);
    border:none;
    border-radius:0.5rem 0 0 0;
    transform:translate(100%,100%);
    transition:all 1s linear;
}
.img-container:hover .cart-btn{
 transform:translate(0,0);
}
.cart-btn:hover{
    cursor:pointer;
    color:var(--mainBlue);
}
`;