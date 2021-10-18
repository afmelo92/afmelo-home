import styled, { css } from 'styled-components'

import { IconProps } from '.'

const containerModifiers = {
  normal: () => css`
    width: 25px;
    height: 25px;
  `,

  large: () => css`
    width: 50px;
    height: 50px;
  `,

  hideOnMobile: () => css`
    display: none;
  `
}

export const Container = styled.div<IconProps>`
  ${({ size, hideOnMobile }) => css`
    ${!!size && containerModifiers[size]}
    ${!!hideOnMobile && containerModifiers.hideOnMobile}
  `}
`
