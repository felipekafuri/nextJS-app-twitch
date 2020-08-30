import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/_theme'

function MyApp<AppProps>({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
