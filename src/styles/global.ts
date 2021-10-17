import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: #121212;
    }

    ::-webkit-scrollbar-thumb {
      background: #323232;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      background-color: ${theme.colors.mainBg};
    }

    body {
      color: ${theme.colors.white};
      font-family: ${theme.font.family};
    }
  `}
`

export default GlobalStyles
