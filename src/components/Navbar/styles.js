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
  @media (max-width: 992px){
    margin-left: 20px;
  }
  @media (max-width: 768px){
    margin-left: 10px;
  }
  img{
    width: 50px;
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
    font-size: 16px;
    cursor: pointer;
    margin-left: 15px;
    color: black;
    text-decoration: none;
    font-family: "Open Sans Condensed";
  }
  img{
      width: 30px;
      height: auto;
      margin-left: 15px;
      margin-right: 20px;
    }
`

export const Link = styled.a`
  font-size: 16px;
  cursor: pointer;
  margin-left: 15px;
  color: black;
  text-decoration: none;
  font-family: "Open Sans Condensed";
`