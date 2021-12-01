import React from 'react'

import PropTypes from 'prop-types'

import CardWrapper  from './styled'

const Card = ({ children, ...props }) => <CardWrapper {...props}>{children}</CardWrapper>

Card.propTypes = {
  children: PropTypes.node
}

Card.defaultProps = {
  children: ''
}

export default Card
