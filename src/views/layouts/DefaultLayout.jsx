import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Navbar, Footer } from '../components'

const DefaultLayout = ({ children }) => (
  <Fragment>
    <Navbar />
    <div className="columns" style={{ minHeight: '600px' }}>
      <div className="column col-xs-3" />
      <div className="column col-xs-6">
        {children}
      </div>  
      <div className="column col-xs-3" />
    </div>
    <Footer />
  </Fragment>

)

DefaultLayout.propTypes = {
  children: PropTypes.any.isRequired
}

export default DefaultLayout
