import React from 'react';

import './Header.css';

const Header = () => {


  

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
// yeh ok hai but threft k liye hai 
/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleViewMenuClick = () => {
    navigate('/chetan');
  };

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button onClick={handleViewMenuClick}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
*/