import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import ProductsProvider from './context/product-context'
import configureProductsStore from './hooks-store/products-store'

configureProductsStore()

ReactDOM.render(
  // <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </ProductsProvider>,
  document.getElementById('root')
);
