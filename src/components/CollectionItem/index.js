import React from 'react';
import { 
  ShopCategoriesBox, 
  ShopCategoriesBgImg, 
  ShopCategoriesBtn, 
  ShopCategoriesLink,
  ShopCategoriesBrand,
  ShopCategoriesName, 
  ShopCategoriesPrice 
} from './styles'

const CollectionItem = ({name, price, img }) => {

  return (
        <ShopCategoriesBox>
          <ShopCategoriesBgImg>
            <img src={img} alt="..." />
            <ShopCategoriesBtn>
              <ShopCategoriesLink>
                ADD TO CART
              </ShopCategoriesLink>
            </ShopCategoriesBtn>
          </ShopCategoriesBgImg>
          <ShopCategoriesBrand>
            <ShopCategoriesName>
              {name}
            </ShopCategoriesName>
            <ShopCategoriesPrice>
              {price}
            </ShopCategoriesPrice>
          </ShopCategoriesBrand>
        </ShopCategoriesBox>
  )
};

export default CollectionItem;