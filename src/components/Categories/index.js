import React from 'react';
import './styles.css';
import data from '../../mock/categories';


const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories-row">
        {
          data.slice(0, 3)
          .map(({id, name, image}) => (
            <div key={id} className="category-item-above1">
              <div className="background-image">
                <img className="image-bg" src={image} alt="..." />
              </div>
              <div className="item-label">
                <h1 className="item-name">{name}</h1>
                <h2 className="item-text">Shop Now</h2>
              </div>
            </div>
          ))
        }
      </div>



      <div className="categories-row">
        {
          data.slice(3, 5)
          .map(({id, name, image}) => (
            <div key={id} className="category-item1">
              <div className="background-image-2">
                <img className="image-bg-2" src={image} alt="..." />
              </div>
              <div className="item-label">
                <h1 className="item-name">{name}</h1>
                <h2 className="item-text">Shop Now</h2>
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
  )
};

export default Categories;