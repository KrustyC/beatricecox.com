
import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { DefaultLayout as Layout } from 'layouts'

const LatyoutRoute = ({ component: ViewComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <AuthConsumer>
        {({ isAuthenticated }) => (
          isAuthenticated ? (
            <ViewComponent {...props} />
          ) : (
            <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
          )
        )}
      </AuthConsumer>
    )
    }
  />
)

LatyoutRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object
}

LatyoutRoute.defaultProps = {
  location: {}
}

export default LatyoutRoute
