import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import * as S from "./styled"

const Avatar = () => (
  <S.AvatarWrapper>
    <StaticImage
      src='../../images/profile.jpeg'
      alt='jorge profile picture'
      placeholder='blurred'
    />
  </S.AvatarWrapper>
)

export default Avatar
