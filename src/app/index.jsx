import React from 'react'
import { hot } from 'react-hot-loader'
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'


import theme from './theme'
import Navbar from './components/Navbar'

const EmptyLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Section = styled.div`
  background: ${({ color }) => color};
  min-height: 100vh;
`

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <EmptyLayout>
        <Navbar />
        <Section color="#178DCC" />
        <Section color="#36FFD9" />
        <Section color="#FF8776" />
      </EmptyLayout>
    </ThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
