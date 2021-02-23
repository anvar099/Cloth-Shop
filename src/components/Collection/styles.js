import styled from 'styled-components'

export const CategoriesContainer = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`
export const CategoriesRow = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const CategoriesItem1 = styled.div`
  width: 30%;
  height: 250px;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
  transition: 5s ease;
  &:hover {
  background-size: 120%;
}
`
export const CategoriesItem2 = styled.div`
  width: 46.2%;
  height: 380px;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px; 
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
  transition: 5s ease;
  &:hover{
  background-size: 120%;
}
`
export const ItemLabel = styled.div`
  width: 80px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1.5px solid black;
  opacity: 0.7;
  padding: 8px 12px;
  position: absolute;
  &:hover{
  opacity: 0.9;
}
`
export const ItemName = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: rgb(41, 41, 41);
  text-transform: uppercase;
  line-height: 10px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`
export const ItemText =styled.h2`
  font-size: 16px;
  font-weight: 100;
  color: rgb(117, 117, 117);
  line-height: 10px;
  text-transform: uppercase;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  letter-spacing: -0.8px;
`