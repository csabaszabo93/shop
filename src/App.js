import React from 'react';
import Header from './components/Header';
import './static/css/App.css';
import {menuTitleToComponent} from "./components/menu/TitleToComponent";
import MenuContainer from "./components/containers/Menu";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    selectedMenuItem: state.UIState.selectedMenuItem
  }
};


let App = ({selectedMenuItem}) => {
  return (
    <div id="App">
      <Header/>
      <MenuContainer/>
      <div className="container">
        <div className="widget">
          {menuTitleToComponent[selectedMenuItem]}
        </div>
      </div>
    </div>
  )
};

App = connect(mapStateToProps)(App);

export default App;
