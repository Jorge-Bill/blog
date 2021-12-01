import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import AvatarWrapper from './styled'

const Avatar = () => (
  <AvatarWrapper>
    <StaticImage src="../../images/profile.jpeg" alt="jorge profile picture" placeholder="blurred" />
  </AvatarWrapper>
)

export default Avatar
