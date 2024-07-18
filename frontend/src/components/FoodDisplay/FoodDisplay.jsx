


import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext); // getting images from food_list array which is mapped down item.img, item.name, etc.

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) { 
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;  

//yeh use kar k only 6 cheez hi dikhega matlab samajh rahe ho na bss wohi hai uske liey aur kuch nahi 
/*
import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleFoodItemClick = (itemId) => {
    // Redirect to product detail page with item id
    navigate(`/product-detail/${itemId}`);
  };

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.slice(0, 6).map((item) => {
          if (category === "All" || category === item.category) { 
            return (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                onItemClick={() => handleFoodItemClick(item._id)} // Pass callback function
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay; 
*/