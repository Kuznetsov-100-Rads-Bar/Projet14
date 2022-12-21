import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import store from './store/index.store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
