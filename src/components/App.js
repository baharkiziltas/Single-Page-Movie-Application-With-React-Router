import React, { Component } from 'react';
import Product from './Product';
import ProductList from './ProductList';
import { Routes, Route, Link } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
          <Routes>
              <Route path='/' element={<Product></Product>}></Route>
              <Route path='/productlist' element={<ProductList></ProductList>}></Route>
          </Routes>
          
      </div>
    )
  }
}
