import React from 'react';
import './styles.css'
import data from "../../mock/shop-categories";



const ShopCategories = () => {
  return (
    
    <div className="shop-categories-container">
      <div className="shop-categories-title-box">
        <a className="shop-categories-title" href="#"> 
        
        </a>
      </div>
      <div className="shop-categories-row">
      {
          
          data.map(({id, brand, price, image}) => (
            <div key={id} className="shop-categories-box">
              <div className="shop-categories-bg-img">
                <img src={image} alt="..." className="shop-categories-img" />
                <div className="shop-categories-btn">
                  <a href="#" className="shop-categories-link">
                    ADD TO CART
                    
                  </a>
                </div>
              </div>
              
              <div className="shop-categories-brand-name">
                <div className="shop-categories-name">
                  {brand}
                </div>
                <div className="shop-categories-price">
                  {price}
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
};

export default ShopCategories;