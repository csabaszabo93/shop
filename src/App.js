import React from 'react';
import AddShopContainer from './components/containers/AddShopContainer';
import Header from './components/Header';
import Welcome from './components/welcome/Welcome';
import ShoppingListContainer from './components/containers/ShoppingList'
import ShopListContainer from './components/containers/ShopList'
import './static/css/container.css';
import './static/css/widget.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProductListContainer from "./components/containers/ProductList";
import QuantityModal from "./components/product-list/QuantityModal";

let App = () => {
  return (
      <Router>
        <div>
          <Header subtitle="Take that home..." />
          <Route exact path="/" render={() => (
              <React.Fragment>
                <div className="container">
                  <div className="widget">
                    <Welcome/>
                  </div>
                </div>
              </React.Fragment>
          )}/>
          <Route path="/shops" render={() => (
              <React.Fragment>
                <div className="container">
                  <div className="widget">
                    <ShopListContainer/>
                    <AddShopContainer/>
                  </div>
                </div>
              </React.Fragment>
          )}/>
          <Route path="/actual" render={() => (
              <React.Fragment>
                <div className="container">
                  <div className="widget">
                    <QuantityModal/>
                    <ProductListContainer/>
                    <ShoppingListContainer/>
                  </div>
                </div>
              </React.Fragment>
          )} />
        </div>
      </Router>
  )
};


export default App;
