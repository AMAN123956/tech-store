import React from "react";
import styled from "styled-components";
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";


function Modal(){
    return (
        <ProductConsumer>
            {(value) => {
                const {modalOpen,closeModal} = value;
                const {img,title,price} = value.modalProduct;
                if(!modalOpen){
                    return null;
                }
                else {
                    return(<ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h5>item added to the cart</h5>
                                    <img src={img} className="img-fluid" alt="product" />
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">price:${price}</h5>
                                    <Link to="/">
                                        <button className="btn-primary ml-3 text-capitalize" onClick={() =>closeModal()}>
                                            store
                                        </button>
                                    </Link>
                                    <Link to="/cart">
                                        <button className="btn-primary ml-3 text-capitalize"onClick={() => closeModal()}>
                                            cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>);
                }
            }}
        </ProductConsumer>
    );
}
export default Modal;
const ModalContainer = styled.div`
position: fixed;
top:0;
bottom:0;
left:0;
right:0;
background:rgba(0,0,0,0.3);
display:flex;
align-item:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}
.btn-primary{
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.3);
    border-radius:10px;
    font-family:cursive;
}

`;