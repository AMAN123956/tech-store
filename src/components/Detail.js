import React from "react";
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";

function Detail(){
   return(
    <ProductConsumer>
      { value => {
        console.log(value.detailProduct);
        const { id,title,img,price,inCart,company,model,info} = value.detailProduct;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center my-5">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} alt="product" className="img-fluid detailImage"  />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>model:{model}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by:<span className
                  ="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price:<span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about products
                </p>
                <p className="text-muted lead">
                  {info}
                </p>
              </div>
              <Link to="/">
                <button className="btn-primary text-capitalize ml-3 detail">Back to products</button>
              </Link>
              <button className="btn-primary text-capitalize ml-3 detail" disabled={inCart?true:false}
               onClick={() => {
                 value.addToCart(id);
                 value.openModal(id);
               }}
              >
                {inCart?"inCart":"add to cart"}
              </button>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}


export default Detail;