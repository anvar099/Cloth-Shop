import styled from 'styled-components';

export const ShopCategoriesBox = styled.div`
  width: 22%;
  height: 350px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-left: -25px;
  margin-right: -25px;
  @media(max-width: 768px){
    width: 45%;
    margin: 20px 10px;
  }
`
export const ShopCategoriesBgImg = styled.div`
  &:hover{
    background-color: white;
    opacity: 0.7;
  }
  img{
    height: 350px;
    width: 100%;
    object-fit: cover;
  }
`;
// .shop-categories-link{
//   display: none;
//   position: absolute;
// }
export const ShopCategoriesBtn = styled.div`
  margin-top: -65px;
  display: flex;
  justify-content: center;
  margin-left: -4%;
`
export const ShopCategoriesLink = styled.a`
  border: 1px solid black;
  padding: 10px 60px;
  background-color: white;
  opacity: 0.8;
  font-size: 16px;
  font-weight: 500;
  font-family: "Open Sans Condensed";
  letter-spacing: -0.5px;
  margin-left: 5px;
  &:hover{
    background-color: black;
    color: white;
  }
  @media (max-width: 992px){
    padding: 10px 50px;
  }
`
export const ShopCategoriesBrand = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`
export const ShopCategoriesName = styled.div`
  font-size: 18px;
  font-weight: 400;
  font-family: "Open Sans Condensed";
  letter-spacing: -0.5px;
  color: rgb(61, 61, 59);
`
export const ShopCategoriesPrice = styled.div`
  font-size: 18px;
  font-weight: 400;
  font-family: "Open Sans Condensed";
  letter-spacing: -0.5px;
  color: rgb(61, 61, 59);
`