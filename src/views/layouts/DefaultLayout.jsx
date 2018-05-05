import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Navbar, Footer } from '../components'

const DefaultLayout = ({ hideNavigation, children }) => (
  <Fragment>
    { !hideNavigation && <Navbar />}
    {children}
    { !hideNavigation && <Footer />}
  </Fragment>

)

DefaultLayout.propTypes = {
  hideNavigation: PropTypes.bool,
  children: PropTypes.any.isRequired
}

DefaultLayout.defaultProps = {
  hideNavigation: false
}

export default DefaultLayout
