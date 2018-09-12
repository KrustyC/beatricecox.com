import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const A = styled.a`
  text-decoration: none;
  text-transform: none;

  ${({ theme: { utils, colors } }) => css`
    color: ${colors.link};
    &:hover {
      color: ${utils.softDarken(colors.link)};
    }
  `}

`

const ExternalLink = ({ href, children }) => (
  <A href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </A>
)

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default ExternalLink
