import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.header`
  ${({ theme }) => css`
    border: 1px solid green;
    z-index: ${theme.layers.menu};
    display: flex;
    height: 80px;
    width: 100%;
    position: sticky;
    top: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(18, 18, 18, 0.85) 100%
    );
  `}
`
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('medium')`
    justify-content: center;
  `}
`

export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.medium};
    margin-right: ${theme.spacings.medium};

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    cursor: pointer;
    text-decoration: none;
    position: relative;
    margin: ${theme.spacings.medium};

    ${media.lessThan('medium')`
      margin: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.medium};
    `}

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
      border-color: ${theme.colors.primary};
      transition: ${theme.transition.default};
    }
  `}
`
