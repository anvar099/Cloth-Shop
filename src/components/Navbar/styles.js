import styled from 'styled-components'

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const LogoContent = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 40px;
  img{
    width: 40px;
    height: auto;
    cursor: pointer;
    margin-left: 20px;
  }
`
export const NavbarLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 2%;
  a{
    font-size: 18px;
    cursor: pointer;
    margin-left: 15px;
    color: black;
    text-decoration: none;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  img{
      width: 30px;
      height: auto;
      margin-left: 15px;
      margin-right: 20px;
    }
`

export const Link = styled.a`
  font-size: 18px;
  cursor: pointer;
  margin-left: 15px;
  color: black;
  text-decoration: none;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  
`