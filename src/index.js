import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from "./components/reducers/RootReducer";
import {createStore} from "redux";
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
