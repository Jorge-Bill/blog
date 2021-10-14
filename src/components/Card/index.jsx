import React from "react"

import PropTypes from "prop-types"

import * as S from "./styled"

const Card = ({ children, ...props }) => (
  <S.CardWrapper {...props}>{children}</S.CardWrapper>
)

Card.propTypes = {
  children: PropTypes.node,
}

Card.defaultProps = {
  children: "",
}

export default Card
