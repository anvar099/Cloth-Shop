import React from 'react';

import './styles.css';


const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories-row">
          <div className="category-item-above1">
            <div className="item-label">
              <h1 className="item-name">Hats</h1>
              <h2 className="item-text">Shop Now</h2>
            </div>
          </div>
          <div className="category-item-above2">
            <div className="item-label">
              <h1 className="item-name">Jackets</h1>
              <h2 className="item-text">Shop Now</h2>
            </div>
          </div><div className="category-item-above3">
            <div className="item-label">
              <h1 className="item-name">Sneakers</h1>
              <h2 className="item-text">Shop Now</h2>
            </div>
          </div>
      </div>
      <div className="categories-row">
        <div className="category-item1">
          <div className="item-label">
              <h1 className="item-name">Womens</h1>
              <h2 className="item-text">Shop Now</h2>
            </div>
          </div>
          <div className="category-item2">
            <div className="item-label">
              <h1 className="item-name">Mens</h1>
              <h2 className="item-text">Shop Now</h2>
            </div>
          </div>
      </div>
    </div>
  )
};

export default Categories;