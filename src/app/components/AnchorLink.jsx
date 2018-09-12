import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AnchorLink extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired
  }

  componentDidMount() {
    require('smoothscroll-polyfill').polyfill()
  }

  smoothScroll = (e) => {
    e.preventDefault()

    const id = e.currentTarget.getAttribute('href').slice(1)
    document.getElementById('scrollable').scroll({
      top: document.getElementById(id).offsetTop - 0,
      behavior: 'smooth'
    })
  }

  render() {
    const { children, ...rest } = this.props
    return (
      <a
        {...rest}
        onClick={this.smoothScroll}
        role="button"
        tabIndex="0"
        onKeyDown={() => null}
      >
        {children}
      </a>
    )
  }
}

export default AnchorLink
