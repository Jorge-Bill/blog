import React from 'react'

import * as S from './styles'

const Card = ({ title, description, icon, ...props }) => (
  <S.CardWrapper {...props}>
    <S.CardTitle>{title}</S.CardTitle>
    {icon}
    <S.CardDescription>{description}</S.CardDescription>
  </S.CardWrapper>
)

export default Card
