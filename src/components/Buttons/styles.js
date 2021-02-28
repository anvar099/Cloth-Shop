import styled, { css } from 'styled-components';

const getButton = (props) => {
  if (props.formBtn){
    return FormBtn;
  }
  else{
    return ButtonPrimary;
  }
}

export const ButtonPrimary = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0px 20px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  border: 1px solid black;
  ${getButton}
  &:hover{
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`
export const FormBtn = css`
  min-width: 165px;
  width: 150px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0px 20px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  border: 1px solid black;
  margin-top: 30px;
  &:hover{
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`