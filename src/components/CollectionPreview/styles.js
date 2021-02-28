import styled from 'styled-components'

export const PreviewContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
export const TitlePreview = styled.h1`
  font-size: 28px;
  font-weight: 700;
  font-style: normal;
  font-family: "Open Sans Condensed";
  text-transform: uppercase;
  margin-left: 45px;
  margin-top: 60px;
  &:hover{
    opacity: 0.6;
  }
  @media (max-width: 992px){
    text-align: center;
  }
`