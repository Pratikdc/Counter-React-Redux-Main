import React from 'react';
import ReactDOM from 'react-dom/client';
import createStore from './redux/store/store';
import { Provider } from 'react-redux'
// import store from '../src/redux/store/store'
// import * as History from 'history';
import App from './App';
import * as History from 'history';
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate;
const history = History.createBrowserHistory();
export const store = createStore(history)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>
);
