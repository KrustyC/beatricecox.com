import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import AppRoutes from './Routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router basename={process.env.BASE_URL || '/'}>
      <AppRoutes />
    </Router>
  </ThemeProvider>
)

export default App
