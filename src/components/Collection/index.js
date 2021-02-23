import React from 'react';
import { CategoriesContainer, CategoriesRow, CategoriesItem1, ItemLabel, ItemName, ItemText, CategoriesItem2 } from './styles'
import data from '../../mock/collection';


const Collection = () => {
  return (
    <CategoriesContainer>
      <CategoriesRow>
        {
          data.slice(0, 3)
          .map(({id, title, image}) => (
            <CategoriesItem1 key={id} style={{backgroundImage: `url(${image})`}}>
             
             <ItemLabel>
                <ItemName>{title}</ItemName>
                <ItemText>Shop Now</ItemText>
              </ItemLabel>
            </CategoriesItem1>
          ))
        }
      </CategoriesRow>



      <CategoriesRow>
        {
          data.slice(3, 5)
          .map(({id, title, image}) => (
            <CategoriesItem2 key={id}  style={{backgroundImage: `url(${image})`}}>
             
             <ItemLabel>
                <ItemName>{title}</ItemName>
                <ItemText>Shop Now</ItemText>
              </ItemLabel>
            </CategoriesItem2>
          ))
        }
        
      </CategoriesRow>
    </CategoriesContainer>
  )
};

export default Collection;