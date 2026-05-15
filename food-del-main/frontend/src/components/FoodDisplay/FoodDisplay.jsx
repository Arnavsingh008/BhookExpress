import React, { useContext } from 'react'
import styles from './FoodDisplay.module.css'
// import { food_list } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

import FoodItem from '../Fooditem/FoodItem';

const CATEGORY_ALIASES = {
  deserts: 'desserts',
  noodels: 'noodles',
};

const normalizeCategory = (value = '') => {
  const normalized = value.trim().toLowerCase();
  return CATEGORY_ALIASES[normalized] || normalized;
};

function FoodDisplay({category}) {

  const {food_list, searchTerm}=useContext(StoreContext)
  const selectedCategory = normalizeCategory(category);

  // Filter items based on selected category and search term
  const filteredItems = food_list.filter((item) => {
    const itemCategory = normalizeCategory(item.category);
    const categoryMatch = selectedCategory !== "" && (selectedCategory === "all" || selectedCategory === itemCategory);
    const searchMatch = !searchTerm.trim() || item.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // If there's a search term, show matches regardless of category
    if (searchTerm.trim()) {
      return searchMatch;
    }
    
    // If no search term, use category filtering
    return categoryMatch;
  });

  return (
    <div className={styles.foodDisplay} id="foodDisplay">
      <h2>Top dishes near you</h2>

      <div className={styles.foodDisplayList}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <FoodItem 
              key={item._id || index} 
              id={item._id} 
              name={item.name} 
              description={item.description} 
              price={item.price} 
              image={item.image}  
            />
          ))
        ) : (
          <p>{searchTerm.trim() ? "No dishes found" : "Please Select the Category First"}</p>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
