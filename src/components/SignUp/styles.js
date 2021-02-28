import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
`
export const Title = styled.h1`
  font-size: ${props => props.text22 ? "24px" : "18px"};
  font-weight: ${props => props.weight500 ? "600" : "100"};
  font-family: "Open Sans Condensed";
`
export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  font-family: "Open Sans Condensed";
  color: black;
`
export const LabelContent = styled.div`
  position: relative;
`
export const Input = styled.input`
  width: 400px;
  padding: 10px 10px 10px 5px;
  border: 1px solid black;
  font-family: "Open Sans Condensed";
  display: block;
  font-size: 18px;
  color: black;
  border-image: initial;
  margin: 25px 0px;
  border-top: none;
  border-left: none;
  border-right: none;
  box-sizing: border-box;
  box-shadow: none;
  &:focus{
    outline: none;
  }
  
  /* &:focus ~ .label{
    top: -10px;
    left: 0;
    font-size: 20px;
    outline: none;

  } */
  @media (max-width: 992px){
    width: 300px;
  }
  @media (max-width: 768px){
    width: 400px;
  }
`
export const Label = styled.label`
  font-family: "Open Sans Condensed";
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: all 300ms ease 0s;
  font-size: 16px;
  &:focus{
    top: 30px;
  }
`


export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  display: block;

`