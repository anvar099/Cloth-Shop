import React from 'react';
import './styles.css'

const CollectionItem = ({name, price, img }) => {

  return (
    
    <div className="shop-categories-container">
      <div className="shop-categories-row">
        <div className="shop-categories-box">
          <div className="shop-categories-bg-img">
            <img src={img} alt="..." className="shop-categories-img" />
            <div className="shop-categories-btn">
              <a href="#" className="shop-categories-link">
                ADD TO CART
              </a>
            </div>
          </div>
          
          <div className="shop-categories-brand-name">
            <div className="shop-categories-name">
              {name}
            </div>
            <div className="shop-categories-price">
              {price}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CollectionItem;