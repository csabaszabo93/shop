import React from 'react';
import thunkMiddleware from 'redux-thunk';
import ReactDOM from 'react-dom';
import './static/css/App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./reducers/RootReducer";
import {applyMiddleware, createStore} from "redux";
import { Provider } from 'react-redux';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
      {console.log(store.getState().UIState)}
      <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
