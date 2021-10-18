import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
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
