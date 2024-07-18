/*
import React, { useState, useEffect, useContext } from 'react';
import './ProductDetails.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ProductsYouMayLike from '../ProductYouMayLike/ProductsYouMayLike';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, cartItems, url } = useContext(StoreContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}/api/food/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, url]);

  useEffect(() => {
    setQuantity(cartItems[id] || 0);
  }, [cartItems, id]);

  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(0, quantity + amount);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart(id);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      removeFromCart(id);
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleBuyNow = () => {
    if (Object.keys(cartItems).length > 0) {
      navigate('/cart');
    } else {
      alert('Please add at least one item to the cart before proceeding.');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product-detail">
        <div className="product-image">
          <img src={`${url}/images/${product.image}`} alt="Product" />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="product-reviews">
            <span className="stars">★★★★☆</span> (4.0)
          </div>
          <div className="product-size">
            <label htmlFor="size">Size:</label>
            <select id="size">
              <option value="6UK">6 UK</option>
              <option value="7UK">7 UK</option>
              <option value="8UK">8 UK</option>
              <option value="9UK">9 UK</option>
              <option value="10UK">10 UK</option>
              <option value="11UK">11 UK</option>
            </select>
          </div>
          <div className="product-quantity">
            <button className="icon-button" onClick={handleRemoveFromCart}>
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button className="icon-button" onClick={handleAddToCart}>
              <FaPlus />
            </button>
            <button onClick={handleBuyNow}>Buy Now</button>
          </div>
          <div className="product-description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
          <div className="product-price">
            <h2>Price:</h2>
            <p>${product.price}</p> {/* Assuming price is a numeric field */ //}
        /*  </div>
        </div>
      </div>
      <ProductsYouMayLike productId={id} />
    </>
  );
};

export default ProductDetail; */

/* yaad nahi aarha yeh wala bhi okk hai  
import React, { useState, useEffect, useContext } from 'react';
import './ProductDetails.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ProductsYouMayLike from '../ProductYouMayLike/ProductsYouMayLike';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, cartItems, url } = useContext(StoreContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}/api/food/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, url]);

  useEffect(() => {
    setQuantity(cartItems[id] || 0);
  }, [cartItems, id]);

  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(0, quantity + amount);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart(id);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      removeFromCart(id);
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleBuyNow = () => {
    if (Object.keys(cartItems).length > 0) {
      navigate('/cart');
    } else {
      alert('Please add at least one item to the cart before proceeding.');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product-detail">
        <div className="product-image">
          <div className="product-image-card">
            <img src={`${url}/images/${product.image}`} alt="Product" />
          </div>
        </div>
        <div className="product-info">
          <div className="product-header">
            <h1>{product.name}</h1>
            <div className="product-reviews">
              <span className="stars">★★★★☆</span> (4.0)
            </div>
          </div>
          <div className="product-size">
            <label htmlFor="size">Size:</label>
            <select id="size">
              <option value="6UK">6 UK</option>
              <option value="7UK">7 UK</option>
              <option value="8UK">8 UK</option>
              <option value="9UK">9 UK</option>
              <option value="10UK">10 UK</option>
              <option value="11UK">11 UK</option>
            </select>
          </div>
          <div className="product-quantity">
            <button className="icon-button" onClick={handleRemoveFromCart}>
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button className="icon-button" onClick={handleAddToCart}>
              <FaPlus />
            </button>
            <button onClick={handleBuyNow}>Buy Now</button>
          </div>
          <div className="product-description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
          <div className="product-price">
            <h2>Price:</h2>
            <p>${product.price}</p>
          </div>
        </div>
      </div>
      <ProductsYouMayLike productId={id} />
    </>
  );
};

export default ProductDetail; */

import React, { useState, useEffect, useContext } from 'react';
import './ProductDetails.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { FaPlus, FaMinus } from 'react-icons/fa';
import ProductsYouMayLike from '../ProductYouMayLike/ProductsYouMayLike';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, cartItems, url } = useContext(StoreContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}/api/food/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, url]);

  useEffect(() => {
    setQuantity(cartItems[id] || 0);
  }, [cartItems, id]);

  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(0, quantity + amount);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart(id);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      removeFromCart(id);
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleBuyNow = () => {
    if (Object.keys(cartItems).length > 0) {
      navigate('/cart');
    } else {
      alert('Please add at least one item to the cart before proceeding.');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product-detail">
        <div className="product-image">
          <div className="product-image-card">
            <img src={`${url}/images/${product.image}`} alt="Product" />
          </div>
        </div>
        <div className="product-info">
          <div className="product-header">
            <h1>{product.name}</h1>
            <div className="product-reviews">
              <span className="stars">★★★★☆</span> (4.0)
            </div>
          </div>
          <div className="product-size">
            <label htmlFor="size">Size:</label>
            <select id="size">
              <option value="6UK">6 UK</option>
              <option value="7UK">7 UK</option>
              <option value="8UK">8 UK</option>
              <option value="9UK">9 UK</option>
              <option value="10UK">10 UK</option>
              <option value="11UK">11 UK</option>
            </select>
          </div>
          <div className="product-quantity">
            <button className="icon-button" onClick={handleRemoveFromCart}>
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button className="icon-button" onClick={handleAddToCart}>
              <FaPlus />
            </button>
            <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
          </div>
          <div className="product-description">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>
          <div className="product-price">
            <h2>Price:</h2>
            <p>${product.price}</p>
          </div>
        </div>
      </div>
      <br />
      <ProductsYouMayLike productId={id} />
    </>
  );
};

export default ProductDetail;
