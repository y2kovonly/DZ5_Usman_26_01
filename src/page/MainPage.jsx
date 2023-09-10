import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../store/MainStore.js";
import json from '../data/data.json'
import '../App.css'

export const MainPage = () => {
  const products = json
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const isProductInCart = cart.some(item => item._id === product._id);

    if (!isProductInCart) {
      dispatch(addToCart(product));
    } else {
      alert("This product is already in the cart.");
    }
  };
  return (
    <div className="App">
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product">
            <img src={'https://cdn-icons-png.flaticon.com/512/6484/6484900.png'} alt={product.name} className={'img'} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>В корзину</button>
          </div>
        ))}
      </div>
    </div>
  );
}