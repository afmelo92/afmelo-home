import styled, { css } from 'styled-components'

export const Container = styled.div`
  border: 2px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: -80px;
`
export const Logo = styled.div`
  background: url('/logo.svg') no-repeat center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const Presentation = styled.div`
  height: fit-content;
  width: 100%;
  justify-content: space-evenly;
  margin: auto;
  line-height: 80px;
  display: flex;
  flex-direction: row;
`

export const Greeting = styled.div`
  ${({ theme }) => css`
    width: 600px;

    h1 {
      font-size: 90px;
      font-weight: 500;
    }

    h2 {
      color: ${theme.colors.primary};
      font-weight: 200;
      font-size: 45px;
    }

    h3 {
      color: ${theme.colors.primary};
      font-size: 25px;
      font-weight: 300;
    }
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    width: 600px;

    h1 {
      font-weight: 200;
      font-size: ${theme.font.sizes.huge};
      line-height: 50px;
      margin-left: 10px;
    }

    h2 {
      font-weight: 500;
      font-size: ${theme.font.sizes.xxlarge};
      transition: ${theme.transition.default};

      :hover {
        margin-left: 15px;
        transition: ${theme.transition.slow};
      }
    }

    h3 {
      font-weight: 300;
      font-size: ${theme.font.sizes.large};
      margin-left: 25px;
    }
  `}
`
