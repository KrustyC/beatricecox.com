import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { DefaultLayout as Layout } from 'layouts'

import theme from './theme'
import AppRoutes from './Routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router basename={process.env.BASE_URL || '/'}>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  </ThemeProvider>
)

export default App
