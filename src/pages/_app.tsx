import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          🦈 AFMELO :::: 💻 FULLSTACK DEV :::: ⚛️ REACT :::: 🟩 NODE
        </title>
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta
          name="description"
          content="AFMELO :::: FULLSTACK DEV :::: NODE :::: REACT"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default App
