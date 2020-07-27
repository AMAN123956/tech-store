import React from 'react';
import {Switch,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  
import './App.css';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Detail from "./components/Detail";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal";
import Default from "./components/Default";

function App() {
  return (
    <React.Fragment>
      <Navbar />
  <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/details"  component={Detail} />
      <Route path="/cart"   component={Cart} />
      <Route component={Default} />
 </Switch>
 <Modal />
    </React.Fragment>
  );
}

export default App;
