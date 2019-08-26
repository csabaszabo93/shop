import React from 'react';
import Header from './components/Header';
import './static/css/App.css';
import MenuContainer from "./components/containers/Menu";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    componentToRender: state.UIState.componentToRender
  }
};


let App = ({componentToRender}) => {
  return (
    <div id="App">
      <Header/>
      <MenuContainer/>
      <div className="container">
        <div className="widget">
          {componentToRender}
        </div>
      </div>
    </div>
  )
};

App = connect(mapStateToProps)(App);

export default App;
