import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  height: 80px;
  width: 100%;
`
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LinkWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`

export const Link = styled.a`
  font-weight: 300;
  font-size: 20px;
  margin: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #e1e1e1;
  position: relative;

  ::before {
    position: absolute;
    bottom: -10px;
    content: '';
    height: 0;
    width: 0;
    border: 1px solid transparent;
  }

  :hover::before {
    width: 100%;
    border-color: #15f008;
    transition: ease-in-out 0.2s;
  }
`
