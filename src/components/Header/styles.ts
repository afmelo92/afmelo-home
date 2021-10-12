import styled, { css } from 'styled-components'

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
  ${({ theme }) => css`
    margin-left: ${theme.spacings.medium};
    margin-right: ${theme.spacings.medium};
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    margin: ${theme.spacings.medium};
    cursor: pointer;
    text-decoration: none;
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
      border-color: ${theme.colors.primary};
      transition: ${theme.transition.default};
    }
  `}
`
