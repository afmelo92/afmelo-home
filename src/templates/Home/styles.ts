import styled from 'styled-components'

export const Container = styled.div`
  border: 2px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;

  background: url('/logo.svg') no-repeat center;
`
export const Presentation = styled.div`
  border: 2px solid green;
  height: fit-content;
  margin: auto;
  line-height: 80px;

  h1 {
    font-size: 80px;
    font-weight: 500;
  }

  h2 {
    font-weight: 200;
    font-size: 45px;
  }

  h3 {
    font-size: 25px;
    font-weight: 300;
  }
`
