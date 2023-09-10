import {useSelector} from "react-redux";
import React from "react";

export const CartPage = () => {
  const cart = useSelector(state => state.cart)

  return (
    <div className={'product-list'}>
      {cart.map((product) => (
        <div key={product._id} className="product">
          <img src={'https://cdn-icons-png.flaticon.com/512/6484/6484900.png'} alt={product.name} className={'img'}/>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Buy</button>
        </div>
      ))}
    </div>
  )
}