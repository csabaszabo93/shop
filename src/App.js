import React from 'react';
import AddOption from './components/actual/AddOption';
import AddShopContainer from './components/containers/AddShopContainer';
import Header from './components/Header';
import Welcome from './components/welcome/Welcome';
import ShoppingListContainer from './components/containers/ShoppingList'
import ShopListContainer from './components/containers/ShopList'
import './styles/container.css';
import './styles/widget.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {

  render() {
    const subtitle = 'Take that home....';

    return (
        <Router>
          <div>
            <Header subtitle={subtitle} />
            {/*<Route exact path="/" component={Welcome} />*/}
            <Route exact path="/" render={props => (
                <React.Fragment>
                  <div className="container">
                    <div className="widget">
                      <Welcome/>
                    </div>
                  </div>
                </React.Fragment>
            )}/>
            <Route path="/shops" render={props => (
                <React.Fragment>
                    <div className="container">
                        <div className="widget">
                            <ShopListContainer/>
                            <AddShopContainer
                                handleAddOption={this.handleAddShop}
                            />
                        </div>
                    </div>
                </React.Fragment>
            )}/>
            <Route path="/actual" render={props => (
                <React.Fragment>
                  <div className="container">
                    <div className="widget">
                      <ShoppingListContainer/>
                      <AddOption
                          handleAddOption={this.handleAddOption}
                      />
                    </div>
                  </div>
                </React.Fragment>
            )} />
          </div>
        </Router>
    );
  }
}


export default App;
