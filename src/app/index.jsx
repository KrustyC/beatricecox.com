import React from 'react'
import { hot } from 'react-hot-loader'
import styled, { ThemeProvider } from 'styled-components'

import theme from './theme'

const EmptyLayout = styled.div`
  display: flex;
  height: 100vh;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <EmptyLayout>
      <h1>Beatrice Duguid Cox</h1>
    </EmptyLayout>
  </ThemeProvider>
)

export default hot(module)(App)
