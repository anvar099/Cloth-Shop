import React from 'react';

import './styles.css';


const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories-row">
          <div className="category-item-above">
            <div className="item-label">
              <h1 className="item-name">Hats</h1>
              <h2 className="item-text">Shop Now</h2>
            </div>
          </div>
          <div className="category-item-above">
            <div className="item-label">
              <h1 className="item-name">Hats</h1>
              <h2 className="item-text">Shop Now</h2>
            </div>
          </div><div className="category-item-above">
            <div className="item-label">
              <h1 className="item-name">Hats</h1>
              <h2 className="item-text">Shop Now</h2>
            </div>
          </div>
      </div>
      <div className="categories-row">
        <div className="category-item">
          <div className="item-label">
              <h1 className="item-name">Hats</h1>
              <h2 className="item-text">Shop Now</h2>
            </div>
          </div>
          <div className="category-item">
            <div className="item-label">
              <h1 className="item-name">Hats</h1>
              <h2 className="item-text">Shop Now</h2>
            </div>
          </div>
      </div>
    </div>
  )
};

export default Categories;