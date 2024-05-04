import React, { useContext, useState,useEffect } from 'react';
import { ItemContext } from '../App';
import './Product.css';

const Product = () => {
  const products = useContext(ItemContext);
  const [productIndex, setProductIndex] = useState(getRandomIndex(products.length));

  useEffect(() => {
    setProductIndex(getRandomIndex(products.length));
  }, [products]);

  function getRandomIndex(length) {
    return Math.floor(Math.random() * length);
  }

  const product = products[productIndex];
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value)
    setQuantity(newQuantity);
  };

  const handleRemove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <div className="product-display">
          <img src={product.thumbnail}  alt={product.title} className="product-image img-fluid" />
          <div className="product-details">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-interactions">
              <select className="quantity-selector" value={quantity} onChange={handleQuantityChange}>
                {[...Array(10).keys()].map(index => <option key={index + 1} value={index + 1}>{index + 1}</option>)}
              </select>
              <div className="pricing">
                <span className="price">${product.price}</span>
              </div>
            </div>
            <div className="price-summary">
              <p>Subtotal: <span>${product.price * quantity}</span></p>
              <p >Shipping: <span  style={{ color: 'black' }}>FREE</span></p>
              <p>Total: <span>${product.price * quantity}</span></p>
            </div>
            <button className="remove-btn" onClick={handleRemove}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
