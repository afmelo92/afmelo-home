import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.div`
  ${() => css`
    width: 100%;
    min-height: calc(100vh - 160px);
    justify-content: space-evenly;
    margin: auto;
    line-height: 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    ${media.lessThan('medium')`
      line-height: 50px;
    `}
  `}
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

    ${media.lessThan('medium')`
      padding-left: ${theme.spacings.small};
      margin-bottom: -150px;

      h1 {
        font-size: ${theme.font.sizes.huge}
      }

      h2 {
        font-size: ${theme.font.sizes.xxlarge}
      }

      h3 {
        font-size: ${theme.font.sizes.large}
      }
    `}
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xxsmall};
    max-width: 600px;

    h1 {
      font-weight: 200;
      font-size: ${theme.font.sizes.huge};
      line-height: ${theme.spacings.large};
      margin-left: ${theme.spacings.xxsmall};
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
      margin-left: ${theme.spacings.small};
    }

    ${media.lessThan('medium')`
      padding: ${theme.spacings.small};


      h1 {
        font-size: ${theme.font.sizes.xxlarge}
      }

      h2 {
        font-size: ${theme.font.sizes.xlarge}
      }

      h3 {
        font-size: ${theme.font.sizes.large}
      }
    `}
  `}
`
export const Social = styled.section`
  min-height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin: 0 20px;
    transition: margin 500ms ease-in;

    :hover {
      margin-bottom: 15px;
    }
  }
`
