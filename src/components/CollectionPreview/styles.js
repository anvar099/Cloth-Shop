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
  font-size: 30px;
  font-weight: 110;
  font-style: normal;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin-left: 45px;
  margin-top: 60px;
  &:hover{
    opacity: 0.6;
  }
`