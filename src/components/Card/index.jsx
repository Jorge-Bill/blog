import React from 'react'
import PropTypes from "prop-types"

import * as S from './styles'

const Card = ({ title, description, icon, ...props }) => (
  <S.CardWrapper {...props}>
    <S.CardTitle>{title}</S.CardTitle>
    {icon}
    <S.CardDescription>{description}</S.CardDescription>
  </S.CardWrapper>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node,
}

Card.defaultProps = {
  icon: ''
}

export default Card
