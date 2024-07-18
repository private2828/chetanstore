/*
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import './ProductsYouMayLike.css';

const ProductsYouMayLike = ({ productId }) => {
  const { url } = useContext(StoreContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(`${url}/api/food/related/${productId}`);
        setRelatedProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    // Ensure productId is defined before making the API call
    if (productId) {
      fetchRelatedProducts();
    }
  }, [productId, url]);

  return (
    <div className="other-products">
      <h2>Products You May Like</h2>
      <div className="other-products-grid">
        {relatedProducts.map((relatedProduct) => (
          <Link to={`/product-detail/${relatedProduct._id}`} key={relatedProduct._id} className="other-product-card">
            <img
              src={`${url}/images/${relatedProduct.image}`}
              alt={relatedProduct.name}
            />
            <h3>{relatedProduct.name}</h3>
            <div className="stars">
              {'★'.repeat(Math.floor(relatedProduct.rating)) + '☆'.repeat(5 - Math.floor(relatedProduct.rating))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsYouMayLike; */
/*
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import './ProductsYouMayLike.css';

const ProductsYouMayLike = ({ productId }) => {
  const { url } = useContext(StoreContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(`${url}/api/food/related/${productId}`);
        setRelatedProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    if (productId) {
      fetchRelatedProducts();
    }
  }, [productId, url]);

  return (
    <div className="other-products">
      <h2>Products You May Like</h2>
      <div className="other-products-grid">
        {relatedProducts.map((relatedProduct) => (
          <Link to={`/product-detail/${relatedProduct._id}`} key={relatedProduct._id} className="other-product-card">
            <div className="card-content">
              <div className="product-info">
                <h3>{relatedProduct.name}</h3>
                <div className="stars">
                  {'★'.repeat(Math.floor(relatedProduct.rating)) + '☆'.repeat(5 - Math.floor(relatedProduct.rating))}
                </div>
              </div>
              <img
                src={`${url}/images/${relatedProduct.image}`}
                alt={relatedProduct.name}
                className="product-image"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsYouMayLike;
 ye hh thoda modified hai aacha wala and sab se uppar wala normal hai 
*/

import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import './ProductsYouMayLike.css';

const ProductsYouMayLike = ({ productId }) => {
  const { url } = useContext(StoreContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get(`${url}/api/food/related/${productId}`);
        setRelatedProducts(response.data.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    if (productId) {
      fetchRelatedProducts();
    }
  }, [productId, url]);

  return (
    <section className="youmaylike-products-section">
      <div className="youmaylike-container">
        <div className="youmaylike-section-header">
          <h1>Products You May Like</h1>
        </div>
        <div className="youmaylike-products-grid">
          {relatedProducts.map((relatedProduct) => (
            <div className="youmaylike-product-card" key={relatedProduct._id}>
              <Link to={`/product-detail/${relatedProduct._id}`} className="youmaylike-product-link">
                <img
                  alt={relatedProduct.name}
                  className="youmaylike-product-image"
                  src={`${url}/images/${relatedProduct.image}`}
                />
                <div className="youmaylike-product-info">
                  <h2>{relatedProduct.name}</h2>
                  <p className="youmaylike-product-price">${relatedProduct.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsYouMayLike;
