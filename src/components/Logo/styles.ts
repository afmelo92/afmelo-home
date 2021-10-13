import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const containerModifiers = {
  normal: () => css`
    width: 5rem;
    height: 5rem;
  `,

  large: () => css`
    width: 10rem;
    height: 10rem;
  `,

  hideOnMobile: () => css`
    display: none;
  `
}

export const Container = styled.div<LogoProps>`
  ${({ size, hideOnMobile }) => css`
    ${!!size && containerModifiers[size]}
    ${!!hideOnMobile && containerModifiers.hideOnMobile}
  `}
`
