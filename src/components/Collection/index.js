import React, { useState, useEffect } from "react";
import { 
  CategoriesContainer, 
  CategoriesRow, 
  CategoriesItem1, 
  ItemLabel, 
  ItemName, 
  ItemText, 
  CategoriesItem2 
} from './styles'



const Collection = () => {

  const [data, setData] = useState([]); // state, setState

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://abubakr.vakhid.digital/portfolio/fake-api.php');
      const json = await response.json();
      setData(json)
    }
    fetchData()
  }, [])
  console.log(data, "collection.data")


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